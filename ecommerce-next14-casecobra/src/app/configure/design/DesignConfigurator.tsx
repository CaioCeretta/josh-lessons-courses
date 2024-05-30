'use client'
import NextImage from 'next/image'

import HandleComponent from '@/components/HandleComponent'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { BASE_PRICE } from '@/config/products'
import { cn, formatPrice } from '@/lib/utils'
import {
  COLORS,
  FINISHES,
  MATERIALS,
  MODELS,
} from '@/validators/option-validator'
import { RadioGroup } from '@headlessui/react'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu'
import { Label } from '@radix-ui/react-label'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { ArrowRight, Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'
import { Rnd } from 'react-rnd'

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
    material: (typeof MATERIALS.options)[number]
    finish: (typeof FINISHES.options)[number]
  }>({
    color: COLORS[0],
    model: MODELS.options[0],
    material: MATERIALS.options[0],
    finish: FINISHES.options[0],
  })

  return (
    <div className="relative mb-20 mt-20 grid grid-cols-1 pb-20 lg:grid-cols-3">
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

      <div className="col-span-full flex h-[37.5rem] w-full flex-col bg-white lg:col-span-1">
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

                {/* Because both the materials and the finishes have the same structure, we can destructure it right away
                They are both objects with name and options, so we can destructure the name and the options inside the map
                */}
                {[MATERIALS, FINISHES].map(
                  ({ name, options: selectableOptions }) => (
                    <RadioGroup
                      key={name}
                      value={options[name]}
                      onChange={(val) => {
                        /* The reason i used the [name]: val on the state setter, is because now that name value is dynamic
                        because it can be both material or finish, we still don't know which one, but because both key
                        and material are keys inside our state, whichever one is selected doesn't really matter, and that
                        is the one we are going to set in the new value, which is like silicone, polycarbonate, ...
                        */
                        setOptions((prev) => ({
                          ...prev,
                          [name]: val,
                        }))
                      }}
                    >
                      <Label>
                        {name.slice(0, 1).toUpperCase() + name.slice(1)}
                      </Label>
                      <div className="mt-3 space-y-4">
                        {selectableOptions.map((option) => (
                          <RadioGroup.Option
                            key={option.value}
                            value={option}
                            className={({ active, checked }) =>
                              cn(
                                `relative block cursor-pointer rounded-lg border-2
                                  bg-white px-6 py-4 shadow-sm outline-none
                                  ring-0 focus:outline-none focus:ring-0 sm:flex sm:justify-between`,
                                {
                                  'border-primary': active || checked,
                                },
                              )
                            }
                          >
                            <span className="flex items-center">
                              <div className="flex flex-col text-sm">
                                <RadioGroup.Label as="span">
                                  {option.label}
                                </RadioGroup.Label>

                                {option.description ? (
                                  <RadioGroup.Description
                                    className="text-gray-500"
                                    as="span"
                                  >
                                    <span className="block sm:inline">
                                      {option.description}
                                    </span>
                                  </RadioGroup.Description>
                                ) : null}
                              </div>
                            </span>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  ),
                )}
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="h-16 w-full bg-white px-8">
          <div className="h-px w-full bg-zinc-200" />
          {/* The use of these two divs may seem reduntant, but the outer one focuses on taking the items to the end and
          the inner one to space the two items */}
          <div className="flex h-full w-full items-center justify-end">
            <div className="flex w-full items-center gap-6">
              <p className="whitespace-nowrap font-medium">
                {formatPrice(
                  (BASE_PRICE + options.finish.price + options.material.price) /
                    100,
                )}
              </p>

              <Button size={'sm'} className="w-full">
                Continue
                <ArrowRight className="ml-1.5 inline h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignConfigurator
