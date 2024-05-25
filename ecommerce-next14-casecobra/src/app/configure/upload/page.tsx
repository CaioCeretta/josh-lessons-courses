'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

/* 
  Pages by default are server side, so that's why we have to inform next that his is client size, so we are able to 
  use hooks, etc. So we need to opt out that behavior by using the use client at the very top
*/

const Page = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false)

  /* What is happening here on the cn is that on the first parameter we pass all the defaults classNames that we want, but
  as the second argument we passed an object, and in this object a condition to apply those classes if the statement after
  the : is true */

  return (
    <div
      className={cn(
        `ring-1ring-inset relative my-16 flex h-full w-full flex-1 flex-col items-center
        justify-center rounded-xl bg-gray-900/5 p-2 ring-gray-900/10 lg:rounded-2xl`,
        {
          'bg-blue-900/10 ring-blue-900/25': isDragOver,
        },
      )}
    >
      <div className="relative flex w-full flex-1 flex-col items-center justify-center"></div>
    </div>
  )
}

export default Page
