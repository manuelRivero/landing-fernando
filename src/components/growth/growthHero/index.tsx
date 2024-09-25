import React from "react";
import contentImg from "./../../../images/content-and-growth/content.png";
import LinkButton from "../../shared/linkButton";

export default function GrowthHero() {
  return (
    <div className="bg-white">
      <div className="pt-32 lg:pt-52 pb-32 lg:pb-40 px-8 md:px-32 container">
        <div className="mb-11">
          <h1 className="text-customBlue-600 text-center lg:text-left font-inter font-black text-2xl md:text-3xl lg:text-9xl uppercase leading-tight lg:leading-customLineHeight">
            CONTENT & GROWTH MARKETING
          </h1>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center mb-32">
          <div className="flex flex-col space-y-4 items-center lg:items-start">
            <h2 className="text-customBlue-600 text-center lg:text-left text-normal font-bold uppercase">
              Optimize every conversion point
            </h2>
            <p className="text-customBlue-600 text-center lg:text-left text-normal">
              <span className="font-bold">Optimize every conversion point Visualize your client funnel: </span>
              build exponential growth for your business.
            </p>
            <LinkButton
              text="QUOTE"
              path="#"
              color="customYellow-500"
              textColor="customBlue-600"
            />
          </div>

          <div className="flex flex-row justify-end mb-8 lg:mb-0">
            <img src={contentImg} alt="Computer" />
          </div>
        </div>
      </div>
    </div>
  );
}