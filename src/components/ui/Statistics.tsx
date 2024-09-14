import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { MdSentimentSatisfied } from "react-icons/md";
import { motion } from "framer-motion";

type Props = {};

function Statistics({}: Props) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="px-5 py-24 mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{once: true}} className="px-5 flex flex-col text-left w-full">
              
            <h1 className="uppercase text-4xl md:text-6xl font-extrabold title-font mb-4 text-gray-900 tracking-widest">
              Statistics
            </h1>
            <div className="h-1 w-20 md:w-40 bg-[#D20420]"></div>

            <p className="lg:w-2/3  leading-relaxed text-base md:text-xl">
            Don't Be Swayed by Words, Be Impressed by Facts: Our Stats Tell the Story
            </p>
          </motion.div>
        </div>
        <div className="flex flex-wrap justify-center -m-4 pb-24 text-center">
        <motion.div
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <div className="border-2 border-rose-200 mx-4 px-4 py-6 rounded-lg shadow">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="text-[#D20420] w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                180+
              </h2>
              <p className="leading-relaxed">Clients</p>
            </div>
          </motion.div>
          <motion.div
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="border-2 border-rose-200 shadow mx-4 px-4 py-6 rounded-lg">
              <MdSentimentSatisfied className="text-[#D20420] w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                100%
              </h2>
              <p className="leading-relaxed">Client Satisfaction</p>
            </div>
          </motion.div>
          <motion.div
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <div className="border-2 border-rose-200 shadow mx-4 px-4 py-6 rounded-lg">
              <FaRegClock className="text-[#D20420] w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                40,000+
              </h2>
              <p className="leading-relaxed">Work Hours</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Statistics;
