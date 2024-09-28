import { FaHandHoldingUsd } from "react-icons/fa";
import { GiAngelWings } from "react-icons/gi";
import { FaLandmarkDome } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { MdAutoGraph } from "react-icons/md";
import { PiGraphBold } from "react-icons/pi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

import Image from "next/image";


export default function Funding() {

  //   For Accounting Purposes: Compliance with IFRS, US GAAPs, and IndAS
  //   standards. 
  // o For Tax Purposes: Adherence to Rule 11UA / 11UB of Income - tax Rules and 
  // transfer pricing regulations in India. 
  // o For Corporate Law and FEMA Compliance: Accurate valuations to meet 
  // Indian corporate and foreign exchange regulations.
  const funding = [
    {
      title: "Venture Capital",
      desc: `We help you formulate business fundraising strategy highlighting your business' value and growth potential investors, inspiring them to inject capital.`,
      icon: <MdOutlineBusinessCenter />,
      bg: "/images/hero/ser7.jpg",
    },
    {
      title: "Angel Investing ",
      desc: `Highlight the potential of your startup to angel investors and secure the funding you need to get your idea off the ground and grow more rapidly.
`,
      icon: <FaHandHoldingUsd />,
      bg: "/images/hero/ser1.jpg",
    },
    {
      title: "Debt Capital: ",
      desc: `Create a powerful business fundraising strategy that will help you secure borrowed funds on a long-term or short-term basis, depending on your needs.`,
      icon: <GiAngelWings />,
      bg: "/images/hero/ser3.jpg",
    },
    {
      title: "Private Seed Funds ",
      desc: `Startup India Seed Fund Scheme and To raise equity capital of INR 10 Lacs and above .`,
      icon: <FaLandmarkDome />,
      bg: "/images/hero/ser4.png",
    },
   
  ]

  return (

    <div className="w-full py-10 bg-[#f6f6f6]">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-5xl text-[#d2042d] font-bold flex justify-center mb-10 text-center" >
          Types of Funding
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {funding.map((fund, index) => {
    const isLastBox = index === funding.length - 1 && funding.length % 3 === 1;
    const isLastTwoBoxes = index >= funding.length - 2 && funding.length % 3 === 2;

    // If this is the first of the last two boxes, we render the wrapper
    if (isLastTwoBoxes && index === funding.length - 2) {
      return (
        <div key="last-two-wrapper" className="flex justify-center flex-col md:flex-row md:col-span-3 gap-4">
          {funding.slice(-2).map((fund, subIndex) => (
            <div
              key={`last-two-${subIndex}`}
              className="relative rounded-lg group mx-auto shadow-lg md:w-80 h-[20rem] md:h-80 overflow-hidden hover:shadow-2xl mb-10 global-shadow"
            >
              <Image
                src={fund.bg}
                alt={fund.title}
                width={1000}
                height={1000}
                className=""
              />
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
      );
    }

    // Default rendering for all other items
    if (!isLastTwoBoxes) {
      return (
        <div
          key={index}
          className={`relative rounded-lg group mx-auto shadow-lg md:w-80 h-[20rem] md:h-80 overflow-hidden hover:shadow-2xl mb-10 global-shadow ${
            isLastBox ? 'md:col-span-3 md:flex md:justify-center' : ''
          }`}
        >
          <Image
            src={fund.bg}
            alt={fund.title}
            width={1200}
            height={1200}
            className=""
          />
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
      );
    }

    return null; // Safeguard to not render anything if it's not needed
  })}
</div>





      </div>
    </div>

  );
}
