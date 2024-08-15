"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <h1 className="text-4xl font-bold">Lessons from the channel josh tried coding</h1>


      <Link className="text-xl font-bold border p-5 rounded-full" href="/server-action-problem">Server Action Problems</Link>
    </main>
  );
}
