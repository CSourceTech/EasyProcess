import React from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";
import Image from "next/image";

type WhyUsProps = {
  heading: string;
  subheading: string;
  imageSrc: string;
  firstTitle?: string;
  firstDescription?: string;
  secondTitle?: string;
  secondDescription?: string;
  thirdTitle?: string;
  thirdDescription?: string;
  fourthTitle?: string;
  fourthDescription?: string;
  fifthTitle?: string;
  fifthDescription?: string;
};

function WhyUs({
  heading,
  subheading,
  imageSrc,
  firstTitle,
  firstDescription,
  secondTitle,
  secondDescription,
  thirdTitle,
  thirdDescription,
  fourthTitle,
  fourthDescription,
  fifthTitle,
  fifthDescription
}: WhyUsProps) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="px-5 pt-16 md:pt-20 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-5 flex flex-col text-left w-full"
          >
            <div className="flex justify-center w-full">
            <Heading>{heading}</Heading>
            </div>
           

            <p className="leading-relaxed text-lg mt-3 max-w-3xl mx-auto text-center font-bold">
              {subheading}
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-10">
          <div className="flex-1 text-center p-4">
            <p className="font-bold text-lg">{firstTitle}</p>
            <p className="mt-2">{firstDescription}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center items-center p-4"
          >
            <Image
              src={imageSrc}
              width={400}
              height={400}
              alt="Why Us"
              className="w-[500px]"
            />
          </motion.div>

          <div className="flex-1 text-center p-4">
            <p className="font-bold text-lg">{secondTitle}</p>
            <p className="mt-2">{secondDescription}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:mb-10">

        <div className="text-center p-4 md:mt-10">
          <p className="font-bold text-lg">{thirdTitle}</p>
          <p className="mt-2">{thirdDescription}</p>
        </div>
        <div className="text-center p-4 md:mt-10">
          <p className="font-bold text-lg">{fourthTitle}</p>
          <p className="mt-2">{fourthDescription}</p>
        </div>
        <div className="text-center p-4 md:mt-10">
          <p className="font-bold text-lg">{fifthTitle}</p>
          <p className="mt-2">{fifthDescription}</p>
        </div>
        </div>
      </section>
    </div>
  );
}

export default WhyUs;
