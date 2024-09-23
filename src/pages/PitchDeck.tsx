import React from "react";
import { Poppins } from "next/font/google";
import Hero from "@/components/Hero";
import Head from "next/head";
import WhyUs from "@/components/ui/WhyUs";
import HomeService from "@/components/HomeService";
import ContactUs from "@/components/ContactUs";
import Navbar from "@/components/ui/navbar";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import FAQs from "@/components/ui/FAQs";
import Footer from "@/components/ui/footer";
import { pitchFaqs } from "@/constants/faqs";
import { pitchItems } from "@/constants/carousel";
import Pitch from "@/components/Pitch";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const PitchDeck = () => {
  const whyChooseUsItems = [
    {
      title: "Expert Team",
      description: "Our powerhouse includes M&A consultants, PowerPoint specialists, UX/UI designers, and branding advisors.",
    },
    {
      title: "Comprehensive Market Research",
      description: "Gain insights into market size, trends, and competitors to sharpen your strategy.",
    },
    {
      title: "Robust Financial Modeling",
      description: "We provide detailed financial models that deliver clear projections and insights tailored for your startup.",
    },
    {
      title: "Proven Track Record",
      description: "With over a decade of experience crafting compelling presentations, we help you impress investors, attract customers, and drive growth.",
    },
  ];

  return (
    <main
      className={`flex flex-col overflow-x-hidden bg-white min-h-screen w-full ${poppins.className}`}
    >
      <Head>
        <meta
          name="title"
          content="Ease My Process: Bookkeeping, Accounting, Taxation and Advisory Firm"
        />
        <meta
          name="description"
          content="Assisting small to mid-size businesses and CPA firms to streamline bookkeeping, accounting, payroll and tax calculation. We make sure to help Businesses and CPA firms run efficiently."
        />
        <meta
          name="keywords"
          content="Bookkeeping, Auditing, CPA, Business, Firms, tax, tax calculation, payroll, tax advisory, accounting"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Ease My Process" />
        <title>Ease My Process</title>
      </Head>
      <Navbar />
      <Hero items={pitchItems} />

      <div className="text-center mt-[91px] md:mt-[80px] flex flex-col items-center">
        <h1 className="text-4xl lg:text-7xl mb-4 text-[#a60424] font-bold">Why Choose Us?</h1>
        <h2 className="text-base md:text-xl md:mb-8">
          Many companies require capital, but our approach is distinct:
        </h2>
        <div className="relative w-full h-[600px] flex gap-6 flex-col md:flex-row items-center justify-center my-10 md:my-20">
  {/* Central Image */}
  <div className="absolute w-[450px] h-[450px] md:flex items-center justify-center hidden ">
    <Image
      src="/pitchDeck.png"
      alt="Why Choose Us"
      width={1250}
      height={1250}
      className=" w-[450px] h-[450px]"
    />
  </div>

  {/* Top Left Content Box */}
  <div className="md:absolute md:-top-0 md:left-[50%] md:transform md:-translate-x-1/2 w-[90%] md:w-[30%]">
    <div className=" border border-gray-200 rounded-lg p-5 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[0].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[0].description}</p>
    </div>
  </div>

  {/* Top Right Content Box */}
  <div className="md:absolute md:top-[50%] md:right-10 md:transform md:-translate-y-1/2 w-[90%] md:w-[30%]">
    <div className=" border border-gray-200 rounded-lg p-5 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[1].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[1].description}</p>
    </div>
  </div>

  {/* Bottom Right Content Box */}
  <div className="md:absolute md:-bottom-0 md:left-[50%] md:transform md:-translate-x-1/2 w-[90%] md:w-[30%]">
    <div className=" border border-gray-200 rounded-lg p-5 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[2].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[2].description}</p>
    </div>
  </div>

  {/* Bottom Left Content Box */}
  <div className="md:absolute md:top-[50%] md:left-10 md:transform md:-translate-y-1/2 w-[90%] md:w-[30%]">
    <div className=" border border-gray-200 rounded-lg p-5 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[3].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[3].description}</p>
    </div>
  </div>
</div>

      </div>


      <Pitch />
      <ContactUs />
      <Process />

      <FAQs FaqTableData={pitchFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default PitchDeck;
