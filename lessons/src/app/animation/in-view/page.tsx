import Link from 'next/link';


export default function InView() {
  return (
    <div className="mx-auto w-[700px]">
      <h1 className="text-[2rem] font-bold text-center my-5">Accordion Examples</h1>

      <div className="flex flex-col items-center my-10 gap-5">

        <Link href="in-view/BasicInView">InView Basics</Link>
        <Link href="in-view/InViewWithMargins">InView with Margins</Link>
        <Link href="in-view/InViewWithImageAndMargins">InView with Images and Margins</Link>

      </div>

    </div>


  );
}