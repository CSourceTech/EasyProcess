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

const services = [
  {
    title: "Pitch Deck Creation",
    icon: <RiPresentationFill />,
    bg: "/services/pdbg.svg",
    desc: "Elevate your pitch with our comprehensive Pitch Deck Creation service, from market research to stunning design. We create pitch decks that tell your story, showcase your potential, and grab investor attention in those crucial first minutes.",
  },
  {
    title: "Pitch Training",
    bg: "/services/ptbg.svg",
    icon: <TfiBlackboard />,
    desc: "Your pitch deck is only half the battle. We equip you with the skills to deliver it with confidence and captivate investors. We'll help you refine your storytelling, develop captivating stage presence, and hone your ability to handle tough Q&A sessions.",
  },
  {
    title: "Business Plan",
    bg: "/services/bpbg.svg",
    icon: <FaClipboardList />,
    desc: "Forge a clear path to success with our Business Plan service. We guide you through crafting a strategic roadmap, forecasting 3-5 years ahead with meticulous Market and Competitor Analysis.",
  },
  {
    title: "Teaser",
    bg: "/services/tbg.svg",
    icon: <PiStrategyBold />,
    desc: "Fuel Investor Interest with a Captivating Teaser. We craft teasers that are more than just introductions - they're strategic hooks that pique investor curiosity and leave them wanting more.",
  },
  {
    title: "Detailed Financial Modelling",
    bg: "/services/dfmbg.svg",
    icon: <FaFileInvoiceDollar />,
    desc: "Go beyond static spreadsheets. Our dynamic, editable models provide three-statement forecasts, key financial charts, insightful dashboards, and funding/capital table projections. Gain a clear financial picture and impress investors with your data-driven approach.",
  },
  {
    title: "Industry and Competitor Analysis",
    bg: "/services/icabg.svg",
    icon: <IoStatsChart />,
    desc: "Know Your Market, Conquer Your Competitors We dive deep into your industry landscape, uncovering key insights on revenue, competitors, market strategies, and more. Stay ahead of the curve and make informed decisions that drive success.",
  },
];

export default function HomeService() {
  return (
    <div className="py-12 bg-[#F6F6F6] ">
      <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full pb-4"
      >
        <Heading>Services</Heading>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-x-12 gap-y-6 px-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
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
  bg,
  desc,
}: {
  title: string;
  bg: string;
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
      <div className="relative rounded-lg group shadow-lg md:w-96 h-[20rem] md:h-96 overflow-hidden hover:shadow-2xl mb-10">
        <Image src={bg} alt={title} width={1000} height={1000} className="" />
        <div className="w-full h-[120px] group-hover:h-full flex items-center flex-col duration-500 bg-white absolute bottom-0 group-hover:bottom-1/5 left-0">
          <div className="absolute -mt-6 group-hover:mt-7 bg-red-600 transition group-hover:duration-300 group-hover:rounded-xl group-hover:border-2 group-hover:border-red-600 p-2 rounded-full text-3xl text-white mx-auto shadow-xl group-hover:bg-white group-hover:text-red-600">
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl text-red-600 font-semibold ml-4 py-4 text-center mt-4 group-hover:mt-20 group-hover:text-xl">
            {title}
          </h3>
          <span className="mx-6 my-2 text-[12px] md:text-sm  text-center opacity-0 group-hover:opacity-100 transition group-hover:duration-100 group-hover:delay-300">{desc}</span>
          {/* <button className="bg-red-700 px-5 py-0.5 text-white mt-10 rounded-3xl"><HiMiniChevronDoubleRight size={24} /></button> */}
        </div>
       
      </div>
    </motion.div>
  );
}
