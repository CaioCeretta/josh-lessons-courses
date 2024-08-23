import AnimatedBackground from "../../_components/animated-background";

import Link from 'next/link'

export default function AnimatedTabsHover() {
  const TABS = [
   { label: 'Home', href: '/animation' }, {label: 'About'}, {label: 'Services'}, {label: 'Contact'}];

  return (
    <div className='flex flex-row absolute bottom-8 left-[50%] -translate-x-[50%]' >
      <AnimatedBackground
        defaultValue={TABS[0].label}
        className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
      >
        {TABS.map((tab, index) => (
          tab.href ? (
            <Link href={tab.href} key={index}>
              <button
                data-id={tab.label}
                type='button'
                className='px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
              >
                {tab.label}
              </button>
              </Link>
          ) : (
          <button
            key={index}
            data-id={tab}
            type='button'
            className='px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
          >
            {tab.label}
          </button>
          )
        ))}
      </AnimatedBackground>
    </div>
  );
}
