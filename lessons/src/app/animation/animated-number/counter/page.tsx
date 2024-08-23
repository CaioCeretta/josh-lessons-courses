'use client';
import { AnimatedNumber } from '@/app/animation/_components/animated-number';
import { useInView } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useRef, useState } from 'react';

export default function AnimatedNumberInView() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(10000);
  }

  return (
    <div className='w-full h-screen flex items-center justify-center'>

      <div className='flex w-full items-center justify-center space-x-2 text-zinc-800 dark:text-zinc-50'>
        <button
          aria-label='Decrement'
          onClick={() => setValue((prev) => prev - 100)}
        >
          <Minus className='h-4 w-4' />
        </button>
        <AnimatedNumber
          className='inline-flex items-center font-mono text-2xl font-light'
          springOptions={{
            bounce: 0,
            duration: 1000,
          }}
          value={value}
        />
        <button
          aria-label='Increment'
          onClick={() => setValue((prev) => prev + 100)}
        >
          <Plus className='h-4 w-4' />
        </button>
      </div>
    </div>
  );
}