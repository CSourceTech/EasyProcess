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
 {/* WhatsApp Floating Button */}
      <a
        href="https://wa.link/1hidyq"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326a7.876 7.876 0 0 0-5.634-2.326c-4.374 0-7.937 3.562-7.937 7.937 0 1.396.36 2.751 1.04 3.951L.02 15.979l4.187-1.098a7.862 7.862 0 0 0 3.762.962c4.376 0 7.937-3.562 7.937-7.937a7.876 7.876 0 0 0-2.305-5.58zm-5.634 13.005a6.628 6.628 0 0 1-3.397-.923l-.243-.144-2.484.651.662-2.422-.158-.25a6.635 6.635 0 1 1 12.292-3.647c0 3.667-2.985 6.643-6.672 6.643zm3.613-4.991c-.198-.1-1.17-.579-1.352-.644-.181-.066-.313-.1-.444.1s-.51.644-.625.779c-.114.134-.23.15-.427.05a5.484 5.484 0 0 1-1.612-.996 6.07 6.07 0 0 1-1.123-1.396c-.118-.2-.012-.308.089-.408.091-.09.203-.235.305-.352.101-.118.134-.202.202-.336.066-.134.033-.25-.017-.351-.05-.1-.444-1.072-.609-1.469-.16-.384-.322-.331-.444-.337l-.377-.007a.733.733 0 0 0-.53.247 2.214 2.214 0 0 0-.694 1.646c0 .97.706 1.908.803 2.042.1.134 1.392 2.13 3.373 2.986.472.203.84.325 1.127.415.473.15.902.129 1.24.078.378-.057 1.17-.478 1.336-.94.165-.462.165-.857.116-.94-.05-.084-.181-.134-.379-.235z" />
          </svg>
        </div>
      </a>

      <Footer />
    </main>
  );
}
