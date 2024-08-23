import Link from 'next/link';


export default function InView() {
  return (
    <div className="mx-auto w-[700px]">
      <h1 className="text-[2rem] font-bold text-center my-5">Accordion Examples</h1>

      <div className="flex flex-col items-center my-10 gap-5">

        <Link href="inView/BasicInView">InView Basics</Link>
        <Link href="inView/InViewwithMargins">InView with Margins</Link>
        <Link href="inView/InViewWithImagesandMargins">InView with Images and Margins</Link>

      </div>

    </div>


  );
}