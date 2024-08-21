'use client';
import { useRef, useState } from 'react';
import { Cursor } from '../../_components/Cursor';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';

export default function CursorImageSpring2() {
  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
  };

  return (
    <div>
      <div className='flex mx-auto h-[400px] w-[400px] items-center justify-center'>
        <Cursor
          attachToParent
          variants={{
            initial: { height: 0, opacity: 0, scale: 0.3 },
            animate: { height: 'auto', opacity: 1, scale: 1 },
            exit: { height: 0, opacity: 0, scale: 0.3 },
          }}
          transition={{
            type: 'spring',
            duration: 0.3,
            bounce: 0.1,
          }}
          className='overflow-hidden'
          springConfig={{
            bounce: 0.01,
          }}
        >
          <img
            src='https://i.pinimg.com/564x/4c/95/69/4c9569ab2928e5ae400a6a34e7c537a0.jpg'
            alt='Christian Church, Eastern Europe'
            className='h-40 w-40'
          />
        </Cursor>
        Christian Church, Eastern Europe
      </div>
    </div>
  );
}
