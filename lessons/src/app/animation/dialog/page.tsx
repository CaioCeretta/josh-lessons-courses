import Link from "next/link";

const Dialog = () => {

  return (
    <>
      <div className="mx-auto w-[700px]">
        <h1 className="text-[2rem] font-bold text-center my-5">Cursor Examples</h1>

        <div className="flex flex-col items-center my-10 gap-5">

          <div className="border p-5 rounded-full"><Link href='./dialog/DialogBasicsOne'>Dialog Basics One</Link></div>
          <div className="border p-5 rounded-full"><Link href='./dialog/DialogBasicsTwo'>Dialog Basics Two</Link></div>
          <div className="border p-5 rounded-full"><Link href='./dialog/DialogBasicsImage'>Dialog Basic Image</Link></div>



        </div>
      </div>
    </>
  );
}

export default Dialog;