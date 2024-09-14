import { Poppins } from "next/font/google";
import Footer from "@/components/ui/footer";
import FAQs from "@/components/ui/FAQs";
import Navbar from "@/components/ui/navbar";
import Head from "next/head";
import MainHero from "@/components/MainHero";
import { homeFaqs } from "@/constants/faqs";
import HomeService from "@/components/HomeService";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
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
      <MainHero />
      {/* <Statistics /> */}
      <FAQs FaqTableData={homeFaqs} />

      {/* <Testimonials /> */}
      {/* <Calendly /> */}
      {/* <WhatsappButton /> */}
      <Footer />
    </main>
  );
}
