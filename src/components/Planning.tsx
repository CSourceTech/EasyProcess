
import { IoStatsChart } from "react-icons/io5";
import Image from "next/image"; 
import { FaCalendarAlt } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaRobot } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";


export default function Planning() {
     
    const funding = [{
        title: "Simplified Quarterly and Monthly Reporting",
        desc: "For simple reporting, use Management Information Systems (MIS). We put up processes for reliable reporting so you may concentrate on in-depth research and strategic insights. Accurate Predicting Throughout Periods.Manage uncertainty by utilizing comprehensive reports across many departments and currencies. Learn about the performance of your company to make wise decisions and promote long-term expansion.",
        icon: <FaCalendarAlt />,
        bg: "/images/hero/ser1.jpg",
    },
    {
        title: "Working Solutions for Excel-Based Budgeting ",
        desc: "Create simple Excel budgets and contrast them with actual outcomes. Make better choices so that you can successfully adjust to shifting company situations.",
        icon: <RiFileExcel2Fill  />,
        bg: "/images/hero/ser2.jpg",
    },
    {
        title: "Effective Automation of Workflows",
        desc: "Use strong Excel formulas to automate chores and increase productivity.Align resources with growth-oriented strategic priorities.",
        icon: <FaRobot />,
        bg: "/images/hero/ser3.jpg",
    },
    {
        title: "Customized Training in Excel for Improved Proficiency",
        desc: " Enhance the abilities of your group with customized Excel instruction. Boost output, improve data analysis, and streamline .",
        icon: <FaBriefcase />,
        bg: "/images/hero/ser4.png",
    },
   
    ]


    return (
        
         <div className="w-full py-10 bg-[#a60424]">
       <div className="container mx-auto">
            <h1 className="text-2xl md:text-5xl text-white font-bold flex justify-center mb-10 text-center" >
            Financial and Planning's Services
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
