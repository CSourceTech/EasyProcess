import React from "react";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/ui/navbar";
import Funding from "@/components/Funding";
import ContactUs from "@/components/ContactUs";
import Process from "@/components/Process";
import FAQs from "@/components/ui/FAQs";
import Footer from "@/components/ui/footer";
import { fundFaqs } from "@/constants/faqs";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const FundRaising = () => {
  const whyChooseUsItems = [
    {
      title: "Multi-Method Valuation",
      description: "We leverage a blend of industry-leading methodologies—including market, income, and cost approaches—to deliver a comprehensive and accurate business assessment.",
    },
    {
      title: "Data-Driven Excellence",
      description: "Our valuations are grounded in meticulous research, incorporating competitor analysis, industry trends, and economic factors, ensuring you receive insights based on real-world data.",
    },
    {
      title: "Reliable Financial Modeling",
      description: "We create robust financial models featuring detailed forecasts, key ratios, and interactive dashboards, so your projections are supported by solid evidence.",
    },
    {
      title: "Decades of Expertise",
      description: "With over ten years in top consulting firms, our experienced team handles complex valuations with precision and adheres to international standards, providing you with unmatched expertise.",
    },
    {
      title: "Investor-Approved Reports",
      description: "Our high-quality valuations are consistently recognized and accepted by Big 4 accounting firms, reflecting their credibility and meeting the highest investor expectations.",
    },
  ];

  return (
    <main className={`flex flex-col overflow-x-hidden bg-white min-h-screen w-full ${poppins.className}`}>
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

      <div className="text-center mt-[91px] md:mt-[140px] my-20">
        <h1 className="text-4xl lg:text-7xl mb-4 text-[#a60424] text-center font-bold my-4">Why Choose Us?</h1>
        <h2 className="text-sm md:text-xl mb-32 md:mb-28 w-[90%] md:w-full">
          Many companies require capital, but our approach is distinct:
        </h2>
        <div className="relative w-full h-[500px] flex flex-col gap-6 md:gap-0 my-10 md:flex-row items-center justify-center">
  {/* Central Circular Image */}
  <div className="absolute w-[400px] h-[400px] items-center justify-center hidden md:flex">
    <Image
      src="/FundRaisingwhyus.png"
      alt="Circular Image"
      width={450}
      height={150}
      className="rounded-full object-contain p-10"
    />
  </div>

  {/* Surrounding Content Boxes */}
  <div className="md:absolute md:-top-20 md:left-[50%] md:transform md:-translate-x-1/2 w-[90%] md:w-[30%]">
    <div className="border border-gray-200 rounded-lg p-6 shadow-md">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[0].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[0].description}</p>
    </div>
  </div>

  <div className="md:absolute md:top-[50%] md:right-10 md:transform md:-translate-y-1/2 w-[90%] md:w-[30%]">
    <div className="border border-gray-200 rounded-lg p-6 shadow-md">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[1].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[1].description}</p>
    </div>
  </div>

  <div className="md:absolute md:-bottom-10 md:left-[50%] md:transform md:-translate-x-1/2 w-[90%] md:w-[30%]">
    <div className="border border-gray-200 rounded-lg p-6 shadow-md">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[2].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[2].description}</p>
    </div>
  </div>

  <div className="md:absolute md:top-[50%] md:left-10 md:transform md:-translate-y-1/2 w-[90%] md:w-[30%]">
    <div className="border border-gray-200 rounded-lg p-6 shadow-md">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[3].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[3].description}</p>
    </div>
  </div>
</div>

      </div>

      <Funding />
      <ContactUs />
      <Process />
      <FAQs FaqTableData={fundFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default FundRaising;