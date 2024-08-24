import Link from 'next/link';


export default function TransitionPanel() {
  return (
    <div className="mx-auto w-[700px]">
      <h1 className="text-[2rem] font-bold text-center my-5">Transition Panel Examples</h1>

      <div className="flex flex-col items-center my-10 gap-5">

        <Link href="transition-panel/TabsWithPanel">Tabs with Panel</Link>
        <Link href="transition-panel/CardWithPanel">Card with Panel</Link>

      </div>

    </div>


  );
}