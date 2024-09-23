import { IoStatsChart } from "react-icons/io5";
import Image from "next/image";
import { TbBusinessplan } from "react-icons/tb";
import { FaBalanceScale, FaMoneyBillWave } from "react-icons/fa";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";
import { GiBullseye } from "react-icons/gi";
import { MdAutoGraph } from "react-icons/md";

export default function Variable() {

  const funding = [
    {
      title: "Business Valuation",
      desc: "Uncover the true worth of your business with in-depth research into competitors, industry trends, and market dynamics.",
      icon: <TbBusinessplan />,
      bg: "/images/hero/ser1.jpg",
    },
    {
      title: "Start-up Valuation",
      desc: "Navigate the complex world of startups with precise valuation techniques tailored for emerging ventures, providing clarity for investors and founders.",
      icon: <FaBalanceScale />,
      bg: "/images/hero/ser2.jpg",
    },
    {
      title: "Valuation of Legal Entities, Shares, and Complex Securities",
      desc: "Conduct valuations for accounting purposes (IFRS, US GAAP, IndAS), tax purposes (Rule 11UA/11UB), and compliance with India’s corporate law and FEMA.",
      icon: <HiMiniClipboardDocumentCheck />,
      bg: "/images/hero/ser3.jpg",
    },
    {
      title: "Valuation of Intangible Assets",
      desc: "Unlock hidden value within your brand, technology, and intellectual property, optimizing purchase prices per IFRS, US GAAP, or IndAS.",
      icon: <GiBullseye />,
      bg: "/images/hero/ser4.png",
    },
    {
      title: "Goodwill Impairment Testing",
      desc: `Address goodwill impairment effectively while adhering to IFRS, US GAAP, or IndAS standards.`,
      icon: <MdAutoGraph />,
      bg: "/images/hero/ser5.png",
    },
    {
      title: "Valuation for Mergers and Restructuring",
      desc: `Leverage precise valuation insights to navigate mergers, spin-offs, and restructuring endeavors with confidence.`,
      icon: <IoStatsChart />,
      bg: "/images/hero/ser6.png",
    },
    {
      title: "IBBI Registered Valuations",
      desc: `Trust in our expertise as registered valuers under the Companies Act, 2013, ensuring accuracy and integrity in valuation practices.`,
      icon: <FaMoneyBillWave />,
      bg: "/images/hero/ser8.jpg",
    },
    {
      title: "Valuations Under SEBI & Stock Exchange Regulations",
      desc: `Navigate regulatory compliance complexities with precision, providing valuation services aligned with SEBI and stock exchange regulations.`,
      icon: <HiMiniClipboardDocumentCheck />,
      bg: "/images/hero/ser7.jpg",
    }
  ]

  return (

    <div className="w-full py-10 bg-[#f6f6f6]">
      <div className="mx-auto container">
        <h1 className="text-2xl md:text-5xl text-[#d2042d] font-bold flex justify-center mb-10 text-center" >
          Valuation's Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {funding.map((fund, index) => (
            <div key={index} className="relative mx-auto rounded-lg group shadow-lg md:w-80 h-[20rem] md:h-80 overflow-hidden hover:shadow-2xl mb-10 global-shadow">
              <Image src={fund.bg} alt={fund.title} width={1000} height={1000} className="" />
              <div className="w-full h-[120px] group-hover:h-full flex items-center flex-col duration-500 bg-white absolute bottom-0 group-hover:bottom-1/5 left-0">
                <div className="absolute -mt-6 group-hover:mt-8 md:group-hover:mt-10 bg-red-600 transition group-hover:duration-300 group-hover:rounded-xl group-hover:border-2 group-hover:border-red-600 p-2 rounded-full text-3xl text-white mx-auto shadow-xl group-hover:bg-white group-hover:text-red-600">
                  {fund.icon}
                </div>
                <h3 className="text-2xl text-red-600 font-semibold p-2 text-center mt-4 group-hover:mt-16 md:group-hover:mt-24 group-hover:text-xl">
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
