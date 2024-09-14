import { FaHandHoldingUsd } from "react-icons/fa";
import { GiAngelWings } from "react-icons/gi";
import { FaLandmarkDome } from "react-icons/fa6";


import Image from "next/image"; 


export default function Funding() {
     
    const funding = [{
        title: "Seed Funds",
        desc: "Obtain equity funds with a minimum investment of INR 10,000.",
        icon: <FaHandHoldingUsd />,
        bg: "/images/hero/ser1.jpg",
    },
    // {
    //     title: "Venture capital",
    //     desc: "We help you formulate business fundraising strategy highlighting your business' value and growth potential investors, inspiring them to inject capital.",
    //     icon: <IoStatsChart />,
    //     bg: "/images/hero/ser2.jpg",
    // },
    {
        title: "Angel Investing",
        desc: "Show off your startup's potential to raise INR 4 crores and beyond.",
        icon: <GiAngelWings />,
        bg: "/images/hero/ser3.jpg",
    },
    {
        title: "Debt Capital",
        desc: "Acquire borrowed money for immediate or future requirements.",
        icon: <FaLandmarkDome />,
        bg: "/images/hero/ser4.png",
    }
    ]


    return (
        
         <div className="w-full py-10 bg-[#a60424]">
       <div className="container mx-auto">
            <h1 className="text-3xl md:text-5xl text-white font-bold flex justify-center mb-10 text-center" >
            Types of Financial Support
            </h1>
         <div className="grid grid-cols-1 md:grid-cols-3">
            {funding.map((fund, index) => (
                <div className="relative rounded-lg group shadow-lg md:w-80 h-[20rem] md:h-80 overflow-hidden hover:shadow-2xl mb-10">
                <Image src={fund.bg} alt={fund.title} width={1000} height={1000} className="" />
                <div className="w-full h-[120px] group-hover:h-full flex items-center flex-col duration-500 bg-white absolute bottom-0 group-hover:bottom-1/5 left-0">
                  <div className="absolute -mt-6 group-hover:mt-8 md:group-hover:mt-10 bg-red-600 transition group-hover:duration-300 group-hover:rounded-xl group-hover:border-2 group-hover:border-red-600 p-2 rounded-full text-3xl text-white mx-auto shadow-xl group-hover:bg-white group-hover:text-red-600">
                    {fund.icon}
                  </div>
                  <h3 className="text-2xl text-red-600 font-semibold ml-4 py-8 text-center mt-4 group-hover:mt-16 md:group-hover:mt-24 group-hover:text-xl">
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
