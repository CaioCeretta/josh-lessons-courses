export const PRODUCT_PRICES = {
  material: {
    silicone: 0,
    // One million would be 1_000_000 this is just a fancy and intuitive way for developers
    polycarbonate: 5_00,
  },
  finish: {
    smooth: 0,
    textured: 3_00,
  },
} as const

export const BASE_PRICE = 14_00
