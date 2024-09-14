import Footer from "@/components/ui/footer";
import { useState } from 'react';
import Navbar from "@/components/ui/navbar";
import WhatsappButton from "@/components/whatapp";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function contact({}: Props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto URL
    const mailtoUrl = `mailto:anmolruhella23@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
    )}`;

    // Open the mail client
    window.location.href = mailtoUrl;

    // Optionally, clear the form fields
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };
  return (
    <div>
      <Head>
        <title> Contact | Ease My Process</title>
      </Head>
      <Navbar />
      <WhatsappButton />
      <section className="text-gray-600 body-font relative">
     
        <div className="container px-5 pt-24 mx-auto">
          <motion.div  initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="flex flex-col text-left w-full">
            <h1 className="text-4xl md:text-6xl font-extrabold title-font mb-4 text-gray-900 tracking-widest">
              CONTACT US
            </h1>
            <div className="h-1 w-20 md:w-40 bg-[#D20420]"></div>

            <p className="lg:w-2/3  leading-relaxed text-base md:text-lg">
              Whether you have a question, some feedback, or just want to say
              hello, we'd love to hear from you. Fill out the form below and
              we'll get back to you as soon as possible. Alternatively, you can
              call us or send us an email.
            </p>
          </motion.div>
        </div>
         {/* <motion.div
          initial={{ opacity: 0, y: -70, skewY: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full absolute top-[30%] tranlate-y-52 shadow-2xl bg-[#D20420] -z-10 left-0 h-[300px]"
        >
          {" "}
        </motion.div> */}
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap relative">

       

        <div className=" w-full lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:ml-10 p-10 flex md:hidden items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?q=A1%20Tower,%20Sohna%20Road%20Level%209,%20Spaze%20i-Tech%20Park,%20Sector%2049,%20Gurugram,%20Haryana&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            {/* <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore soluta voluptatibus expedita.
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-purple-500 leading-relaxed">example@email.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div> */}
          </div>
          <motion.div  initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }} className="lg:w-1/3 md:w-1/2 bg-white border-2 shadow-lg border-[#D20420] p-4 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            {/* <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2> */}
            <p className="leading-relaxed mb-5 text-gray-600">
              Please fill this form with accurate details to ensure there's no discrepancies when we reach out to you.
            </p>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
             />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Contact Number</label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Subject <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-white rounded border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Message <span className="text-red-500">*</span></label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="text-white hover:bg-rose-500 border-0 py-2 px-6 focus:outline-none transition bg-[#D20420] rounded text-lg">
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">
           Fields marked with <span className="text-red-500">*</span> are mandatory
            </p>
          </motion.div>
          <div className="hidden lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:ml-10 p-10 sm:flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?q=A1%20Tower,%20Sohna%20Road%20Level%209,%20Spaze%20i-Tech%20Park,%20Sector%2049,%20Gurugram,%20Haryana&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            {/* <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore soluta voluptatibus expedita.
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-purple-500 leading-relaxed">example@email.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
