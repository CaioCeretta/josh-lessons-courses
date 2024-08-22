import Link from "next/link";

const AnimatedNumber = () => {
  return (
    <div className="w-[700px] mx-auto my-5">

      <div className="flex flex-col gap-5 items-center">

        <h1 className="text-[2rem] font-bold text-center my-5">Animated Number Examples</h1>

        <div className="border rounded-md p-5"><Link href="./animated-number/basic">Basic</Link></div>
        <div className="border rounded-md p-5"><Link href="./animated-number/counter">Basic Counter</Link></div>
        <div className="border rounded-md p-5"><Link href="./animated-number/wUseInView">With UseInView</Link></div>

      </div>

    </div>
  );
}
 
export default AnimatedNumber;