import Navbar from "@/components/Navbar";
import { stardom } from "./layout";
import { RiArrowRightUpLine } from "@remixicon/react";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-dvh px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 content-center pt-[125px] pb-[65px]">
        <div className="grid md:grid-cols-2 gap-y-8">
          <div>
            <h1 className={`${stardom.className} md:text-7xl text-4xl font-bold`}>
              Share your ideas and stories
            </h1>
            <p className="py-6 lg:text-lg">
              A creative space to express, inspire, and explore.
            </p>
            <button className="btn btn-neutral font-medium tracking-wide">
              Explore Now
              <RiArrowRightUpLine size={14} />
            </button>
          </div>
          <div className="relative h-64 sm:h-80 md:h-[26rem] lg:h-[32rem] xl:h-[36rem]">
            <Image
              src={"/images/03.jpg"}
              alt="Minimal still life with a white flower and ceramic cup on a soft yellow background"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}