import Link from "next/link";

const Carousel = () => {
  return (
    <div className="w-[700px] mx-auto my-5">

      <div className="flex flex-col gap-5 items-center">

        <h1 className="text-[2rem] font-bold text-center my-5">Carousel Examples</h1>

        <div className="border rounded-md p-5"><Link href="./carousel/CarouselBasic">Carousel Basic</Link></div>
        <div className="border rounded-md p-5"><Link href="./carousel/CarouselCustomSizes">Carousel Custom Sizes</Link></div>
        <div className="border rounded-md p-5"><Link href="./carousel/CarouselSpacing">Carousel Spacing</Link></div>

      </div>

    </div>
  );
}
 
export default Carousel;