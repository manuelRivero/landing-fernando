import React from "react";
import contentImg from "./../../../images/content-and-growth/content.png";
import contentResImg from "./../../../images/content-and-growth/content-res.png";
import CustomButton from "../../shared/customButton";
import { useDispatch } from "react-redux";
import { showContactPopup } from "../../../store/global";
import AnimateSection from "../../shared/animateSection";

export default function GrowthHero() {
  const dispatch = useDispatch();
  return (
    <div className="bg-white">
      <AnimateSection orientation="vertical">
        <div className="pt-32 lg:pt-52 md:pb-40 px-8 md:px-32 container">
          <div className="md-4 md:mb-11">
            <h1 className="text-customBlue-600 text-center lg:text-left font-inter font-bold text-2xl lg:text-9xl uppercase leading-tight lg:leading-customLineHeight">
              CONTENT & GROWTH MARKETING
            </h1>
          </div>

          <div className="flex flex-col space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 items-center mb-0 md:mb-32">
            <div className="flex flex-col space-y-4 items-center lg:items-start">
              <div>
                <h2 className="text-customBlue-600 text-center lg:text-left text-xs md:text-normal font-bold uppercase">
                  Optimize every conversion point
                </h2>
                <p className="text-customBlue-600 text-center lg:text-left text-xs md:text-normal leading-tight">
                  <span className="font-bold">
                    Visualize your client funnel:{" "}
                  </span>
                  build exponential growth for your business.
                </p>
              </div>
              <CustomButton
                bgColor="customYellow-500"
                textColor="customBlue-600"
                text="QUOTE"
                cb={() => dispatch(showContactPopup(true))}
              />
            </div>

            <div className="hidden md:flex flex-row justify-end mb-8 lg:mb-0">
              <img src={contentImg} alt="Computer" />
            </div>
            <div className="flex md:hidden flex-row justify-end mb-8 lg:mb-0">
              <img src={contentResImg} alt="Computer" />
            </div>
          </div>
        </div>
      </AnimateSection>
    </div>
  );
}
