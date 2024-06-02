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

/*  14_00 will be 1400, so when we utilize it we need to divide by 100, so in conjunbction with the intl NumberFormat
the price will be separated corretly by cents for the user */
export const BASE_PRICE = 14_00
