import { IoStatsChart } from "react-icons/io5";
import Image from "next/image"; 
import { TbBusinessplan } from "react-icons/tb";
import { FaBalanceScale } from "react-icons/fa";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";
import { GiBullseye } from "react-icons/gi";

export default function Variable() {
     
    const funding = [{
        title: "Business Valuation",
        desc: "Evaluate rivals, industry trends, and economic considerations to determine your company's genuine worth. Start-up valuation: Acquire precise values that are customized for startups, benefiting investors as well as founders.",
        icon: <TbBusinessplan />,
        bg: "/images/hero/ser1.jpg",
    },
    {
        title: "Legal Valuation",
        desc: "Professional services for adherence to company and tax rules as well as legal needs. Determine the worth of your technology, intellectual property, and brand with intangible asset valuation.",
        icon: <FaBalanceScale  />,
        bg: "/images/hero/ser2.jpg",
    },
    {
        title: "Goodwill Impairment Testing",
        desc: "Process goodwill impairment in compliance with international norms. Acquire accurate insights for restructuring and mergers with our mergers and restructuring valuation service",
        icon: <HiMiniClipboardDocumentCheck />,
        bg: "/images/hero/ser3.jpg",
    },
    {
        title: "Accuracy and Integrity",
        desc: " Accuracy and integrity are guaranteed by us as registered valuers.Comply with regulations regarding stock exchange valuations and SEBI.",
        icon: <GiBullseye />,
        bg: "/images/hero/ser4.png",
    }]


    return (
        
         <div className="w-full py-10 bg-[#a60424]">
       <div className="container mx-auto">
            <h1 className="text-2xl md:text-5xl text-white font-bold flex justify-center mb-10 text-center" >
            Valuation's Services
            </h1>
         <div className="grid grid-cols-1 md:grid-cols-3">
            {funding.map((fund, index) => (
                <div className="relative rounded-lg group shadow-lg md:w-80 h-[20rem] md:h-80 overflow-hidden hover:shadow-2xl mb-10">
                <Image src={fund.bg} alt={fund.title} width={1000} height={1000} className="" />
                <div className="w-full h-[120px] group-hover:h-full flex items-center flex-col duration-500 bg-white absolute bottom-0 group-hover:bottom-1/5 left-0">
                  <div className="absolute -mt-6 group-hover:mt-8 md:group-hover:mt-10 bg-red-600 transition group-hover:duration-300 group-hover:rounded-xl group-hover:border-2 group-hover:border-red-600 p-2 rounded-full text-3xl text-white mx-auto shadow-xl group-hover:bg-white group-hover:text-red-600">
                    {fund.icon}
                  </div>
                  <h3 className="text-3xl text-red-600 font-semibold ml-4 py-8 text-center mt-4 group-hover:mt-16 md:group-hover:mt-24 group-hover:text-xl">
                    {fund.title}
                  </h3>
                  <span className="mx-6 md:my-2 text-sm text-center opacity-0 group-hover:opacity-100 transition group-hover:duration-100 group-hover:delay-300 group-hover:text-[12px] md:group-hover:text-sm">
                    {fund.desc}
                  </span>
                  
                </div>
              </div>
              
            ))}
          
         </div>
       </div>
        </div>
       
    );
    }
