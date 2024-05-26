'use client'

import { Progress } from '@/components/ui/progress'
import { useToast } from '@/components/ui/use-toast'
import { useUploadThing } from '@/lib/uploadthing'
import { cn } from '@/lib/utils'
import { Image, Loader2, MousePointerSquareDashedIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import Dropzone, { FileRejection } from 'react-dropzone'

/* 
 Pages by default are server side, so that's why we have to inform next that his is client size, so we are able to 
  use hooks, etc. So we need to opt out that behavior by using the use client at the very top
*/

const Page = () => {
  const { toast } = useToast()
  const [isDragOver, setIsDragOver] = useState<boolean>(false)
  const [uploadProgress, setUploadProgress] = useState<number>(0)

  const router = useRouter()

  /* useTransition is a react hook that is used to manage state updates in away that allows for smoother transitions.
  when we destructure the useTransition, just like the useState, the first item of the array is the state and the second one
 is the going to be the startTransition function, and this is good for when we are going to navigate the user to the next
  step, so we will control the loading state while the page is loading
 */

  const { startUpload, isUploading } = useUploadThing('imageUploader', {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId

      /* With the startTransition we can display a loading state for the user while he is being redirected */
      startTransition(() => {
        router.push(`/configure/design?id=${configId}`)
      })
    },
    onUploadProgress(p) {
      /* Now we can use this p value to display our loading state */
      setUploadProgress(p)
    },
  })

  /* What is happening here on the cn is that on the first parameter we pass all the defaults classNames that we want, but
  as the second argument we passed an object, and in this object a condition to apply those classes if the statement after
  the : is true */

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles

    setIsDragOver(false)

    toast({
      title: `${file.file.type} type is not supported`,
      description: 'Please choose a PNG|JPG|JPEG image instead',
      variant: 'destructive',
    })
  }

  const onDropAccepted = (acceptedFiles: File[]) => {
    /* This config id, is because on the core.ts, on the imageUploader function, we specified this as an input. One thing
    is that it is optional, so we can pass the configId as undefined */

    startUpload(acceptedFiles, { configId: undefined })

    setIsDragOver(false)
  }

  const [isPending, startTransition] = useTransition()

  return (
    <div
      className={cn(
        `ring-1ring-inset relative my-16 flex h-full w-full flex-1 flex-col items-center
        justify-center rounded-xl bg-gray-900/5 p-2 ring-gray-900/10 lg:rounded-2xl`,
        {
          'bg-blue-900/10 ring-blue-900/25': isDragOver,
        },
      )}
    >
      <div className="relative flex w-full flex-1 flex-col items-center justify-center">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg'],
            'image/jpg': ['.jpg'],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="flex h-full w-full flex-1 flex-col items-center justify-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />

              {isDragOver ? (
                <MousePointerSquareDashedIcon className="mb-2 h-6 w-6 text-zinc-500" />
              ) : isUploading || isPending ? (
                <Loader2 className="mb-2 h-6 w-6 animate-spin text-zinc-500" />
              ) : (
                <Image className="mb-2 h-6 w-6 text-zinc-500" />
              )}
              <div className="mb-2 flex flex-col justify-center text-sm text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <p>Uploading...</p>
                    <Progress
                      className="mt-2 h-2 w-40 bg-gray-300"
                      value={uploadProgress}
                    />
                  </div>
                ) : isPending ? (
                  <div className="flex flex-col items-center">
                    <p>Redirecting, please wait...</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className="font-semibold">Drop file</span> to upload
                  </p>
                ) : (
                  <p>
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                )}
              </div>

              {isPending ? null : (
                <p className="text-xs text-zinc-500">PNG, JPG, JPEG</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  )
}

export default Page
