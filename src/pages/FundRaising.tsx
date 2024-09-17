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
              src="/FundRaisingwhyus.png"
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

      <Funding />
      <ContactUs />
      <Process />
      <FAQs FaqTableData={fundFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default FundRaising;