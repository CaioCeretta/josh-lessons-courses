import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'

/* When we want to type an element in HTML, we usually create an interface with the types that we want and
extends the interface HTMLAttributes<Element */
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  dark?: boolean
}

/* The ...props means that this component will also have all the other div properties that aren't listed here */

const Phone = ({ className, imgSrc, dark, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        'pointer-events-none relative z-50 overflow-hidden',
        className,
      )}
      {...props}
    >
      <img
        src={
          dark
            ? '/phone-template-dark-edges.png'
            : '/phone-template-white-edges.png'
        }
        className="pointer-events-none z-50 select-none"
        alt="phone-image"
      />

      <div className="absolute inset-0 -z-10">
        <img
          src={imgSrc}
          alt="Overlaying phone image"
          className="min-h-full min-w-full object-cover"
        />
      </div>
    </div>
  )
}

export default Phone
