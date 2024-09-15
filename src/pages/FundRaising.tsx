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
import Funding from "@/components/Funding";
import { fundingItems } from "@/constants/carousel";
import { fundFaqs } from "@/constants/faqs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const FundRaising = () => {
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
      <Hero items={fundingItems} />

      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: 2, marginLeft: '80px' }}>
          <img
            src="/FundRaisingwhyus.png"
            alt="Why Choose Us"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div style={{ flex: 2, marginLeft: '20px' }}>
          <h1 style={{ fontSize: '70px', marginBottom: '10px', color: '#a60424', fontWeight: 'bold' }}>Why Choose Us?</h1>
          <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
            Many companies require capital, but our approach is distinct:
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '10px 0 20px' }}>
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
              <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Multi-Method Valuation</h3>
              <p style={{ fontSize: '14px' }}>We leverage a blend of industry-leading methodologies—
                including market, income, and cost approaches—to deliver a comprehensive and
                accurate business assessment.</p>
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
              <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Data-Driven Excellence</h3>
              <p style={{ fontSize: '14px' }}>Our valuations are grounded in meticulous research,
                incorporating competitor analysis, industry trends, and economic factors, ensuring
                you receive insights based on real-world data.</p>
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
              <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Reliable Financial Modeling</h3>
              <p style={{ fontSize: '14px' }}>Reliable Financial Modeling: We create robust financial models featuring detailed
                forecasts, key ratios, and interactive dashboards, so your projections are supported by
                solid evidence.</p>
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
              <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Decades of Expertise</h3>
              <p style={{ fontSize: '14px' }}>With over ten years in top consulting firms, our experienced
                team handles complex valuations with precision and adheres to international
                standards, providing you with unmatched expertise</p>
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
              <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Investor-Approved Reports</h3>
              <p style={{ fontSize: '14px' }}>Our high-quality valuations are consistently recognized
                and accepted by Big 4 accounting firms, reflecting their credibility and meeting the
                highest investor expectations</p>
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
