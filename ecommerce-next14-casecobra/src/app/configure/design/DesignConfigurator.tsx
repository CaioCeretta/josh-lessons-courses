'use client'
import NextImage from 'next/image'

import { Rnd } from 'react-rnd'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { cn } from '@/lib/utils'
import HandleComponent from '@/components/HandleComponent'

interface DesignConfiguratorProps {
  configId: string
  imageUrl: string
  imageDimensions: { height: number; width: number }
}

const DesignConfigurator = ({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfiguratorProps) => {
  return (
    <div className="relative mb-20 mt-20 grid grid-cols-3 pb-20">
      <div
        className="relative col-span-2 flex h-[37.5rem] w-full max-w-4xl
    items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300
    p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <div className="pointer-events-none relative aspect-[896/1861] w-60 bg-opacity-50">
          <AspectRatio
            ratio={896 / 1861}
            className="pointer-events-none relative
            z-50 aspect-[896/1861] w-full"
          >
            <div className="relative h-full w-full">
              <NextImage
                fill
                alt="phone image"
                src="/phone-template.png"
                className="z-index-50
            pointer-events-none select-none"
              />
            </div>
          </AspectRatio>
          <div
            className="shadow-[ left-[3px]right-[3px] absolute inset-0 bottom-px
          top-px z-40 rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]"
          />
          <div
            className={cn(
              'absolute inset-0 bottom-px left-[3px] right-[3px] top-px rounded-[32px]',
              `bg-zinc-950`,
            )}
          />
        </div>
        {/* Wrapping the image with round will make it resizable and draggable */}
        <Rnd
          default={{
            x: 150,
            y: 205,
            height: imageDimensions.height / 4,
            width: imageDimensions.width / 4,
          }}
          className="absolute z-20 border-[3px] border-primary"
          lockAspectRatio
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
            bottomLeft: <HandleComponent />,
            topRight: <HandleComponent />,
            topLeft: <HandleComponent />,
          }}
        >
          <div className="relative h-full w-full">
            <NextImage
              fill
              alt="Your image"
              className="pointer-events-none"
              src={imageUrl}
            />
          </div>
        </Rnd>
      </div>

      <div className="flex h-[37.5rem] flex-col bg-white"></div>
    </div>
  )
}

export default DesignConfigurator
