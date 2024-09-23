
import { IoStatsChart } from "react-icons/io5";
import Image from "next/image";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaCommentDollar } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";



export default function Pitch() {

  const funding = [
    {
      title: "Pitch Deck Creation",
      desc: "Transform your pitch with our comprehensive service that combines market research and eye - catching design.We create decks that effectively tell your story and capture investor interest right from the start.",
      icon: <HiOutlinePresentationChartBar />,
      bg: "/images/hero/ser1.jpg",
    },
    {
      title: "Pitch Training",
      desc: "Equip yourself with the skills to present confidently and engage investors.We help you refine your storytelling, enhance your stage presence, and prepare for challenging Q & A sessions.",
      icon: <FaChalkboardTeacher />,
      bg: "/images/hero/ser2.jpg",
    },
    {
      title: "Business Plan Development",
      desc: "Craft a clear roadmap to success with our guidance.We assist in developing a strategic plan that includes detailed market analysis and 3 - 5 year forecasts.",
      icon: <FaLightbulb />,
      bg: "/images/hero/ser3.jpg",
    },
    {
      title: "Teaser Creation",
      desc: "Capture investor curiosity with our compelling teasers.These strategic hooks are designed to pique interest and entice investors to learn more about your opportunity.",
      icon: <FaCommentDollar />,
      bg: "/images/hero/ser4.png",
    },
    {
      title: "Detailed Financial Modeling",
      desc: "Elevate your financial presentations with dynamic, editable models.Our service provides comprehensive forecasts, key charts, and insightful dashboards to impress investors.",
      icon: <FaBusinessTime />,
      bg: "/images/hero/ser5.png",
    },
    {
      title: "Industry and Competitor Analysis",
      desc: "Gain a competitive edge with our thorough analysis of your industry.We uncover vital insights on market trends and competitors, empowering you to make informed decisions.",
      icon: <FaTachometerAlt />,
      bg: "/images/hero/ser6.png",
    }
  ]


  return (

    <div className="w-full py-10 bg-[#f6f6f6]">
      <div className="mx-auto container">
        <h1 className="text-3xl md:text-5xl text-[#d2042d] font-bold flex justify-center mb-10 text-center" >
          Pitch and Deck's Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {funding.map((fund, index) => (
            <div key={index} className="relative rounded-lg group md:w-80 h-[20rem] md:h-80 overflow-hidden hover:shadow-2xl mb-10 global-shadow mx-auto">
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
