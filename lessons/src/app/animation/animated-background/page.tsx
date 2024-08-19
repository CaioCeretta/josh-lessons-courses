import Link from "next/link";
const AnimatedBackground = () => {

  return (
    <>
      <div className="mx-auto w-[700px]">
        <h1 className="text-[2rem] font-bold text-center my-5">Animated Tabs Examples</h1>

        <div className="flex flex-col items-center my-10 gap-5">

          <div className="border p-5 rounded-full"><Link href='./animated-background/AnimatedTabs'>Animated Tabs</Link></div>
          <div className="border p-5 rounded-full"><Link href='./animated-background/AnimatedTabsHover'>Animated Tabs Hover</Link></div>
          <div className="border p-5 rounded-full"><Link href='./animated-background/AnimatedCardBackground'>Animated Card Background</Link></div>
          <div className="border p-5 rounded-full"><Link href='./animated-background/SegmentedControl'>Segmented Control</Link></div>



        </div>
      </div>
    </>
  );
}

export default AnimatedBackground;