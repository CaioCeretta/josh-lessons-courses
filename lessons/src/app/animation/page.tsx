import Link from "next/link";


const Animation = () => {

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl mb-10 ">Animation </h1>
      <ul className="flex flex-col gap-20 text-xl py-3 items-center justify-center">
        <li><Link href="/animation/TextEffectExamples" className="border p-5 rounded-xl">Text</Link></li>
        <li><Link href="/animation/accordion" className="border p-5 rounded-xl">Accordion</Link></li>
        <li><Link href="/animation/animated-background" className="border p-5 rounded-xl">Animated Background</Link></li>
        <li><Link href="/animation/cursor" className="border p-5 rounded-xl">Cursor</Link></li>
        <li><Link href="/animation/carousel" className="border p-5 rounded-xl">Carousel</Link></li>
        <li><Link href="/animation/animated-number" className="border p-5 rounded-xl">Animated Number</Link></li>
        <li><Link href="/animation/dialog" className="border p-5 rounded-xl">Dialog</Link></li>
        <li><Link href="/animation/in-view" className="border p-5 rounded-xl">In View</Link></li>
      </ul>
    </div>
  );
}

export default Animation;