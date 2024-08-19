import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '../_components/Accordion'

export default function AccordionBasic() {
  return (
    <div className="mx-auto w-[700px]">
      <h1 className="text-[2rem] font-bold text-center my-5">Accordion Examples</h1>

      <div className="flex flex-col items-center my-10 gap-5">

        <Link href="accordion/AccordionBasics">Accordion Basics</Link>
        <Link href="accordion/AccordionWithIcons">Accordion With Icons</Link>
        <Link href="accordion/AccordionCustomVariants">Accordion Custom Variants</Link>

       </div>

    </div>

      
  );
}