import Image from "next/image";
import Heading from "./ui/Heading";
import { TfiArrowTopRight } from "react-icons/tfi";

export default function Portfolio() {
  return (
    <section className="py-10 md:py-20 bg-[url('/images/hero/dotbg.png')] bg-cover bg-center">
      <Heading color="white pb-10 underline">Our Portfolio</Heading>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-2 md:mx-40 gap-8 md:gap-10">
        <div className="relative flex justify-center group">
          <div className="rounded-2xl overflow-hidden w-[544px] md:h-[424px]">
            <Image
              className="rounded-2xl  hover:scale-110 transition-transform duration-1000 "
              src="/images/services/abcd.jpg"
              width={644}
              height={424}
              alt=""
            />
          </div>

          <div
            className="absolute -bottom-8 md:bottom-0 opacity-0 bg-gradient-to-r from-red-500 to-red-900 rounded-2xl px-4 md:px-8 p-2 md:p-4 text-white w-[320px] md:w-[500px] group-hover:-translate-y-10 group-hover:opacity-100  transition-transform text-left "
            style={{ transition: "1s" }}
          >
            <div className="absolute right-2 top-2 md:right-6 -rotate-90 group-hover:rotate-0" style={{ transition: "1s" }}><TfiArrowTopRight size={24} /></div>
            <h1 className="text-base md:text-xl underline">Financial Modelling</h1>
            <h3 className="text-sm md:text-base underline">Project was based on valuation and information.</h3>
          </div>
        </div>

        <div className="relative flex justify-center group">
          <div className="rounded-2xl overflow-hidden w-[544px] md:h-[424px]">
            <Image
              className="rounded-2xl  hover:scale-110 transition-transform duration-1000 "
              src="/images/services/abcd2.jpg"
              width={644}
              height={424}
              alt=""
            />
          </div>

          <div
            className="absolute -bottom-8 md:bottom-0 opacity-0 bg-gradient-to-r from-red-500 to-red-900 rounded-2xl px-4 md:px-8 p-2 md:p-4 text-white w-[320px] md:w-[500px] group-hover:-translate-y-10 group-hover:opacity-100  transition-transform text-left "
            style={{ transition: "1s" }}
          >
            <div className="absolute right-2 top-2 md:right-6 -rotate-90 group-hover:rotate-0" style={{ transition: "1s" }}><TfiArrowTopRight size={24} /></div>
            <h1 className="text-base md:text-xl underline">Valuation</h1>
            <h3 className="text-sm md:text-base underline">Project was based on valuation and information.</h3>
          </div>
        </div>

        <div className="relative flex justify-center group">
          <div className="rounded-2xl overflow-hidden w-[544px] md:h-[424px]">
            <Image
              className="rounded-2xl  hover:scale-110 transition-transform duration-1000 "
              src="/images/services/abcd3.jpg"
              width={644}
              height={424}
              alt=""
            />
          </div>

          <div
            className="absolute -bottom-8 md:bottom-0 opacity-0 bg-gradient-to-r from-red-500 to-red-900 rounded-2xl px-4 md:px-8 p-2 md:p-4 text-white w-[320px] md:w-[500px] group-hover:-translate-y-10 group-hover:opacity-100  transition-transform text-left "
            style={{ transition: "1s" }}
          >
            <div className="absolute right-2 top-2 md:right-6 -rotate-90 group-hover:rotate-0" style={{ transition: "1s" }}><TfiArrowTopRight size={24} /></div>
            <h1 className="text-base md:text-xl underline">Accounting & Compliance</h1>
            <h3 className="text-sm md:text-base underline">Project was based on valuation and information.</h3>
          </div>
        </div>

        <div className="relative flex justify-center group">
          <div className="rounded-2xl overflow-hidden w-[544px] md:h-[424px]">
            <Image
              className="rounded-2xl  hover:scale-110 transition-transform duration-1000 "
              src="/images/services/abcd4.jpg"
              width={644}
              height={424}
              alt=""
            />
          </div>

          <div
            className="absolute -bottom-8 md:bottom-0 opacity-0 bg-gradient-to-r from-red-500 to-red-900 rounded-2xl px-4 md:px-8 p-2 md:p-4 text-white w-[320px] md:w-[500px] group-hover:-translate-y-10 group-hover:opacity-100  transition-transform text-left "
            style={{ transition: "1s" }}
          >
            <div className="absolute right-2 top-2 md:right-6 -rotate-90 group-hover:rotate-0" style={{ transition: "1s" }}><TfiArrowTopRight size={24} /></div>
            <h1 className="text-base md:text-xl underline">Valuation Summary</h1>
            <h3 className="text-sm md:text-base underline">Project was based on valuation and information.</h3>
          </div>
        </div>

       
      </div>
    </section>
  );
}
