import React from "react";
import swiperContainerImg from "./../../../images/content-and-growth/swiper-container.png";
import flower8 from "./../../../images/icons/flower-8.svg";
import plusBlue from "./../../../images/icons/plus-blue.svg";
import Collapse from "../../shared/collapse";

const collapseTexts: string[] = [
  "HAvE THE BEST CONTENT",
  "Focus on Elementary Metrics",
  "A REAL Funnel Strategy",
  "NOT HAVING TO DO EVERYTHING MANUAL",
  "ADVERTISMENT THAT WORKS",
  "DO EXPERIMENTATION",
];

export default function Process() {
  return (
    <div className="bg-white">
      <div className="pt-32 lg:pt-52 pb-32 lg:pb-40 px-8 md:px-32 container">
        <h1 className="text-customBlue-600 text-center lg:text-left font-inter font-black text-2xl md:text-3xl uppercase leading-tight lg:leading-customLineHeight">
          Process
        </h1>
        <div className="flex flex-col divide-y divide-customBlue-600 border-b border-b-customBlue-600 mb-14">
          {collapseTexts.map((text: string, index: number) => (
            <Collapse
              key={`${text}-${index}`}
              title={text}
              textColor="customBlue-600"
              icon={flower8}
              plusColor="#2B0B57"
              alt={"flower-8"}
              description={""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
