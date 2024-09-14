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
import { homeFaqs, pitchDeckFaqs } from "@/constants/faqs";
import { pitchItems } from "@/constants/carousel";
import Pitch from "@/components/Pitch";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const PitchDeck = () => {
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

      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <div style={{ flex: 2, marginLeft: '80px' }}>
      <img 
        src="/pitchDeck.png" 
        alt="Why Choose Us" 
        style={{ width: '100%', height: 'auto' }}
      />
    </div>

    <div style={{ flex: 2, marginLeft: '20px' }}>
      <h1 style={{ fontSize: '70px', marginBottom: '10px', color: '#a60424' , fontWeight:'bold' }}>Why Decide on Us?</h1>
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
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Increase Your Chances by 75%:</h3>
          <p style={{ fontSize: '14px' }}>We Draft Excellent Business Plans, Financial Models, Pitch Decks, and Teasers. Our team of experts consists of consultants, experts in PowerPoint, designers, and advisors on branding.</p>
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
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Market Research:</h3>
          <p style={{ fontSize: '14px' }}>Our team conducts comprehensive studies on market size, trends, and rivals."</p>
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
          <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Comprehensive Financial Models:</h3>
          <p style={{ fontSize: '14px' }}>Our forecasts and insights are explained in detail.
          Years of Experience: We've been creating presentations that wow investors, draw in clients, and advance your business for more than ten years. </p>
        </div>
       
      </div>
    </div>
  </div>
      

      <Pitch />
      <ContactUs />
      <Process />
      
      <FAQs FaqTableData={homeFaqs} heading="FAQs" />
      <Footer />
    </main>
  );
};

export default PitchDeck;
