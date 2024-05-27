'use client'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

/* When we see a constant all in uppercase, is because we know that it isn't going to change */
const STEPS = [
  {
    name: 'Step 1: Add Image',
    description: 'Choose an image for your case',
    url: '/upload',
  },
  {
    name: 'Step 2: Customize Design',
    description: 'Make the case yours',
    url: '/design',
  },
  {
    name: 'Step 3: Summary',
    description: 'Review your final design',
    url: '/preview',
  },
]

const Steps = () => {
  const pathName = usePathname()

  return (
    <ol className="lg:border-1 rounded-md bg-white lg:flex lg:rounded-none lg:border-r lg:border-gray-200">
      {STEPS.map((step, i) => {
        /* This ends with is getting the final resource from an url, so endsWith of http://localhost:3000/upload would be
        /upload */
        const isCurrent = pathName.endsWith(step.url)
        /* some goes through the entire array and check if any conditions is truthful
        
        What is happening here is: We have step 1, step 2 and step 3, and in the upload case, we are currently mapping over
        the step 1, which is the /upload.

        How do we know that this step is already complete? We are checking for the next steps, which would be 2 and 3, and
        asking, are they the current step? does the url ends with the step 2? which would be /design, and in that case we
        already know that we're already done with the step 1, and in that case we are going to return true.
        */
        const isCompleted = STEPS.slice(i + 1).some((step) =>
          pathName.endsWith(step.url),
        )

        const imgPath = `/snake-${i + 1}.png`

        return (
          <li key={step.name} className="relative overflow-hidden lg:flex-1">
            <div>
              <span
                className={cn(
                  'absolute left-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full',
                  {
                    'bg-zinc-700': isCurrent,
                    'bg-primary': isCompleted,
                  },
                )}
                aria-hidden="true"
              />

              <div
                className={cn(
                  i !== 0 ? 'lg:pl-9' : '',
                  'flex items-center px-6 py-4 text-sm font-medium',
                )}
              >
                <span className="flex-shrink-0">
                  <img
                    src={imgPath}
                    className={cn(
                      'flex h-20 w-20 items-center justify-center object-contain',
                      {
                        'border-none': isCompleted,
                        'border-zinc-700': isCurrent,
                      },
                    )}
                    alt=""
                  />
                </span>
                <span className="ml-4 mt-0.5 flex h-full min-w-0 flex-col justify-center">
                  <span
                    className={cn('text-sm font-semibold text-zinc-700', {
                      'text-primary': isCompleted,
                      'text-zinc-700': isCurrent,
                    })}
                  >
                    {step.name}
                  </span>
                  <span className="text-sm text-zinc-500">
                    {step.description}
                  </span>
                </span>
              </div>

              {/* Separator */}

              {i !== 0 ? (
                <div className="absolute inset-0 hidden w-3 lg:block">
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 12 82"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.5 0V31L10.5 41L0.5 51V82"
                      stroke="currentcolor"
                      vectorEffect="non-scalling-stroke"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default Steps
