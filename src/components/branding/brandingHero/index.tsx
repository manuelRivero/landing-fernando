import React from "react";
import contentImg from "./../../../images/branding/hero-img.png";
import CustomButton from "../../shared/customButton";
import { useDispatch } from "react-redux";
import { showContactPopup } from "../../../store/global";

export default function BrandingHero() {
  const dispatch = useDispatch();

  return (
    <div className="bg-white">
      <div className="pt-32 lg:pt-52 px-8 md:px-32 container">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="flex flex-row mb-8 lg:mb-0">
            <img src={contentImg} alt="Computer" />
          </div>

          <div className="flex flex-col space-y-6 items-center lg:items-start">
            <div>
              <h1 className="text-black text-center lg:text-left font-inter font-bold text-2xl md:text-3xl uppercase leading-none">
              <span className="text-customPink-500">BRANDING: </span>NAMING AND DESIGN
              </h1>
              <p className="text-black text-center lg:text-left text-normal leading-none">
              Discover a new era in <span className="font-bold">qualitative research, powered </span>by artificial intelligence.
              </p>
            </div>
            <CustomButton
              bgColor="customPink-500"
              textColor="white"
              text="QUOTE"
              cb={() => dispatch(showContactPopup(true))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
