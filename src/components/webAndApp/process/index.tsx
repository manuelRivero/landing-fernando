import React from "react";
import swiperContainerImg from "./../../../images/content-and-growth/swiper-container.png";
import flower8 from "./../../../images/icons/flower-8.svg";
import plusBlue from "./../../../images/icons/plus-blue.svg";
import Collapse from "../../shared/collapse";

interface Props {
  close: () => void;
}

const collapseTexts: { title: string; description: string }[] = [
  {
    title: "HAvE THE BEST CONTENT",
    description:
      "We delve deep to decipher how we can minimize your customer acquisition cost and devise optimal strategies to effectively communicate your business's core value to your ideal target audience.",
  },
  { title: "Focus on Elementary Metrics", description: "" },
  { title: "A REAL Funnel Strategy", description: "" },
  { title: "NOT HAVING TO DO EVERYTHING MANUAL", description: "" },
  { title: "ADVERTISMENT THAT WORKS", description: "" },
  { title: "DO EXPERIMENTATION", description: "" },
];

export default function Process({ close }: Props) {
  return (
    <div className="bg-white">
      <div className="pt-32 lg:pt-52 pb-32 lg:pb-40 px-8 md:px-32 container">
        <h1 className="text-customBlue-600 text-center lg:text-left font-inter font-black text-2xl md:text-3xl uppercase leading-tight lg:leading-customLineHeight">
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
