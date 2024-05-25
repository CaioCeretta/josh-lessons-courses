'use client'

import { cn, splitArray } from '@/lib/utils'
import { useInView } from 'framer-motion'

import { useRef } from 'react'
import { ReviewColumn } from '../ReviewColumn'

const PHONES = [
  '/testimonials/1.jpg',
  '/testimonials/2.jpg',
  '/testimonials/3.jpg',
  '/testimonials/4.jpg',
  '/testimonials/5.jpg',
  '/testimonials/6.jpg',
]

const ReviewGrid = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.4,
  })

  const columns = splitArray(PHONES, 3)
  const column1 = columns[0]
  const column2 = columns[1]
  const column3 = splitArray(columns[2], 2)

  return (
    /* containerRef will hold a reference to this container, because this div will 
    hold our entire review grid */
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden
      px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          {/* The column flat is going to make the column3, which is a multidimensional array, a one dimension */}
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              cn({
                'md:hidden': reviewIndex >= column1.length + column3[0].length,
                'lg:hidden': reviewIndex >= column1.length,
              })
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block "
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden md:block "
            msPerPixel={10}
          />
        </>
      ) : null}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100"></div>
    </div>
  )
}

export default ReviewGrid
