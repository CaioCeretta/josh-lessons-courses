import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* The T in this case is a generic
if we pass, for example, a string array, than this array will be an array
of strings and this T will be string

basically it allows us to have type safety in this function
*/

export function splitArray<T>(array: Array<T>, numParts: number) {
  /* We don't know yet what type is the T, but whatever kind, for example, we will use this on the phones, the phones
  is an array of strings, so the T will know be an array of strings, the same happens in other type cases.  */
  const result: Array<Array<T>> = []

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts

    if (!result[index]) {
      result[index] = []
    }

    result[index].push(array[i])
  }

  return result
}
