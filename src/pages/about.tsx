import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import WhatsappButton from '@/components/whatapp'
import Head from 'next/head'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa6'

type Props = {}

function about({}: Props) {

const Team= [
    {
        id: 1,
        image: './Anant_gujrani.png',
        name: 'Anant Gujrani',
        Social: 'https://www.linkedin.com/in/gujrani/',
        description: 'Anant Gujrani is a qualified chartered accountant with 8+ years of experience in accounting, auditing, internal financial control, and financial reporting across various industries. He worked for Deloitte, D.E. Shaw, and Moore Stephens. He is known for bringing efficiency through process automation and tactic solutions in financial operations. He is also a certified QuickBooks Proadvisor.'
    },
    {
        id: 2,
        image: 'https://dummyimage.com/206x206',
        name: 'Kshitij Gupta',
        Social: '',
        description: 'Anant Gujrani is a qualified chartered accountant with 8+ years of experience in accounting, auditing, internal financial control, and financial reporting across various industries. He worked for Deloitte, D.E. Shaw, and Moore Stephens. He is known for bringing efficiency through process automation and tactic solutions in financial operations. He is also a certified QuickBooks Proadvisor.'
    },
    {
        id: 3,
        image: 'https://dummyimage.com/206x206',
        name: 'Akash Jaiswal',
        Social: '',
        description: 'Anant Gujrani is a qualified chartered accountant with 8+ years of experience in accounting, auditing, internal financial control, and financial reporting across various industries. He worked for Deloitte, D.E. Shaw, and Moore Stephens. He is known for bringing efficiency through process automation and tactic solutions in financial operations. He is also a certified QuickBooks Proadvisor.'
    },
]


  return (
    <>
    <Head>
        <title>About | Ease My Process</title>
    </Head>
    <Navbar/>
    <WhatsappButton/>
    <div>
    <section className="text-gray-700 bg-white body-font">

    <div className="px-5 pt-24 mx-auto">
    <div className="px-5 flex flex-col text-left w-full m-20">
      <h1 className="text-4xl md:text-6xl font-extrabold title-font mb-4 text-gray-900 tracking-widest">ABOUT US</h1>
      <div className="h-1 w-20 md:w-40 bg-[#D20420]"></div>

      <p className="lg:w-2/3  leading-relaxed text-base md:text-lg">Easemyprocess is an outsourced bookkeeping, accounting, taxation and advisory firm. We assist small to mid-size businesses and CPA firms to streamline bookkeeping, accounting, payroll and tax calculation. We make sure to help Businesses and CPA firms to bring efficiency and reduce cost.</p>
    </div>
    </div>


  <div className="px-5 py-24 mx-auto">
    <div className="px-5 flex flex-col text-left w-full mb-20">
      <h1 className="text-6xl font-extrabold title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
      <div className="h-1 w-20 md:w-40 bg-[#D20420]"></div>
      <p className="lg:w-2/3 leading-relaxed text-base md:text-lg">Meet the team running Ease My Process.</p>
    </div>
    <div className="flex flex-wrap -m-4 max-w-screen-xl mx-auto">
      
    {Team.map((data) => (
      <div className="p-4 lg:w-full">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team member" className="flex-shrink-0  w-72 h-72 object-cover object-center sm:mb-0 mb-4 shadow-md border-2 border-[#D20420]" src={data.image}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg md:text-4xl mb-4 text-gray-700">{data.name}</h2>
            {/* <h3 className="text-gray-500 mb-3">DesigNATION</h3> */}
            <p className="mb-4 md:text-lg">{data.description}</p>
            <span className="inline-flex">
              <a href={data.Social} className="text-gray-500 hover:text-[#D20420] border hover:shadow-lg transition p-2">
                <FaLinkedinIn/>
              </a>
              
             
            </span>
          </div>
        </div>
      </div>  ))}
    </div>
  
  </div>
</section>
    </div>
    <Footer/>
    </>
  )
}

export default about