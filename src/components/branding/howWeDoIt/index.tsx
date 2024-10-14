import React from "react";
import flower8 from "./../../../images/icons/flower-8-black.svg";
import Collapse from "../../shared/collapse";

const collapseTexts: { title: string; description: string }[] = [
  {
    title: "WhatsApp Interviews",
    description:
      "We conduct effective interviews with individuals in your segment using the platform they already know and use but know with AI.",
  },
  { title: "Interactive Calls", description: "" },
  { title: "Video Calls with Facial Detection", description: "" },
];

export default function HowWeDoIt() {
  return (
    <div className="bg-customPink-500">
      <div className="py-16 md:py-32 px-8 md:px-32 container">
        <h1 className="text-white text-center font-inter font-bold text-2xl md:text-3xl uppercase leading-tight lg:leading-customLineHeight">
          How we do it?
        </h1>
        <div className="flex flex-col divide-y divide-black border-b border-b-black mb-14">
          {collapseTexts.map((item, index: number) => (
            <Collapse
              key={`${item.title}-${index}`}
              title={item.title}
              textColor="white"
              icon={flower8}
              plusColor="#000000"
              alt={"flower-8"}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
