import React from "react";
import flower8 from "./../../../images/icons/flower-8.svg";
import Collapse from "../../shared/collapse";

const collapseTexts: { title: string; description: string }[] = [
  {
    title: "USER-CENTRIC UX FLOW",
    description:
      "We design intuitive user journeys that prioritize ease of navigation, guiding visitors smoothly toward your website’s goals while enhancing user satisfaction and boosting conversions.",
  },
  {
    title: "UI RESEARCH AND DEVELOPMENT",
    description:
      "We develop visually engaging and highly functional interfaces based on in-depth research, ensuring that every design choice aligns with your business objectives for a seamless user experience.",
  },
  {
    title: "ANIMATIONS",
    description:
      "Our animations bring your site to life, subtly enhancing the user experience and engagement without compromising speed or functionality.",
  },
  {
    title: "INTEGRATION AND FUNCTIONALITIES",
    description:
      "We integrate advanced features and APIs to ensure your site is both visually appealing and fully functional, offering everything from payment systems to customized page experiences.",
  },
];

export default function Process() {
  return (
    <div className="bg-white">
      <div className="py-16 md:py-32 px-8 md:px-32 container">
        <h1 className="text-customBlue-600 text-center font-inter font-bold text-[45px] md:text-3xl uppercase leading-tight lg:leading-customLineHeight">
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
