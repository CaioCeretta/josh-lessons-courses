import Link from "next/link";

const Cursor = () => {

  return (
    <>
      <div className="mx-auto w-[700px]">
        <h1 className="text-[2rem] font-bold text-center my-5">Cursor Examples</h1>

        <div className="flex flex-col items-center my-10 gap-5">

          <div className="border p-5 rounded-full"><Link href='./cursor/CursorMouseIcon'>Cursor Custom Component (Mouse Icon)</Link></div>
          <div className="border p-5 rounded-full"><Link href='./cursor/CursorImageSpring1'>Cursor with images and spring 1</Link></div>
          <div className="border p-5 rounded-full"><Link href='./cursor/CursorImageSpring2'>Cursor with images and spring 2</Link></div>
          
    

        </div>
      </div>
    </>
  );
}

export default Cursor;