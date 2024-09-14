import { motion } from "framer-motion";
import Heading from "./ui/Heading";
import Image from "next/image";
import { RiPresentationFill } from "react-icons/ri";
import { ReactNode } from "react";
import { TfiBlackboard } from "react-icons/tfi";
import { FaClipboardList, FaFileInvoiceDollar } from "react-icons/fa";
import { PiStrategyBold } from "react-icons/pi";
import { IoStatsChart } from "react-icons/io5";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import Link from "next/link";

const services = [
  {
    title: "Raisers of Funds",
    icon: <RiPresentationFill />,
    bg: "/images/hero/ser1.jpg",
    href: "/FundRaising",
    desc: "Are You Prepared to Expand Your Enterprise? We at EaseMyProcess assist you in obtaining the funding you require to expand your enterprise. Regardless We are here to help you achieve no matter what level you're at.",
  },
  {
    title: "Valuation",
    bg: "/images/hero/ser2.jpg",
    href: "/Valuation",
    icon: <TfiBlackboard />,
    desc: "Unlock the true value of your business with our precise and investor-approved valuation services. Using multi-method approaches and realistic financial modeling, we deliver credible valuations that meet international standards and satisfy investor scrutiny.",
  },
  {
    title: "Pitching Deck",
    bg: "/images/hero/ser3.jpg",
    href: "/PitchDeck",
    icon: <FaClipboardList />,
    desc: "Captivate investors in just 3 minutes with a compelling pitch deck from EaseMyProcess. Our Wall Street-level presentations, comprehensive business plans, and advanced financial models increase your chances of securing funding by 75%.",
  },
  {
    title: "Accounting & Compliance",
    bg: "/images/hero/ser4.png",
    href: "/Accounting",
    icon: <IoStatsChart />,
    desc: "Streamline yourfinancial processes and ensure compliance with EaseMyProcess. Save up to 60% on accounting costs with our professional. technology-driven services, from dailyrecord-keeping to comprehensive audit support and regulatory compliance.",
  },
  {
    title: "Financial Planning & Analysis",
    bg: "/images/hero/ser5.png",
    href: "/FinancialPlanning",
    icon: <PiStrategyBold />,
    desc: "Transform your business with expert financial analysis and Excel automation from EaseMyProcess. Improve accuracy, boost efficiency by up to 80%, and make data-driven decisions with our tailored dashboards forecasting, and budgeting solutions.",
  },
  {
    title: "Deal Guidance and Assurance",
    bg: "/images/hero/ser6.png",
    href: "/DealAdvisory",
    icon: <FaFileInvoiceDollar />,
    desc: "Maximize your investment opportunities and achieve successful deals with EaseMyProcess. We provide end-to-end deal advisory. strategic M&A structuring, and seamless transaction support, ensuring smart investments and strong exits.",
  },
 
];

export default function MainServices() {
  return (
    <div className="w-full py-10 bg-[#a60424]" id="services">
      <div className="container mx-auto">
        <h1 className="text-5xl text-white font-bold flex justify-center py-10 mt-10">
          Services
        </h1>

        <div className="grid md:grid-cols-3 gap-x-12 gap-y-6 px-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              href={service.href}
              icon={service?.icon}
              bg={service?.bg}
              desc={service?.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  href,
  bg,
  desc,
}: {
  title: string;
  bg: string;
  href: string;
  desc: string;
  icon: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full"
    >
      {/* bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 */}
      <div className="relative rounded-lg group shadow-lg md:w-96  h-[20rem] md:h-96 overflow-hidden hover:shadow-2xl mb-10">
        <Image src={bg} alt={title} width={1000} height={1000} className="" />
        <div className="w-full h-[120px] group-hover:h-full flex items-center flex-col duration-500 bg-white absolute bottom-0 group-hover:bottom-1/5 left-0">
          <div className="absolute -mt-6 group-hover:mt-3 md:group-hover:mt-10 bg-red-600 transition group-hover:duration-300 group-hover:rounded-xl group-hover:border-2 group-hover:border-red-600 p-2 rounded-full text-3xl text-white mx-auto shadow-xl group-hover:bg-white group-hover:text-red-600">
            {icon}
          </div>
          <h3 className="text-3xl text-red-600 font-semibold ml-4 py-4 text-center mt-4 group-hover:mt-16 md:group-hover:mt-24 group-hover:text-xl">
            {title}
          </h3>
          <span className="mx-6 md:my-2 text-sm text-center opacity-0 group-hover:opacity-100 transition group-hover:duration-100 group-hover:delay-300 group-hover:text-[12px] md:group-hover:text-sm">
            {desc}
          </span>
          <Link href={href}
            className="bg-red-700 px-5 py-1 text-white mt-2 md:mt-6 rounded-3xl inline-flex items-center"
          >
            <HiMiniChevronDoubleRight size={24} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
