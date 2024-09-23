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
import { accountingFaqs } from "@/constants/faqs";
import { accountingItems } from "@/constants/carousel";
import Compilance from "@/components/Accounting";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Accounting = () => {
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
      <Hero items={accountingItems} />

      <div className="w-full flex justify-center">
        <div className="w-full flex justify-center flex-col">
          <div className="flex justify-center w-full items-center md:mt-[80px] flex-col">
          <h1
            className="text-4xl md:text-7xl mb-4 text-[#a60424] text-center font-bold my-8"
          >
            Just Why Opt for EaseMyProcess?
          </h1>
          <h2  className="w-full flex justify-center text-sm md:text-xl md:mb-8">
            We offer unique solutions tailored to your needs.
          </h2>
          </div>
          <div className="relative w-full h-[500px] flex flex-col gap-6 md:flex-row items-center justify-center my-20">
            {/* Central Circular Image */}
            <div className="absolute w-[400px] h-[400px] md:flex items-center justify-center hidden ">
              <Image
                src="/valuationWhyUs.png"
                alt="Circular Image"
                width={450}
                height={150}
                className="rounded-full object-contain p-10"
              />
            </div>

            {/* Surrounding Content Boxes */}
            <div className="md:absolute md:-top-20 md:left-[50%] md:transform md:-translate-x-1/2 w-[90%] md:w-[30%]">
              <div className="border border-gray-200 rounded-lg p-6 shadow-md">
                <h3 className="text-base md:text-lg font-semibold mb-2 text-center">Save money:</h3>
                <p className="text-[12px] md:text-sm text-center">
                  With astute bookkeeping, you can reduce your accounting and
                  compliance expenses by 60%.
                </p>
              </div>
            </div>

            <div className="md:absolute md:top-[50%] md:right-10 md:transform md:-translate-y-1/2 w-[90%] md:w-[30%]">
              <div className="border border-gray-200 rounded-lg p-6 shadow-md">
                <h3 className="text-base md:text-lg font-semibold mb-2 text-center">Accurate Records</h3>
                <p className="text-[12px] md:text-sm text-center">
                  Maintain flawless records and receive monthly financial
                  statements that are easy to understand.
                </p>
              </div>
            </div>

            <div className="md:absolute md:-bottom-10 md:left-[50%] md:transform md:-translate-x-1/2 w-[90%] md:w-[30%]">
              <div className="border border-gray-200 rounded-lg p-6 shadow-md">
                <h3 className="text-base md:text-lg font-semibold mb-2 text-center">Easy Tax Filing:</h3>
                <p className="text-[12px] md:text-sm text-center">
                  {" "}
                  Accurate tax files help you avoid penalties and interest.
                </p>
              </div>
            </div>

            <div className="md:absolute md:top-[50%] md:left-10 md:transform md:-translate-y-1/2 w-[90%] md:w-[30%]">
              <div className="border border-gray-200 rounded-lg p-6 shadow-md">
                <h3 className="text-base md:text-lg font-semibold mb-2 text-center">
                  Financial Health:
                </h3>
                <p className="text-[12px] md:text-sm text-center">
                  {" "}
                  Monitor and enhance the financial health of your company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Compilance />
      <ContactUs />
      <Process />

      <FAQs FaqTableData={accountingFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default Accounting;
