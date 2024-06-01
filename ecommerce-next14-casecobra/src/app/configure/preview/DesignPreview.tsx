'use client'

import Phone from '@/components/Phone'
import { cn } from '@/lib/utils'
import { COLORS, MODELS } from '@/validators/option-validator'
import { Configuration } from '@prisma/client'
import { useEffect, useState } from 'react'
import Confetti from 'react-dom-confetti'

interface DesignPreviewProps {
  configuration: Configuration
}

const DesignPreview = ({ configuration }: DesignPreviewProps) => {
  const [showConfetti, setShowConfetti] = useState(false)

  const { color, model } = configuration

  const tw = COLORS.find((supportedColor) => {
    return supportedColor.value === color
  })?.tw

  const { label: modelLabel } = MODELS.options.find(
    ({ value }) => value === model,
  )!

  useEffect(() => {
    setShowConfetti(true)
  })

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none
    justify-center overflow-hidden"
      >
        <Confetti
          active={showConfetti}
          config={{
            elementCount: 200,
            spread: 90,
          }}
        />
      </div>

      <div
        className="mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1
      sm:gap-x-6 md:gap-x-8 lg:gap-x-12"
      >
        <div className="sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2">
          <Phone
            imgSrc={configuration.croppedImageUrl}
            className={cn(`bg-${tw}`)}
          />
        </div>
        <div className="mt-6 sm:col-span-9 sm:mt-0 md:row-end-1">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
            Your {modelLabel} Case
          </h3>
        </div>
      </div>
    </>
  )
}

export default DesignPreview
