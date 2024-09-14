import React from "react";
import { motion } from "framer-motion";
import WhatsappButton from "@/components/whatapp";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Head from "next/head";
type Props = {};

function security({}: Props) {
  return (
    <div>
      <Head>
        <title>Data Security | Ease My Process</title>
      </Head>
      <Navbar/>
      <section className="text-gray-600 body-font relative">
        <WhatsappButton />
        {/* <motion.div
          initial={{ opacity: 0, y: -70, skewY: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full absolute top-[30%] tranlate-y-52 shadow-2xl bg-[#D20420] z-10 left-0 h-[300px]"
        >
          {" "}
        </motion.div> */}
        <div className="px-5 py-24 mx-auto">
          <div className="px-5 pb-24 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col text-left w-full"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold title-font mb-4 text-gray-900 tracking-widest">
                TESTIMONIALS
              </h1>
              <div className="h-1 w-20 md:w-40 bg-[#D20420]"></div>

              <p className="lg:w-2/3  leading-relaxed text-base md:text-lg">
                Whether you have a question, some feedback, or just want to say
                hello, we'd love to hear from you. Fill out the form below and
                we'll get back to you as soon as possible. Alternatively, you
                can call us or send us an email.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default security;
