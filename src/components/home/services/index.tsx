import React, { useRef } from "react";
import Collapse from "../../shared/collapse";
import lottoIcon from "./../../../images/icons/lotto.svg";
import plusOutlinedIcon from "./../../../images/icons/plus-outlined.svg";
import flowerIcon from "./../../../images/icons/flower-white.svg";
import CustomButton from "../../shared/customButton";
import { useDispatch } from "react-redux";
import { showContactPopup } from "../../../store/global";
import AnimateSection from "../../shared/animateSection";

interface CollapseType {
  title: string;
  description?: string;
  icon: string;
  alt: string;
}
const collapseData: CollapseType[] = [
  {
    title: "Digital Platform Design & Development",
    description:
      "Build fully functional, visually stunning digital experiences that captivate and engage your users. From app design to web development, we create platforms that drive results and elevate your brand.",
    icon: lottoIcon,
    alt: "Lotto icon",
  },
  {
    title: "BRANDING: NAMING AND DESIGN",
    description:
      "Launch your business with a brand that not only stands out but also resonates with your audience. We craft memorable brand identities that connect with your target market and keep you top of mind.",
    icon: plusOutlinedIcon,
    alt: "Plus outlined icon",
  },
  {
    title: "CONTENT & GROWTH MARKETING",
    icon: flowerIcon,
    alt: "Flower icon",
    description:
      "Fuel your business growth with data-driven strategies. We optimize your entire sales funnel—from customer attraction to retention—ensuring every step is designed to maximize performance and long-term success.",
  },
];

export default function Services() {
  const dispatch = useDispatch();

  return (
    <div className="bg-customBlue-500">
      <AnimateSection>
        <div className="py-16 md:py-24 px-8 md:px-32 container">
          <div className="lg:max-w-[479px]">
            <h1 className="text-white text-center lg:text-left font-inter font-bold text-2xl md:text-3xl uppercase">
              Services
            </h1>
            <p className="text-white text-center lg:text-left font-inter text-xs md:text-normal">
              We specialize in{" "}
              <span className="font-bold">business growth</span> and{" "}
              <span className="font-bold">digital product</span> development.
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
              />
            ))}
          </div>

          <div className="flex justify-center">
            <CustomButton
              bgColor="customPink-400"
              textColor="white"
              text="GET QUOTE"
              cb={() => dispatch(showContactPopup(true))}
            />
          </div>
        </div>
      </AnimateSection>
    </div>
  );
}
