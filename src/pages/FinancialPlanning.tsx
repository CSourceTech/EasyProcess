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
import { financialPlanningFaqs } from "@/constants/faqs";
import { financialItems } from "@/constants/carousel";
import Planning from "@/components/Planning";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const FinancialPlanning = () => {
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
      <Hero items={financialItems} />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <div style={{ flex: 2, marginLeft: '80px' }}>
      <img 
        src="/FinancialPlanningWhyus.png" 
        alt="Why Choose Us" 
        style={{ width: '100%', height: 'auto' }}
      />
    </div>

    <div style={{ flex: 2, marginLeft: '20px' }}>
      <h1 style={{ fontSize: '70px', marginBottom: '10px', color: '#a60424' , fontWeight:'bold' }}>Just Why Opt for EaseMyProcess?</h1>
      <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
      We offer unique solutions tailored to your needs.
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
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
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Save Time</h3>
          <p style={{ fontSize: '14px' }}>Replicated duties take up a lot of an employee's time. Each month, our tools save more than 20 hours.</p>
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
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Boost Accuracy</h3>
          <p style={{ fontSize: '14px' }}>Obtain accurate financial data and personalized dashboards."</p>
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
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Boost Efficiency</h3>
          <p style={{ fontSize: '14px' }}>With our Excel training, team productivity can rise by as much as 60%. </p>
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
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Make Wise Choices:</h3>
          <p style={{ fontSize: '14px' }}>Examine expenses to develop more effective pricing plans. </p>
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
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Grow Quicker</h3>
          <p style={{ fontSize: '14px' }}>To increase sales and profits, comprehend pricing, rivalry, and customer profitability.
           </p>
        </div>
       
       
      </div>
    </div>
  </div>
      <Planning/>
      <ContactUs />
      <Process />
      
      <FAQs FaqTableData={financialPlanningFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default FinancialPlanning;
