import { useEffect, useRef, useState } from "react";
import { InlineWidget, PopupButton } from "react-calendly";
import { motion } from "framer-motion";
const Calendly = () => {
  const rootElementRef = useRef<HTMLDivElement>(null);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const rootElement = rootElementRef.current;
    if (rootElement) {
      // Ensure that react-calendly is rendered client-side
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      rootElement.appendChild(script);

      return () => {
        rootElement.removeChild(script);
      };
    }
  }, []);

  useEffect(() => {
    setRootElement(rootElementRef.current);
  }, [rootElementRef.current]);

  return (
    <div ref={rootElementRef}>
      <section className="text-gray-600 body-font z-40 relative">
        <div className=" pb-24 md:pb-4 px-5 mx-auto">
          <div className="px-5 mx-auto">
            <div className="flex flex-col text-left w-full">
              <h1 className="text-4xl md:text-6xl font-extrabold title-font mb-4 text-gray-900 tracking-widest">
                TALK TO US
              </h1>
              <div className="h-1 w-20 md:w-40 bg-[#D20420]"></div>

              <p className="lg:w-2/3  leading-relaxed text-base md:text-lg">
                Feel free to schedule a quick 15-minute phone call with us!
                Whether you have questions, need assistance, or just want to
                chat, we're here to help. Book your call below and we'll be in
                touch soon!
              </p>
            </div>
          </div>
        </div>

        {/* {rootElement && (
          <PopupButton
            url="https://calendly.com/easemyprocess/15-min-meeting"
            rootElement={rootElement}
            text="Click here to schedule!"
          />
        )} */}
        <div className="max-w-full mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: -70, skewY: -12 }}
            whileInView={{ opacity: 1, y: 0,}}
            transition={{ duration: 0.8, }}
            className="w-full absolute top-[30%] tranlate-y-52 shadow-2xl bg-[#D20420] -z-10 left-0 h-[300px] -skew-y-12"
          >
            {" "}
          </motion.div>
          <InlineWidget
            styles={{
              height: "780px",
            }}
            url="https://calendly.com/easemyprocess/15-min-meeting"
          />
        </div>
      </section>
    </div>
  );
};

export default Calendly;
