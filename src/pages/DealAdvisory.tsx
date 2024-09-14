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
import { dealAdvisoryFaqs } from "@/constants/faqs";
import { dealItems } from "@/constants/carousel";
import Guidance from "@/components/Deal_Guidance";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const DealAdvisory = () => {
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
      <Hero items={dealItems} />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <div style={{ flex: 2, marginLeft: '80px' }}>
      <img 
        src="/dealAdvisoryWhyUS.png" 
        alt="Why Choose Us" 
        style={{ width: '100%', height: 'auto' }}
      />
    </div>

    <div style={{ flex: 2, marginLeft: '20px' }}>
      <h1 style={{ fontSize: '70px', marginBottom: '10px', color: '#a60424' , fontWeight:'bold' }}>Why Opt for  Us?</h1>
      <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
      We offer unique solutions tailored to your needs.
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
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Skilled Guidance:</h3>
          <p style={{ fontSize: '14px' }}>Provided by a former Big 4 consultant with extensive knowledge of large-scale transactions in India.</p>
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
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Full-Service Advisory:</h3>
          <p style={{ fontSize: '14px' }}>We handle every aspect, from identifying prospects to completing transactions. Our in-depth knowledge of the market allows us to identify the most favorable investment opportunities in India.</p>
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
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Startup Specialization:</h3>
          <p style={{ fontSize: '14px' }}>We assist with exit planning and startup setup. Over 50,000 Indian companies received $14 billion in investment in 2023.. </p>
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
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Regulatory Knowledge:</h3>
          <p style={{ fontSize: '14px' }}>We are aware of the intricate tax and regulatory laws in India. </p>
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
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Client Focus:</h3>
          <p style={{ fontSize: '14px' }}>In an economy that is expanding quickly, we address problems promptly and communicate effectively </p>
        </div>
       
      </div>
    </div>
  </div>
      <Guidance/>
      <ContactUs/>
      <Process/>
      <Portfolio/>
      <FAQs FaqTableData={dealAdvisoryFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default DealAdvisory;
