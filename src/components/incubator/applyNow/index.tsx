import React from "react";
import contentImg from "./../../../images/incubator/applyNow.png";
import CustomButton from "../../shared/customButton";
import { useDispatch } from "react-redux";
import { showContactPopup, showVerifyPopup } from "../../../store/global";

export default function ApplyNow() {
  const dispatch = useDispatch();

  return (
    <div className="bg-customOrange-500">
      <div className="py-16 md:py-32 lg:pt-44 px-8 md:px-32 container">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8 items-center mb-6 md:mb-12">
          <div className="flex flex-col space-y-4 items-center lg:items-start">
            <div>
              <h1 className="text-white text-center lg:text-left font-inter font-bold text-normal md:text-3xl uppercase leading-tight">
                Ready to Secure Your Exclusive Spot?
              </h1>
              <p className="text-white text-center lg:text-left text-xs md:text-normal leading-tight">
                This is your chance to join a group of businesses on the fast
                track to success. Act now – apply for the Incubator Program and
                position your business for unprecedented growth.
              </p>
            </div>
            <div className="flex md:hidden justify-center mb-8">
              <CustomButton
                bgColor="customGreen-500"
                text="APPLY NOW"
                cb={() => dispatch(showVerifyPopup(true))}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-16">
            <div className="flex justify-end mb-8 lg:mb-0">
              <img src={contentImg} alt="Computer" />
            </div>
            <div className="hidden md:flex justify-center mb-8">
              <CustomButton
                bgColor="customGreen-500"
                text="APPLY NOW"
                cb={() => dispatch(showVerifyPopup(true))}
              />
            </div>
          </div>
        </div>
        <p className="text-white text-center text-tight md:text-little leading-tight italic">
          Note: Limited spots available. Act now to secure your opportunity.
        </p>
      </div>
    </div>
  );
}
