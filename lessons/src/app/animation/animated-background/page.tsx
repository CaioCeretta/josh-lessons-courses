import Link from "next/link";
const AnimatedBackground = () => {

  return (
    <>
      <div className="mx-auto w-[700px]">
        <h1 className="text-[2rem] font-bold text-center">Animated Tabs Examples</h1>

        <div className="flex flex-col">
          <ul>
            <li><Link href='./animated-background/AnimatedTabs'>Animated Tabs</Link></li>
            <li><Link href='./animated-background/AnimatedTabsHover'>Animated Tabs Hover</Link></li>
            <li><Link href='./animated-background/AnimatedCardBackground'>Animated Card Background</Link></li>
            

          </ul>
        </div>
      </div>
    </>
  );
}

export default AnimatedBackground;