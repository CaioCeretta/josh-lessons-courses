'use client'
import NextImage from 'next/image'

import HandleComponent from '@/components/HandleComponent'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { COLORS, MODELS } from '@/validators/option-validator'
import { RadioGroup } from '@headlessui/react'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Label } from '@radix-ui/react-label'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { useState } from 'react'
import { Rnd } from 'react-rnd'
import { Check, ChevronsUpDown } from 'lucide-react'
import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu'

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
  /* We are setting the type of the options state to be an object of the same type as the COLORS constant we created */
  const [options, setOptions] = useState<{
    color: (typeof COLORS)[number]
    model: (typeof MODELS.options)[number]
  }>({
    color: COLORS[0],
    model: MODELS.options[0],
  })

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
              `bg-${options.color.tw}`,
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

      <div className="flex h-[37.5rem] flex-col bg-white">
        <ScrollArea className="relative flex-1 overflow-auto">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-white"
          />

          <div className="p-8 px-8 pb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Customize Your Case
            </h2>

            <div className="my-6 h-px w-full bg-zinc-200" />

            <div className="relative mt-4 h-full flex-col justify-between">
              {/* Because we passed the as const to the colors object, which we are using to type this state, it makes
              the argument of the map, to know which are the available values */}
              <div className="flex flex-col gap-6">
                <RadioGroup
                  value={options.color}
                  onChange={(val) => {
                    setOptions((prev) => ({
                      ...prev,
                      color: val,
                    }))
                  }}
                >
                  <Label>Color: {options.color.label}</Label>
                  <div className="mt-3 flex items-center space-x-3">
                    {COLORS.map((color) => (
                      <RadioGroup.Option
                        key={color.label}
                        value={color}
                        className={({ active, checked }) =>
                          cn(
                            `relative -m-0.5 flex cursor-pointer items-center
                      justify-center rounded-full border-2 border-transparent p-0.5
                      focus:outline-none focus:ring-0 active:outline-none active:ring-0`,
                            {
                              [`border-${color.tw}`]: active || checked,
                            },
                          )
                        }
                      >
                        <span
                          className={cn(
                            `bg-${color.tw}`,
                            'h-8 w-8 rounded-full border border-black',
                          )}
                        ></span>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>

                <div className="relative flex flex-col gap-3">
                  <Label>Model</Label>
                  <DropdownMenu>
                    {/* The asChild is going to tell ts to not render this as a button itself, so the trigger of this
                    will be the child of that DropdownMenuTrigger */}
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between"
                      >
                        {options.model.label}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0"></ChevronsUpDown>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {MODELS.options.map((model) => (
                        <DropdownMenuItem
                          key={model.label}
                          className={cn(
                            `fap-1 flex cursor-default items-center p-1.5 text-sm
                        hover:bg-zinc-100`,
                            {
                              'bg-zinc-100':
                                model.label === options.model.label,
                            },
                          )}
                          onClick={() => {
                            setOptions((prev) => ({
                              ...prev,
                              model,
                            }))
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              model.label === options.model.label
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                          {model.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

export default DesignConfigurator
