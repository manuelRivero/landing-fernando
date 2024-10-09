import React from "react";
import contentImg from "./../../../images/web-and-app/hero-img.png";
import LinkButton from "../../shared/linkButton";
import CustomButton from "../../shared/customButton";
import { useDispatch } from "react-redux";
import { showContactPopup } from "../../../store/global";

export default function WebAndAppHero() {
  const dispatch = useDispatch();

  return (
    <div className="bg-white">
      <div className="pt-32 lg:pt-52 px-8 md:px-32 container">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center mb-32">
          <div className="flex flex-col space-y-4 items-center lg:items-start">
            <div>
              <h1 className="text-customBlue-600 text-center lg:text-left font-inter font-bold text-2xl md:text-3xl uppercase leading-none">
                WEB DESIGN & DEVELOPMENT
              </h1>
              <p className="text-customBlue-600 text-center lg:text-left text-normal leading-none">
                Digital experiences that captivate and optimize your
                conversions.
              </p>
            </div>
            <CustomButton
              bgColor="customGreen-500"
              textColor="customBlue-600"
              text="QUOTE"
              cb={() => dispatch(showContactPopup(true))}
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
