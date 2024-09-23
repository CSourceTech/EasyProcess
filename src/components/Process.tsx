import Image from "next/image";
import React from "react";

const Process = () => {
  const sectionsData = [
    {
      heading: "Market & Competitor Analysis",
      description:
        "We delve into your industry and competitors, uncovering trends and opportunities to position your business for success.",
    },
    {
      heading: "Initial Consultation & Business Model Understanding",
      description:
        "We get to know your company, its vision, and your target audience to tailor the pitch deck message effectively.",
    },
    {
      heading: "Financial Modeling",
      description:
        "We create data-driven financial projections that showcase the potential profitability and growth trajectory of your business.",
    },
    {
      heading: "Storyboarding & Content Preparation",
      description:
        "We craft a compelling narrative with a clear structure, highlighting your problem, solution, market opportunity, and competitive edge.",
    },
    {
      heading: "Graphic Design",
      description:
        "We transform your content into a visually engaging presentation with impactful visuals, data visualizations, and a consistent design aesthetic.",
    },
  ];
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#d2042d",
          }}
        >
          Process
        </div>
        <div className="hidden md:flex justify-evenly w-full relative my-10">
          <div className="w-[28%] flex flex-col gap-16 mt-10">
            <div className="w-[25%] flex flex-col gap-4 absolute left-28  top-[60px]">
              <h1 className="text-[#d2042d] text-base font-bold">
                Market & Competitor Analysis
              </h1>
              <p className="text-sm text-justify ">
                We delve into your industry and competitors, uncovering trends
                and opportunities to position your business for success.
              </p>
            </div>
            <div className="w-[27%] flex flex-col gap-4 absolute left-10  top-[260px]">
              <h1 className="text-[#d2042d] text-base font-bold">
                Initial Consultation & Business Model Understanding
              </h1>
              <p className="text-sm text-justify">
                We get to know your company, its vision, and your target
                audience to tailor the pitch deck message effectively.
              </p>
            </div>
            <div className="w-[25%] flex flex-col gap-4 absolute left-48 top-[460px]">
              <h1 className="text-[#d2042d] text-base font-bold">
                Financial Modeling
              </h1>
              <p className="text-sm text-justify">
                We create data-driven financial projections that showcase the
                potential profitability and growth trajectory of your business.
              </p>
            </div>
          </div>
          <div className="w-[35%]">
            <Image
              src="/process.png"
              alt="Process"
              width={2000}
              height={2000}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="w-[28%] flex flex-col gap-16 mt-10">
            <div className="w-[25%] flex flex-col gap-4 absolute right-20 top-[60px] ">
              <h1 className="text-[#d2042d] text-base font-bold">
                Storyboarding & Content Preparation
              </h1>
              <p className="text-sm text-justify ">
                We craft a compelling narrative with a clear structure,
                highlighting your problem, solution, market opportunity, and
                competitive edge.
              </p>
            </div>
            <div className="w-[25%] flex flex-col gap-4 absolute right-14  top-[260px]">
              <h1 className="text-[#d2042d] text-base font-bold">
                Market & Competitor Analysis
              </h1>
              <p className="text-sm text-justify">
                We delve into your industry and competitors, uncovering trends
                and opportunities to position your business for success.
              </p>
            </div>
            <div className="w-[25%] flex flex-col gap-4 absolute right-48 top-[460px] ">
              <h1 className="text-[#d2042d] text-base font-bold">
                Graphic Design
              </h1>
              <p className="text-sm text-justify">
                We transform your content into a visually engaging presentation
                with impactful visuals, data visualizations, and a consistent
                design aesthetic.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div style={{ padding: "10px" }} className="text-center">
          {sectionsData.map((section, index) => (
            <div key={index} style={{ marginBottom: "30px" }}>
              <h2 className="text-[#d2042d] font-bold text-base">
                {section.heading}
              </h2>
              <p className="text-sm font-semibold">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Process;
