// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950
// bg-green-950 border-green-950

import { PRODUCT_PRICES } from '@/config/products'

export const COLORS = [
  {
    label: 'Black',
    value: 'black',
    tw: 'zinc-900',
  },
  {
    label: 'Blue',
    value: 'black',
    tw: 'blue-950',
  },
  {
    label: 'Rose',
    value: 'rose',
    tw: 'rose-950',
  },
  {
    label: 'Green',
    value: 'green',
    tw: 'green-950',
  },
] as const

/* As const tell javascript that this is not an array of any objects with type strings, it's literally an array of the exact
strings, so we know the number of elements and which elements */

export const MODELS = {
  options: [
    {
      label: 'Iphone X',
      model: 'iphonex',
    },
    {
      label: 'Iphone 11',
      model: 'iphone11',
    },
    {
      label: 'Iphone 12',
      model: 'iphone12',
    },
    {
      label: 'Iphone 13',
      model: 'iphone13',
    },
    {
      label: 'Iphone 14',
      model: 'iphone14',
    },
    {
      label: 'Iphone 15',
      model: 'iphone15',
    },
  ],
} as const

export const MATERIALS = {
  name: 'material',
  options: [
    {
      label: 'Silicone',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Soft Polycarbonate',
      value: 'polycarbonate',
      description: 'Scratch-resistant coating',
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const

export const FINISHES = {
  name: 'material',
  options: [
    {
      label: 'Silicone',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Soft Polycarbonate',
      value: 'polycarbonate',
      description: 'Scratch-resistant coating',
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const
