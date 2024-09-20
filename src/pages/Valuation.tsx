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
import { valuationFaqs } from "@/constants/faqs";
import { valuationItems } from "@/constants/carousel";
import Variable from "@/components/Valuation";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Valuation = () => {
  const whyChooseUsItems = [
    {
      title: "Trusted Valuations You Can Count On",
      description: "Accurate, Investor-Approved Valuations: Say goodbye to guesswork. Our valuations are meticulously crafted to stand up to scrutiny, ensuring you have the confidence to make informed decisions.",
    },
    {
      title: "Comprehensive Valuation Methodologies",
      description: "Multi-Method Approach: We utilize a combination of recognized valuation methodologies—market, income, and cost approaches—to provide a holistic assessment tailored to your specific needs",
    },
    {
      title: "Data-Driven Insights for Precision",
      description: "Grounded in Extensive Research: Our valuations are supported by in-depth analysis of competitors, industry trends, market conditions, and economic factors, ensuring a reliable and precise valuation.",
    },
    {
      title: "Robust Financial Modeling",
      description: "Realistic Financial Projections: We create dynamic financial models featuring three-statement forecasts, key financial ratios, and insightful dashboards, all designed to provide clarity and support your strategic decisions.",
    },
    {
      title: "Proven Expertise You Can Trust",
      description: "Experience That Matters: With over a decade of experience in top consulting firms, our team excels in handling complex valuations that meet international standards. Our high-quality reports consistently gain approval from Big 4 accounting firms, demonstrating their reliability and credibility.",
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
      {/* <Hero /> */}
      <Hero items={valuationItems} />

      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: 2, marginLeft: '80px' }}>
          <img
            src="/valuationWhyUs.png"
            alt="Why Choose Us"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

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
                src="/valuationWhyUs.png"
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
      </div>


      <Variable />
      <ContactUs />
      <Process />

      <FAQs FaqTableData={valuationFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default Valuation;
