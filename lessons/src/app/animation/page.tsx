import Link from "next/link";
import { TextEffect } from "./_components/TextEffect";



const Animation = () => {

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl mb-10 ">Animation Examples</h1>
      <ul className="flex flex-col gap-20 text-xl py-3 items-center justify-center">
        <li><Link href="/animation/TextEffectExamples" className="border p-5 rounded-xl">Text Examples</Link></li>
        <li><Link href="/animation/accordion" className="border p-5 rounded-xl">Accordion Examples</Link></li>
      </ul>
    </div>
  );
}

export default Animation;