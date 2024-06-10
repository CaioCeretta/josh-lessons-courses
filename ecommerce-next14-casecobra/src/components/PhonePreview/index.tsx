'use client'

import { CaseColor } from '@prisma/client'
import { useEffect, useRef, useState } from 'react'
import { AspectRatio } from '../ui/aspect-ratio'
import { cn } from '@/lib/utils'

interface PhonePreviewProps {
  color: CaseColor
  croppedImageUrl: string
}

const PhonePreview = ({ color, croppedImageUrl }: PhonePreviewProps) => {
  const ref = useRef<HTMLDivElement>(null)

  /* eslint-disable-next-line */
  const [renderedDimensions, setRenderedDimensions] = useState({
    height: 0,
    width: 0,
  })

  const handleResize = () => {
    if (!ref.current) return
    /* The ref getBoundingClientRect gives us the width and the height of the element being referenced */
    const { width, height } = ref.current.getBoundingClientRect()

    setRenderedDimensions({ width, height })
  }

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [ref.current])

  let caseBackgroundColor = 'bg-zinc-950'

  if (color === 'blue') caseBackgroundColor = 'bg-blue-950'
  if (color === 'rose') caseBackgroundColor = 'bg-rose-900'
  if (color === 'green') caseBackgroundColor = 'bg-green-950'

  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left:
            renderedDimensions.width / 2 -
            renderedDimensions.width / (1216 / 121),
          top: renderedDimensions.height / 6.22,
        }}
      >
        <img
          width={renderedDimensions.width / (3000 / 637)}
          alt="phone-hands"
          className={cn(
            `phone-skew round-b-[10px] md:rounded-b-[20px relative z-20 rounded-t-[15px]
          md:rounded-t-[30px]`,
            caseBackgroundColor,
          )}
          src={croppedImageUrl}
        />
      </div>

      <div className="relative z-40 h-full w-full">
        <img
          src="/clearphone.png"
          alt="Phone"
          className="pointer-events-none h-full
        w-full rounded-md antialiased"
        />
      </div>
    </AspectRatio>
  )
}

export default PhonePreview
