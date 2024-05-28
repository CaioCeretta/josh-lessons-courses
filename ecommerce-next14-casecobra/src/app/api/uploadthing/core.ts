/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { z } from 'zod'
import sharp from 'sharp'
import { db } from '@/db'

const f = createUploadthing()

// const auth = (req: Request) => ({ id: 'fakeId' }) // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    .input(z.object({ configId: z.string().optional() }))
    // Set permissions and file types for this FileRoute
    .middleware(async ({ input }) => {
      /* We are taking the input, passing it through the middleware, processing it
      before the upload starts, it simply returns the input as it is */
      return { input }
    })

    .onUploadComplete(async ({ metadata, file }) => {
      /* This code RUNS ON YOUR SERVER after upload, it receives metadata and file informations, in this case it extracts
      the configId from the metadata */
      const { configId } = metadata.input

      // Fetch the image
      const res = await fetch(file.url)

      // Convert to a buffer
      const buffer = await res.arrayBuffer()

      // grab the image metadata and retrieve width and height
      const imageMetadata = await sharp(buffer).metadata()

      const { width, height } = imageMetadata

      if (!configId) {
        const configuration = await db.configuration.create({
          data: {
            imageUrl: file.url,
            height: height || 500,
            width: width || 500,
          },
        })

        return { configId: configuration.id }
      } else {
        const updatedConfiguration = db.configuration.update({
          where: {
            id: configId,
          },
          data: {
            croppedImageUrl: file.url,
          },
        })

        // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback

        return { configId: updatedConfiguration }
      }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
