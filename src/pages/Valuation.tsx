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

      <div style={{ display: 'flex', justifyContent:"center", width:"100%" }} className="mb-20">
        {/* <div style={{ flex: 2, marginLeft: '80px' }}>
          <img
            src="/valuationWhyUs.png"
            alt="Why Choose Us"
            style={{ width: '100%', height: 'auto' }}
          />
        </div> */}

        <div className="text-center mt-[41px] md:mt-[80px] w-full">
          <div className="my-14 md:my-0 flex flex-col items-center">
          <h1 className="text-4xl lg:text-7xl mb-4 text-[#a60424] text-center font-bold my-8">Why Choose Us?</h1>
          <h2 className="text-sm w-[90%] md:w-full md:text-xl text-center mb-10  md:mb-8">
            Many companies require capital, but our approach is distinct:
          </h2>
          </div>
          <div className="relative w-full h-[600px] flex gap-6 flex-col md:flex-row items-center justify-center my-40 md:my-20">
  {/* Central Image */}
  <div className="absolute w-[400px] h-[300px] md:flex items-center justify-center hidden ">
    <Image
      src="/valuationWhyUs.png"
      alt="Why Choose Us"
      width={1300}
      height={1300}
      className="rounded-full object-contain w-[350px] h-[350px]"
    />
  </div>

  
  <div className="md:absolute md:-top-14 md:left-1/2 md:transform md:-translate-x-1/2 w-[90%] md:w-[35%] mt-20 md:mt-0">
    <div className=" border border-gray-200 rounded-lg p-5 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[0].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[0].description}</p>
    </div>
  </div>

  
  <div className="md:absolute md:top-1/2 md:right-10 md:transform md:-translate-y-1/2 w-[90%] md:w-[35%]">
    <div className=" border border-gray-200 rounded-lg p-5 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[1].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[1].description}</p>
    </div>
  </div>

  
  <div className="md:absolute md:-bottom-14 md:right-[13%] md:transform  w-[90%] md:w-[35%]">
    <div className=" border border-gray-200 rounded-lg p-5 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[2].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[2].description}</p>
    </div>
  </div>

  
  <div className="md:absolute md:top-1/2 md:left-10 md:transform md:-translate-y-1/2 w-[90%] md:w-[35%]">
    <div className=" border border-gray-200 rounded-lg p-5 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[3].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[3].description}</p>
    </div>
  </div>

  <div className="md:absolute md:-bottom-14 md:left-[13%] md:transform  w-[90%] md:w-[35%]">
    <div className=" border border-gray-200 rounded-lg p-5 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
      <h3 className="text-base md:text-lg font-semibold mb-2">{whyChooseUsItems[4].title}</h3>
      <p className="text-[12px] md:text-sm">{whyChooseUsItems[4].description}</p>
    </div>
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
