import Image from "next/image";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="">
        <div className="relative">
          <Image
            src="/resto.png"
            alt="Contoh gambar"
            width={500}
            height={300}
            className="w-full"
          />
          <div className="flex justify-center items-center absolute inset-0 flex-col text-white">
            <div className="mb-5 items-center flex flex-col">
              <h1 className="text-left text-8xl font-bold">View Our</h1>
              <h1 className="text-left text-8xl font-bold">New Menu</h1>
            </div>
            <p className="text-2xl mb-10">
              The freshest ingredients for you every day
            </p>
            <Link href={"/menu"}>
              <div className="text-3xl font-bold w-60">
                <Button title="New Menu" bg="bg-slate-100 text-green-950" />
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
