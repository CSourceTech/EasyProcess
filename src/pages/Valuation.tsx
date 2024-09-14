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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Valuation = () => {
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

    <div style={{ flex: 2, marginLeft: '20px' }}>
      <h1 style={{ fontSize: '70px', marginBottom: '10px', color: '#a60424' , fontWeight:'bold' }}>Why Opt For Us?</h1>
      <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
      Our company using tried-and-true techniques
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div 
          style={{ 
            width: '550px', 
            border: '1px solid #ddd', 
            borderRadius: '10px', 
            padding: '20px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Data-Driven Insights:</h3>
          <p style={{ fontSize: '14px' }}>Extensive investigation and analysis form the basis of our valuations.Our team comprises experts with over ten years of experience working in leading consulting organizations.</p>
        </div>
        <div 
          style={{ 
            width: '550px', 
            border: '1px solid #ddd', 
            borderRadius: '10px', 
            padding: '20px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Reliable Reports Approved by Big Accounting Firms:</h3>
          <p style={{ fontSize: '14px' }}>This indicates that investors trust our reports..</p>
        </div>
       
      </div>
    </div>
  </div>
      

      <Variable/>
      <ContactUs />
      <Process />
      
      <FAQs FaqTableData={valuationFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default Valuation;
