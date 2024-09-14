
import { IoStatsChart } from "react-icons/io5";
import Image from "next/image";
import { FaBuildingFlag } from "react-icons/fa6"; 
import { FaUserTie } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaMapSigns } from "react-icons/fa";




export default function Compilance() {
     
    const funding = [{
        title: "Comply with Indian regulations",
        desc: "Precisely compute and submit monthly taxes due (TDS and GST).On-time returns (quarterly or monthly).Hearings and litigation help.Management of secretarial compliance.",
        icon: <FaBuildingFlag />,
        bg: "/images/hero/ser1.jpg",
    },
    {
        title: "Professional Services for Audit Support and Easily get ready for audits",
        desc: "Pre-audit planning and evaluation.Working together with auditors.",
        icon: <FaUserTie/>,
        bg: "/images/hero/ser2.jpg",
    },
    {
        title: "Management of Accounts Receivable and Utilize our services to increase cash flow:",
        desc: "Effective invoice creation and delivery.Proactive collections and follow-up.Reconciliation of customer accounts. Reports and analysis that age.",
        icon: <FaFileInvoiceDollar />,
        bg: "/images/hero/ser3.jpg",
    },
    {
        title: "Management of Accounts Payable",
        desc: "Simplify your payment procedures by processing and approving invoices accurately.Efficient scheduling of payments.The reconciliation of suppliers.Monitoring and documenting expenses.",
        icon: <FaCreditCard />,
        bg: "/images/hero/ser4.png",
    },
    {
        title: "Strategic Board Pack Assembly",
        desc: "Assist the board in reaching strategic decisions:Thorough financial evaluation.KPI dashboards.Competitive and market insights.Tailored presentations and reports.",
        icon: <FaMapSigns />,
        bg: "/images/hero/ser4.png",
    },

    ]


    return (
        
         <div className="w-full py-10 bg-[#a60424]">
       <div className="container mx-auto">
            <h1 className="text-2xl md:text-5xl text-white font-bold flex justify-center mb-10 text-center" >
            Accounting and Compilance's Services
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
