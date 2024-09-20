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

      <div className="text-center mt-[91px] md:mt-[140px]">
        <h1 className="text-5xl lg:text-7xl mb-4 text-[#a60424] font-bold">Why Choose Us?</h1>
        <h2 className="text-xl mb-8">
          Many companies require capital, but our approach is distinct:
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 pb-12 gap-8">
          <div className="lg:w-1/2 space-y-6">
            {whyChooseUsItems.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="lg:w-1/3 flex justify-center items-center">
            <Image
              src="/pitchDeck.png"
              alt="Why Choose Us"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="lg:w-1/2 space-y-6">
            {whyChooseUsItems.slice(2).map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
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
