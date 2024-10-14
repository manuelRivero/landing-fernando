import React from "react";
import flower8 from "./../../../images/icons/flower-8.svg";
import Collapse from "../../shared/collapse";

const collapseTexts: { title: string; description: string }[] = [
  {
    title: "User-Centric UX Flow",
    description:
      "Understand vision, brand, and goals. Analyze target audience and align coding and design strategies for a tailored plan.",
  },
  { title: "UI RESEARCH And Development", description: "" },
  { title: "ANIMATIONS", description: "" },
  { title: "Integration and FUNCTIONALITIES", description: "" },
];

export default function Process() {
  return (
    <div className="bg-white">
      <div className="py-16 md:py-32 px-8 md:px-32 container">
        <h1 className="text-customBlue-600 text-center  font-bold text-[45px] md:text-3xl uppercase leading-tight lg:leading-customLineHeight">
          Process
        </h1>
        <div className="flex flex-col divide-y divide-customBlue-600 border-b border-b-customBlue-600 mb-14">
          {collapseTexts.map((item, index: number) => (
            <Collapse
              key={`${item.title}-${index}`}
              title={item.title}
              textColor="customBlue-600"
              icon={flower8}
              plusColor="#2B0B57"
              alt={"flower-8"}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
