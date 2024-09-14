import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Testimonials({}: Props) {
  const Testimonials = [
    {
      id: 1,
      task: "Excel Expert for Building Finance-Analysis & Modeling",
      description:
        "Ease My Process team is a pleasure to work with. They are very professional and responsive. Every member is very knowledgeable and hands on Excel advanced functions, which can help any look any complicated project looks easier. would highly recommend this firm.",
    },
    {
      id: 2,
      task: "QBO data need to be synced from implementation",
      description:
        "Ease my Process has helped me in the past several months with my ERP implementation and data conversion. I will be using them as my go-to from here on.",
    },
    {
      id: 3,
      task: "Price Sheet Auditing and Formatting",
      description:
        "Easy My Process' team was an absolute pleasure to work with. They understood fully what i needed, and went above and beyond to provide me the solution. Extremely pleased and highly recommended!",
    },
    {
      id: 4,
      task: "Excel Expert for Building Finance-Analysis & Modeling of Data",
      description:
        "The team is highly skilled finance and excel expert, in addition they have good patience to listen to problems and come up with multiple ways to solve the problems. I have thoroughly enjoyed working with them, looking forward to work with them in future!",
    },
    {
      id: 5,
      task: "LinkedIn",
      description:
        "Finance professionals with a great hold on technicals, extreme inquisitiveness, amazing acumen and drive, Ease My Process team definitely turns out to be a delight to work with, and at no moment would one feel uncomfortable with them. They're highly cooperative and approachable and always ready to help!",
    },
    {
      id: 6,
      task: "LinkedIn",
      description:
        "I have worked closely with Ease My Process' team and can vouch they are very hard working and keen learners. The team used to approach problems very calmly, analytically and methodically. They got a questioning mind which fuels their learning and growth. They are very approachable and friendly people.",
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <motion.div
          initial={{ opacity: 0, y: -70, skewY: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full absolute top-[30%] tranlate-y-52 shadow-2xl bg-[#D20420] z-10 left-0 h-[300px]"
        >
          {" "}
        </motion.div>
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

          <div className="flex flex-wrap -m-4 max-w-screen-xl mx-auto">
            {Testimonials.map((data, id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
                className="p-4 md:w-1/2 w-full z-10"
              >
                <div className="h-full bg-white border border-[#D20420] hover:shadow-lg transition p-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-[#D20420] mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">{data.description}</p>

                  <a className="inline-flex items-center">
                    {/* <img
                      alt="testimonial"
                      src="https://dummyimage.com/106x106"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    /> */}
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-[#D20420]">
                        ~ {data.task}
                      </span>
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
