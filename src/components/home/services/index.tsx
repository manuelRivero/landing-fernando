import React from "react";
import Collapse from "../../shared/collapse";
import lottoIcon from "./../../../images/icons/lotto.svg";
import plusOutlinedIcon from "./../../../images/icons/plus-outlined.svg";
import flowerIcon from "./../../../images/icons/flower-white.svg";
import LinkButton from "../../shared/linkButton";

interface CollapseType {
  title: string;
  description?: string;
  icon: string;
  alt: string;
  buttonData?: {
    text: string;
    path: string;
    color: string;
  };
}
const collapseData: CollapseType[] = [
  {
    title: "WEB DESIGN & DEVELOPMENT",
    icon: lottoIcon,
    alt: "Lotto icon",
  },
  {
    title: "BRANDING: NAMING AND DESIGN",
    icon: plusOutlinedIcon,
    alt: "Plus outlined icon",
  },
  {
    title: "CONTENT & GROWTH MARKETING",
    icon: flowerIcon,
    alt: "Flower icon",
    description:
      "Make informed decisions and drive business growth: we help you optimize your growth with effective strategies. From attraction to retention, we maximize the performance of your sales funnel.",
    buttonData: {
      text: "GET QUOTE",
      path: "#",
      color: "customPink-400",
    },
  },
];

export default function Services() {
  return (
    <div className="bg-customBlue-500">
      <div className="py-24 px-8 md:px-32 container">
        <div className="lg:max-w-[479px]">
          <h1 className="text-white text-center lg:text-left font-inter font-bold text-3xl uppercase">
            Services
          </h1>
          <p className="text-white text-center lg:text-left font-inter text-normal">
            We specialize in <span className="font-bold">business growth</span>{" "}
            and <span className="font-bold">digital product</span> development.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-customPink-400 border-b border-b-customPink-400 mb-14">
          {collapseData.map((item: CollapseType, index: number) => (
            <Collapse
              key={`${item.title}-${index}`}
              title={item.title}
              icon={item.icon}
              alt={item.alt}
              description={item.description}
              buttonData={{
                text: item.buttonData?.text,
                path: item.buttonData?.path,
                color: item.buttonData?.color,
              }}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <LinkButton
            text={"LEARN MORE"}
            path={"#"}
            color={"customPurple-600"}
          />
        </div>
      </div>
    </div>
  );
}
