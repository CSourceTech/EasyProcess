import React from "react";
import { useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import MainServices from "./MainServices";
import MainContact from "./MainContact";
import Clients from "./Clients";
import { GoArrowRight } from "react-icons/go";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Portfolio from "./Portfolio";
import { Link } from "react-alice-carousel";

export default function MainHero() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleOpenModal2 = () => {
    setIsOpen2(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleCloseModal2 = () => {
    setIsOpen2(false);
  };
  return (
    <div className="w-full mt-8 md:mt-20">
      {/* section-1 */}

      <div className="bg-[url('/images/hero/mainbg.png')] bg-cover bg-center min-h-[800px] w-full mt-14 flex items-center justify-center">
        <div className="container mx-auto w-full flex flex-col md:flex-row gap-10 items-center md:justify-between justify-center">
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-white">
            <h1 className="text-5xl md:text-7xl font-bold underline">
              Ease My Process.
            </h1>
            <h3 className="text-xl md:text-4xl font-semibold">
              Your Business Growth Partner Inventing Your Growth Strategy
            </h3>
            <Link
              href="#contact-us"
              className="text-center mx-auto mt-2 md:mx-0 hidden lg:flex"
            >
              <button className="max-w-[152px] bg-white py-2 px-2 text-red-500 rounded-md">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2">
            <div className="relative">
              <div className="rounded-tl-[60px] md:rounded-tl-[120px] rounded-b-[60px] md:rounded-b-[85px] overflow-hidden w-[200px] md:w-[400px]">
                <Image
                  className="relative z-10  hover:scale-125 transition duration-1000 w-full h-full"
                  src="/images/hero/man.jpg"
                  alt="hero"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <Image
                className="absolute inset-12 h-[200px] md:inset-24 z-0 w-full max-w-[175px] md:max-w-[350px] md:h-[400px]"
                src="/images/hero/rectborder.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
              <Image
                className="absolute top-48 md:top-[400px] inset-24 md:inset-80 z-0 ml-24 max-w-[50px] md:max-w-[80px] w-full"
                src="/images/hero/Eclipse.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* section-2 & 3 */}
      <div className="relative h-[1250px]">
        <div className="container mx-auto flex justify-center flex-col absolute -top-20 left-1/2 -translate-x-1/2">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/5 flex justify-center">
              <Image
                className="flex justify-center items-center w-full max-w-[150px] md:max-w-[350px]"
                src="/images/hero/lady.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4">
              <h1 className="text-[#d2042d] text-3xl md:text-6xl font-bold underline mb-4">
                Need Funding?
              </h1>
              <h2 className="text-black text-lg md:text-5xl">
                Want Financial Control?
              </h2>
              <h3 className="w-[85%] text-base md:text-2xl text-center md:text-start mb-10 md:mb-0">
                Did you know 82% Of start-ups fail due to poor financial
                management? Let our team help you in achieve financial success.
              </h3>
            </div>
          </div>
          <div>
            <div className="h-[550px] rounded-[80px] w-full flex flex-col md:flex-row overflow-hidden left-1/2 -translate-x-1/2  relative z-50 bg-white">
              <div className="overflow-hidden h-1/5 md:h-full w-full md:w-1/5 relative">
                <div className="bg-[url('/images/hero/img1.jpg')] bg-cover bg-center h-full w-full md:rounded-l-[80px] opacity-60 hover:scale-125 transition duration-1000"></div>
                <div className="flex flex-col justify-center gap-2 md:gap-6 absolute top-1/2 -translate-y-1/2 md:top-1/2 pl-8">
                  <h2 className="text-xl md:text-4xl text-red-600 font-black">
                    Quality Assurance
                  </h2>
                  <div>
                    <h3 className="text-sm md:text-base text-black">
                      Trusted by
                    </h3>
                    <h2 className="text-base md:text-3xl text-black">
                      Top firms
                    </h2>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden h-1/5 md:h-full w-full md:w-1/5 relative">
                <div className="bg-[url('/images/hero/img2.jpg')] bg-cover bg-center h-full opacity-30 hover:scale-125 transition duration-1000 "></div>
                <div className="flex flex-col justify-center gap-2 md:gap-6  absolute top-1/2 -translate-y-1/2 right-4 md:right-0 md:top-28 md:pl-8">
                  <h2 className="text-xl md:text-4xl text-red-600 font-black">
                    Client Satisfaction
                  </h2>
                  <div>
                    <h3 className="text-sm md:text-base text-black">
                      98%
                    </h3>
                    <h2 className="text-xl md:text-3xl text-black">
                      Approval rate
                    </h2>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden h-1/5 md:h-full w-full md:w-1/5 relative">
                <div className="bg-[url('/images/hero/img3.jpg')] bg-cover bg-center h-full opacity-30 hover:scale-125 transition duration-1000  "></div>
                <div className="flex flex-col justify-center gap-3 md:gap-6 absolute top-1/2 -translate-y-1/2 px-2 md:px-4">
                  <h2 className="text-xl md:text-4xl text-red-600 font-black">
                    75% increase in deal closures
                  </h2>
                  <div>
                    <h3 className="text-sm md:text-base text-black">
                      with our investor ready
                    </h3>
                    <h2 className="text-base md:text-3xl text-black">
                      pitch-deck and financial models
                    </h2>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden h-1/5 md:h-full w-full md:w-1/5 relative">
                <div className="bg-[url('/images/hero/img4.jpg')] bg-cover bg-center h-full opacity-30  hover:scale-125 transition duration-1000 "></div>
                <div className="flex flex-col justify-center gap-2 md:gap-6  absolute top-1/2 -translate-y-1/2 right-4 md:right-0 md:top-28 pl-4 md:pl-8">
                  <h2 className="text-xl md:text-4xl text-red-600 font-black">
                    Process efficiency
                  </h2>
                  <div>
                    <h3 className="text-sm md:text-base text-black">
                      save upto
                    </h3>
                    <h2 className="text-base md:text-3xl text-black">
                      60%
                    </h2>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden h-1/5 md:h-full w-full md:w-1/5 relative">
                <div className="bg-[url('/images/hero/img5.jpg')] bg-cover bg-center h-full rounded-r-[60px] opacity-30 hover:scale-125  transition duration-1000"></div>
                <div className="flex flex-col justify-center gap-2 md:gap-6  absolute top-1/2 -translate-y-1/2 md:top-3/4 pl-6 md:pr-4 md:pl-4">
                  <h2 className="text-xl md:text-4xl text-red-600 font-black">
                    Expert Team
                  </h2>
                  <div>
                    <h3 className="text-sm md:text-base text-black">
                      Led by
                    </h3>
                    <h2 className="text-base md:text-3xl text-black">
                      Experienced platforms
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section-4 */}

      <MainServices />

      {/* section-5 */}

      <MainContact />

      {/* section-6 */}

      <Clients />

      {/* section-7 */}

      <div className="bg-[#f1f1f1]" id="about-us">
        <div className="container mx-auto py-8 md:py-32 flex flex-col md:flex-row justify-evenly gap-10 ">
          <div className="w-[80%] md:w-1/2 ml-10 md:ml-20 flex flex-col justify-center gap-8">
            <div className="bg-white rounded-full h-16 w-16 flex justify-center items-center">
              <Image
                src="/images/hero/comma.png"
                alt="quote"
                width={40}
                height={50}
                className="hover:scale-110"
              />
            </div>
            <h1 className="text-xl lg:text-4xl">
              We are a strong team that brings innovative ideas into production.
            </h1>
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col justify-center items-center gap-2 relative group ">
              <div className="overflow-hidden ">
                <Image
                  src="/images/hero/anchal.png"
                  alt="quote"
                  width={450}
                  height={300}
                  className="hover:scale-110 transition duration-700"
                />
                <div className="absolute bottom-36 md:bottom-40 left-1/2  -translate-x-1/2 w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full bg-black group-hover:bg-[#007ab9] transition duration-700 cursor-pointer  bg-opacity-35 flex items-center justify-center">
                  <a href="https://www.linkedin.com/in/anchal-singhal-248904122/">
                    <Image
                      src="/images/hero/linkedin.png"
                      alt="LinkedIn Icon"
                      width={40}
                      height={40}
                      className="w-[20px] md:w-[40px] h-[20px] md:h-[40px] "
                    />
                  </a>
                </div>
              </div>

              <h1 className="text-xl text-center text-[#d2042d] font-bold">
                Anchal Singhal
              </h1>
              <h2 className="text-[#838080] font-bold ">Co-founder</h2>
              <button
                className="text-white bg-gradient-to-r from-red-600 to-red-900 flex items-center gap-2 px-4 py-1 rounded-3xl font-bold underline"
                onClick={handleOpenModal}
              >
                <span className="text-[12px]">Read more</span>{" "}
                <span className="hidden md:block">
                  <GoArrowRight size={30} />
                </span>
                <span className="block md:hidden">
                  <GoArrowRight size={20} />
                </span>
              </button>
              {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white p-6 rounded-[40px] shadow-lg max-w-[1000px] w-full">
                    <button
                      className="absolute right-1 md:top-4 md:right-64  m-4 text-gray-300 hover:text-gray-900"
                      onClick={handleCloseModal}
                    >
                      <span className="block md:hidden">
                        <IoIosCloseCircleOutline size={40} />
                      </span>
                      <span className="md:block hidden">
                        <IoIosCloseCircleOutline size={50} />
                      </span>
                    </button>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                      <div className="w-full md:w-2/5 flex md:justify-end">
                        <img
                          src="/images/hero/anchal.png"
                          alt="About Us"
                          className="w-[200px] md:w-[300px] h-[250px] md:h-[400px]"
                        />
                      </div>
                      <div className="w-full md:w-3/5">
                        <div className="mb-1 md:mb-3">
                          <h2 className="text-base md:text-3xl font-bold text-[#d2042d] underline">
                            Anchal Singh
                          </h2>
                          <h3 className="text-sm md:text-xl text-[#838080] ">
                            Co-founder
                          </h3>
                        </div>
                        <div className=" text-sm md:text-base mb-2 md:mb-8">
                          10+ years of experience
                        </div>
                        <div className="text-[12px] md:text-base uppercase font-bold ">
                          EDUCATIONAL QUALIFICATION
                        </div>
                        <div>
                          <ul className="list-disc ml-6">
                            <li className=" text-[12px] md:text-base ">
                              Chartered Accountant,{" "}
                              <span className="font-bold ">
                                Institute of Chartered Accountants of India
                              </span>
                            </li>
                            <li className="text-[12px] md:text-base ">
                              Bcom,{" "}
                              <span className="font-bold ">
                                {" "}
                                Delhi University
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex my-2 md:my-6">
                          <Image
                            src="/images/hero/ey.png"
                            alt="LinkedIn"
                            width={150}
                            height={40}
                            className=" w-40 h-12 md:h-24 mx-2 px-14 object-contain rounded-lg"
                            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                          />
                          <Image
                            src="/images/hero/del.png"
                            alt="LinkedIn"
                            width={300}
                            height={40}
                            className=" w-40 h-12 md:h-24 mx-2 px-10 object-contain rounded-lg"
                            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                          />
                          <Image
                            src="/images/hero/pwc.png"
                            alt="LinkedIn"
                            width={150}
                            height={40}
                            className=" w-40 h-12 md:h-24 mx-2 px-14 object-contain rounded-lg"
                            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                          />
                        </div>
                        <div>
                          <ul className="text-[12px] md:text-base mb-4">
                            <li className="font-bold ">
                              SECTORS EXPERTISE
                            </li>
                            <li className="  list-disc ml-4">
                              Fintech
                            </li>
                            <li className="  list-disc ml-4">
                              Tech Start-ups
                            </li>
                            <li className="  list-disc ml-4">
                              Oil & Gas
                            </li>
                            <li className="  list-disc ml-4">
                              Power & Utilities
                            </li>
                            <li className="  list-disc ml-4">
                              Media & Entertainment
                            </li>
                            <li className="  list-disc ml-4">
                              Manufacturing
                            </li>
                            <li className="  list-disc ml-4">
                              Education
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul className="text-[12px] md:text-base">
                            <li className="font-bold  ml-4 ">
                              KEY SKILL
                            </li>
                            <li className="list-disc  ml-4 ">
                              Corporate Finance
                            </li>
                            <li className="list-disc  ml-4 ">
                              Business Valuation
                            </li>
                            <li className="list-disc  ml-4 ">
                              Financial Modelling
                            </li>
                            <li className="list-disc  ml-4 ">
                              Excel Automation
                            </li>
                            <li className="list-disc  ml-4 ">
                              Transaction structuring and Implementation
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className=" flex flex-col justify-center items-center gap-2 relative group">
              <div className="overflow-hidden">
                <Image
                  src="/images/hero/gujrani.png"
                  alt="quote"
                  width={450}
                  height={300}
                  className="hover:scale-110 transition duration-700"
                />
                <div className="absolute bottom-36 md:bottom-40 left-1/2  -translate-x-1/2 w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full bg-black group-hover:bg-[#007ab9] transition duration-700 cursor-pointer bg-opacity-35 flex items-center justify-center">
                  <a href="https://www.linkedin.com/in/gujrani/">
                    <Image
                      src="/images/hero/linkedin.png"
                      alt="LinkedIn Icon"
                      width={40}
                      height={40}
                      className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]"
                    />
                  </a>
                </div>
              </div>
              <h1 className="w-2/3 text-xl text-center text-[#d2042d] font-bold">
                Anant Gujrani
              </h1>
              <h2 className="text-[#838080] font-bold">Co-founder</h2>
              <button
                className="text-white bg-gradient-to-r from-red-600 to-red-900 flex items-center gap-2 px-4 py-1 rounded-3xl font-bold underline"
                onClick={handleOpenModal2}
              >
                <span className="text-[12px]">Read more</span>{" "}
                <span className="hidden md:block">
                  <GoArrowRight size={30} />
                </span>
                <span className="block md:hidden">
                  <GoArrowRight size={20} />
                </span>
              </button>
              {isOpen2 && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white p-6 rounded-[40px] shadow-lg max-w-[1000px] w-full">
                    <button
                      className="absolute md: right-1 md:top-4 md:right-64  m-4 text-gray-300 hover:text-gray-900"
                      onClick={handleCloseModal2}
                    >
                      <span className="block md:hidden">
                        <IoIosCloseCircleOutline size={40} />
                      </span>
                      <span className="md:block hidden">
                        <IoIosCloseCircleOutline size={50} />
                      </span>
                    </button>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                      <div className="w-full md:w-2/5 flex md:justify-end">
                        <img
                          src="/images/hero/gujrani.png"
                          alt="About Us"
                          className="w-[200px] md:w-[300px] h-[250px] md:h-[400px]"
                        />
                      </div>
                      <div className="w-full md:w-3/5">
                        <div className="mb-1 md:mb-3">
                          <h2 className="text-xl md:text-3xl font-bold text-[#d2042d] underline">
                            Anant Gujrani
                          </h2>
                          <h3 className="text-base md:text-xl text-[#838080] ">
                            Co-founder
                          </h3>
                        </div>
                        <div className=" text-[12px] md:text-base mb-2 md:mb-8">
                          Known for bringing efficiency through process
                          automation
                        </div>
                        <div className="text-[12px] md:text-base uppercase  font-bold">
                          EDUCATIONAL QUALIFICATION
                        </div>
                        <div>
                          <ul className="list-disc ml-6">
                            <li className="text-[12px] md:text-base ">
                              Chartered Accountant,{" "}
                              <span className="font-bold ">
                                Institute of Chartered Accountants of India
                              </span>
                            </li>
                            <li className="text-[12px] md:text-base ">
                              Bcom,{" "}
                              <span className="font-bold ">
                                {" "}
                                Delhi University
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex my-2 md:my-6">
                          <Image
                            src="/images/hero/shaw.png"
                            alt="LinkedIn"
                            width={150}
                            height={40}
                            className=" w-40 h-12 md:h-24 mx-2 px-8 object-contain rounded-lg"
                            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                          />
                          <Image
                            src="/images/hero/del.png"
                            alt="LinkedIn"
                            width={300}
                            height={40}
                            className=" w-40 h-12 md:h-24 mx-2 px-10 object-contain rounded-lg"
                            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                          />
                          <Image
                            src="/images/hero/singhi.png"
                            alt="LinkedIn"
                            width={250}
                            height={40}
                            className=" w-40 h-12 md:h-24 mx-2 px-8 object-contain rounded-lg"
                            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                          />
                        </div>
                        <div>
                          <ul className="text-[12px] md:text-base mb-2 md:mb-4">
                            <li className="font-bold ">
                              SECTORS EXPERTISE
                            </li>
                            <li className="  list-disc ml-4">
                              Hedge Fund
                            </li>
                            <li className="  list-disc ml-4">
                              Non — ferrous metal
                            </li>
                            <li className="  list-disc ml-4">
                              Telecommunication
                            </li>
                            <li className="  list-disc ml-4">
                              Fertilizer
                            </li>
                            <li className="  list-disc ml-4">FMCG</li>
                            <li className="  list-disc ml-4">
                              Robotic
                            </li>
                            <li className="  list-disc ml-4">
                              Fintech
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul className="text-[12px] md:text-base">
                            <li className="font-bold  ">KEY SKILL</li>
                            <li className="list-disc  ml-4 ">
                              Accounting
                            </li>
                            <li className="list-disc  ml-4 ">
                              Advance Excel
                            </li>
                            <li className="list-disc  ml-4 ">
                              Data Analysis/ Visualization
                            </li>
                            <li className="list-disc  ml-4 ">
                              Financial Reporting
                            </li>
                            <li className="list-disc  ml-4 ">
                              Data/Process Automation
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* section-8 */}

      <Portfolio />
    </div>
  );
}
