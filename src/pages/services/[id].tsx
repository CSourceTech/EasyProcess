import Head from "next/head";
import services from "@/data/services";
import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { motion } from "framer-motion";

export default function ServicePage({ service }: { service: any }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const displayDescription = showFullDescription
    ? service.desc
    : service.desc.substring(0, 300);

  return (
    <>
      <Head>
        <title>{`${service.title} | Ease My Process`}</title>
      </Head>
      <Navbar />
      <WhatsappButton />
      <main className="w-full">
        <section className="md:w-11/12 mx-auto py-12 md:p-20 relative">
          <div className="relative px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full absolute shadow-xl bg-[#D20420] -z-20 left-0 h-full"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-12 py-4 md:py-6"
            >
              <div className="flex flex-col justify-center space-y-4 ">
                <div className="space-y-2">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-3xl uppercase text-gray-100 font-extrabold tracking-wide md:text-5xl text-left"
                  >
                    {service.title}
                  </motion.h1>
                  <div className="h-1 w-20 md:w-40 bg-rose-300"></div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-gray-300 max-w-xl md:text-lg text-left"
                  >
                    {displayDescription}
                    {service.desc.length > 300 && (
                      <span
                        onClick={toggleDescription}
                        className="text-gray-300 text-xs"
                      >
                        {showFullDescription ? " Read less" : " ... Read more"}
                      </span>
                    )}
                  </motion.p>
                </div>
              </div>
              <motion.img
                initial={{ opacity: 0, x: 50 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                alt="Service Picture"
                src={service.image}
                className="w-full h-auto max-w-lg outline"
              />
            </motion.div>
          </div>
        </section>

        {service.example ? (
          <section className="mb-12">
            <h2 className="text-3xl font-bold tracking-wide md:text-5xl text-center py-3">
              Examples
            </h2>
            <div className="py-2">{/* <GraphicsCarousel /> */}</div>
          </section>
        ) : null}

        {service.why_us ? (
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2 flex flex-col gap-3">
                  <h2 className="text-3xl font-bold tracking-tighter  sm:text-5xl mb-2">
                    Why Us?
                  </h2>
                  {/* <div className="flex flex-wrap w-5/6 mx-auto gap-4 justify-center">
                    {Object.entries(
                      service.why_us as { [key: string]: string }
                    ).map(([title, description]) => (
                      <div
                        key={title}
                        className="flex flex-col gap-4 w-80 items-center justify-center min-h-40 py-3 px-2 rounded-2xl hover:bg-gray-900/70 hover:scale-95 transition-all"
                      >
                        <h3 className="text-xl font-bold text-gr">{title}</h3>
                        <p className="text-gray-300">{description}</p>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {service.type_of_service && (
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2 flex flex-col gap-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-2">
                    Types of {service.title}
                  </h2>
                  <div className="flex flex-wrap mx-auto gap-4 justify-center">
                   
                    {Object.entries(
                      service.type_of_service as { [key: string]: string }
                    ).map(([title, description]) => (
                      <div
                        key={title}
                        className="gap-4 w-80 items-center justify-center min-h-40 py-3 px-2 outline-rose-500 outline hover:shadow-md transition-all"
                      >
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                          className="h-64 w-full object-cover sm:h-52 md:h-80"
                        />

                        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                          {title}
                        </h3>

                        <p className="mt-2 max-w-sm text-gray-700">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="overflow-hidden bg-[url(https://cdn.pixabay.com/photo/2016/08/06/17/34/office-1574717_1280.jpg)] bg-cover bg-no-repeat">
          <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                Need the best to help you out?
              </h2>

              <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                We can make it easy for your business to succeed. It only takes
                a few seconds to get started, and we're here to guide you every
                step of the way. What are you waiting for?
              </p>

              <div className="mt-4 sm:mt-8">
                <a
                  href="/contact"
                  className="inline-block rounded-full bg-[#D20420] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#D20420]/90 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Book a free consultation now!
                </a>
              </div>
            </div>
          </div>
        </section>

        {service.process ? (
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2 flex flex-col gap-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-2">
                    Process
                  </h2>
                  <div className="flex flex-wrap w-5/6 mx-auto gap-4 justify-center">
                    {Object.entries(
                      service.process as { [key: string]: string }
                    ).map(([title, description]) => (
                      <div
                        key={title}
                        className="flex flex-col gap-4 w-80 items-center justify-center min-h-40 py-3 px-2 outline-rose-500 outline rounded-2xl hover:bg-gray-900/70 hover:scale-95 transition-all"
                      >
                        <h3 className="text-xl font-bold text-gr">{title}</h3>
                        <p className="text-gray-300">{description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {service.faq ? (
          <section className="w-full py-12 md:py-24">
            <div className="px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="space-y-2 flex flex-col gap-3">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="px-5 py-24"
                  >
                    <div className="flex flex-col text-left w-full">
                      <h1 className="text-4xl md:text-5xl font-extrabold title-font mb-4 text-gray-900 tracking-widest">
                        Frequently Asked Questions
                      </h1>
                      <div className="h-1 w-20 md:w-40 bg-[#D20420]"></div>

                      <p className="lg:w-2/3  leading-relaxed text-base md:text-lg">
                        We know you have questions, we have answers. If you
                        don't find what you're looking for, feel free to reach
                        out to us.
                      </p>
                    </div>
                  </motion.div>
                  {/* <div className="h-1 w-20 md:w-40 bg-[#D20420]"></div> */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-wrap w-5/6 mx-auto gap-4 justify-center"
                  >
                    {Object.entries(
                      service.faq as { [key: string]: string }
                    ).map(([title, description]) => (
                      <div className="space-y-4 w-full mx-auto">
                        <details
                          key={title}
                          className="group border-s-4 border-rose-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                        >
                          <summary className="flex cursor-pointer items-center text-left justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900">
                              {title}
                            </h2>

                            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </summary>

                          <p className="mt-4 leading-relaxed text-gray-700">
                            {description}
                          </p>
                        </details>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="py-6 bg-[#D20420] text-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-none text-center">
              It's Time for You to Take the Next Step!
            </h1>
            <p className="pt-2 pb-8 text-lg md:text-xl font-medium text-center">
              Level up on your journey and let us help you get there. It only
              takes a few seconds to get started, and we're here to guide you
              every step of the way. What are you waiting for?
            </p>
            <motion.a
              href="/contact"
              className="px-8 py-3 text-lg font-semibold rounded bg-gray-200 text-[#D20420]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Now!
            </motion.a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { GetServerSidePropsContext } from "next";
import WhatsappButton from "@/components/whatapp";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const { id } = params as { id: string };

  const service = services.find((service) => service.key === id);

  if (!service) {
    return {
      notFound: true,
    };
  }

  // Convert logo to a JSON-serializable data type (string)
  const serviceWithSerializableLogo = {
    ...service,
    logo: service.logo.toString(), // Convert symbol to string
  };

  return {
    props: {
      service: serviceWithSerializableLogo,
    },
  };
}
