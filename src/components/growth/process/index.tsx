import React from "react";
import flower8 from "./../../../images/icons/flower-8.svg";
import Collapse from "../../shared/collapse";

const collapseTexts: { title: string; description: string }[] = [
  {
    title: "HAVE THE BEST CONTENT",
    description:
      "Craft compelling, high-quality content that not only engages your audience but also aligns with your brand’s goals and drives meaningful interactions.",
  },
  {
    title: "FOCUS ON ELEMENTARY METRICS",
    description:
      "Monitor and optimize the essential metrics that directly impact your growth, ensuring you stay focused on what truly matters for your business success.",
  },
  {
    title: "A REAL FUNNEL STRATEGY",
    description:
      "Develop a well-structured funnel that nurtures leads through every stage, converting prospects into loyal customers with a seamless, efficient approach.",
  },
  {
    title: "NOT HAVING TO DO EVERYTHING MANUAL",
    description:
      "Take advantage of automation tools that handle repetitive tasks, giving you more time to focus on strategy and growth.",
  },
  {
    title: "ADVERTISMENT THAT WORKS",
    description:
      "Create targeted, high-performance ad campaigns that reach the right audience, deliver results, and maximize your return on investment.",
  },
  {
    title: "DO EXPERIMENTATION",
    description:
      "Consistently experiment with new strategies, testing different approaches to find what works best for your brand and audience.",
  },
];

export default function Process() {
  return (
    <div className="bg-white">
      <div className="pt-16 lg:pt-52 pb-16 md:pb-40 px-8 md:px-32 container">
        <h1 className="text-customBlue-600 text-center lg:text-left font-inter font-bold text-[45px] md:text-3xl uppercase leading-tight lg:leading-customLineHeight">
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
