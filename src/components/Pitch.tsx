
import { IoStatsChart } from "react-icons/io5";
import Image from "next/image"; 
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaCommentDollar } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";



export default function Pitch() {
     
    const funding = [{
        title: "Personalized Pitch Decks",
        desc: "Obtain a personalized pitch deck that effectively communicates your story to potential investors. We combine excellent design and market analysis to make your pitch stand out.",
        icon: <HiOutlinePresentationChartBar/>,
        bg: "/images/hero/ser1.jpg",
    },
    {
        title: "Coaching for Pitch Mastery",
        desc: "With our coaching, deliver your pitches more effectively. Develop your stage presence, deliver your tale effectively, and answer challenging questions with assurance.",
        icon: <FaChalkboardTeacher />,
        bg: "/images/hero/ser2.jpg",
    },
    {
        title: "Business Strategy Development",
        desc: "With our help, you can lay out a clear route to success. We assist you in making three to five-year plans, researching marketplaces and rivals, and creating doable expansion strategies.",
        icon: <FaLightbulb/>,
        bg: "/images/hero/ser3.jpg",
    },
    {
        title: "Captivating Hints",
        desc: "Use our teasers to pique investor interest. They arouse investors' curiosity more than serving as introductions.",
        icon: <FaCommentDollar />,
        bg: "/images/hero/ser4.png",
    },
    {
        title: "Financial Models That Change Over Time",
        desc: "Use our financial models to go beyond simple spreadsheets. Obtain modifiable forecasts, crucial graphics and precise forecasts to wow investors with your research.",
        icon: <FaBusinessTime  />,
        bg: "/images/hero/ser4.png",
    },
     {
        title: "Competitive Analysis and Industry Insights",
        desc: "With our competitive research and industry insights, stay ahead of the game. Recognize market trends,to make informed decisions, consider market dynamics and rival strategy.",
        icon: <FaTachometerAlt  />,
        bg: "/images/hero/ser4.png",
    }
    ]


    return (
        
         <div className="w-full py-10 bg-[#a60424]">
       <div className="container mx-auto">
            <h1 className="text-3xl md:text-5xl text-white font-bold flex justify-center mb-10 text-center" >
            Pitch and Deck's Services
            </h1>
         <div className="grid grid-cols-1 md:grid-cols-3">
            {funding.map((fund, index) => (
                <div className="relative rounded-lg group shadow-lg md:w-80 h-[20rem] md:h-80 overflow-hidden hover:shadow-2xl mb-10">
                <Image src={fund.bg} alt={fund.title} width={1000} height={1000} className="" />
                <div className="w-full h-[140px] group-hover:h-full flex items-center flex-col duration-500 bg-white absolute bottom-0 group-hover:bottom-1/5 left-0">
                  <div className="absolute -mt-6 group-hover:mt-8 md:group-hover:mt-10 bg-red-600 transition group-hover:duration-300 group-hover:rounded-xl group-hover:border-2 group-hover:border-red-600 p-2 rounded-full text-3xl text-white mx-auto shadow-xl group-hover:bg-white group-hover:text-red-600">
                    {fund.icon}
                  </div>
                  <h3 
                  className="text-2xl text-red-600 font-semibold ml-4 py-8 text-center mt-2 group-hover:mt-16 md:group-hover:mt-24 group-hover:text-xl">
                    {fund.title}
                  </h3>
                  <span className="mx-6 md:my-2 text-sm text-center opacity-0 group-hover:opacity-100 transition group-hover:duration-100 group-hover:delay-300 group-hover:text-[10px] md:group-hover:text-sm gap-0">
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
