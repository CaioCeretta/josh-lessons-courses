import { cn } from '@/lib/utils'
import React from 'react'

const Phone = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        'pointer-events-none relative z-50 overflow-hidden',
        className,
      )}
    >
      <p>dasdasdas</p>
    </div>
  )
}

export default Phone
