import Image from "next/image";
import React from "react";

const Process = () => {
  const sectionsData = [
    {
      heading: "Market & Competitor Analysis",
      description:
        "We delve into your industry and competitors, uncovering trends and opportunities to position your business for success."
    },
    {
      heading: "Initial Consultation & Business Model Understanding",
      description:
        "We get to know your company, its vision, and your target audience to tailor the pitch deck message effectively."
    },
    {
      heading: "Financial Modeling",
      description:
        "We create data-driven financial projections that showcase the potential profitability and growth trajectory of your business."
    },
    {
      heading: "Storyboarding & Content Preparation",
      description:
        "We craft a compelling narrative with a clear structure, highlighting your problem, solution, market opportunity, and competitive edge."
    },
    {
      heading: "Graphic Design",
      description:
        "We transform your content into a visually engaging presentation with impactful visuals, data visualizations, and a consistent design aesthetic."
    }
  ];
  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          gap: "2.5rem",
          padding: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "3rem",
            fontWeight: "bold",
            color:"#d2042d"
          }}
        >
          Process
        </div>
        <div className="hidden md:block">
          <Image
            src="/main.gif"
            alt="Process"
            width={2000}
            height={2000}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="md:hidden">
        <div style={{ padding: "10px" }} className="text-center">
      {sectionsData.map((section, index) => (
        <div key={index} style={{ marginBottom: "30px" }}>
          <h2 className="text-[#d2042d] font-bold text-base">{section.heading}</h2>
          <p className="text-sm font-semibold">{section.description}</p>
        </div>
      ))}
    </div>
        </div>
      </div>
    </>
  );
};

export default Process;
