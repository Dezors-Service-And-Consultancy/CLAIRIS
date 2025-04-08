import { Aurora } from "@/components/aurora";
import { Carousel_comp } from "@/components/carousel";
import Footer from "@/components/footer";
import SidebarDemo from "@/components/sidebar";
import Image from "next/image";

export default function home() {
  return (
    <main className="relative flex w-screen min-h-screen bg-black flex-col items-center overflow-hidden">
      <Aurora className="absolute inset-0 w-full h-full z-[-1]" />
      <div className="flex absolute z-40 w-[10vw] h-screen top-0 left-0 ">
        <SidebarDemo />
      </div>
      <div className=" absolute z-0 w-screen min-h-screen flex items-center justify-center flex-col">
        <Image
          src="/logo.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />

        <div className="text-3xl md:text-4xl font-bold font-main text-white text-center ml-5">
          We are coming soon.
        </div>
      </div>
      <div className="w-screen min-h-screen flex bg-black flex-col">
        <div className="text-3xl md:text-7xl font-bold font-main text-[#70798c] text-center ml-5">
          Explore Our<span className="text-white"> Services</span>
        </div>

        <Carousel_comp />

        <Footer />
      </div>
    </main>
  );
}
