import Head from "next/head";
import { motion } from "framer-motion";
import services from "@/data/services";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import WhatsappButton from "@/components/whatapp";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Services = () => {

  return (
    <>
      <Head>
        <title> Our Services | Ease My Process</title>
        <meta name="description" content="Services page" />
      </Head>
      <Navbar />
      <WhatsappButton />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="text-3xl md:text-6xl  font-extrabold title-font mb-2 text-gray-900">
                OUR SERVICES
              </h1>
              <div className="h-1 w-20 md:w-40 bg-[#D20420]"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              A complete range of services to help you with your business. Pick
              a service from below or search for a specific service. Click on a
              service to know more.
            </p>
          </motion.div>
          <div className="flex flex-wrap -m-4">
            <HoverEffect items={services} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  }, {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },]