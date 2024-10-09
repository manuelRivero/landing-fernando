import React from "react";
import contentImg from "./../../../images/incubator/applyNow.png";
import CustomButton from "../../shared/customButton";
import { useDispatch } from "react-redux";
import { showContactPopup } from "../../../store/global";

export default function ApplyNow() {
  const dispatch = useDispatch();

  return (
    <div className="bg-customOrange-500">
      <div className="pt-32 lg:pt-44 px-8 md:px-32 container pb-32">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8 items-center mb-12">
          <div className="flex flex-col space-y-4 items-center lg:items-start">
            <div>
              <h1 className="text-white text-center lg:text-left font-inter font-bold text-2xl md:text-3xl uppercase leading-tight">
                Ready to Secure Your Exclusive Spot?
              </h1>
              <p className="text-white text-center lg:text-left text-normal leading-tight">
                This is your chance to join a group of businesses on the fast
                track to success. Act now – apply for the Incubator Program and
                position your business for unprecedented growth.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-16">
            <div className="flex justify-end mb-8 lg:mb-0">
              <img src={contentImg} alt="Computer" />
            </div>
            <div className="flex justify-center mb-8">
              <CustomButton
                bgColor="customGreen-500"
                text="APPLY NOW"
                cb={() => dispatch(showContactPopup(true))}
              />
            </div>
          </div>
        </div>
        <p className="text-white text-center text-little leading-tight italic">
          Note: Limited spots available. Act now to secure your opportunity.
        </p>
      </div>
    </div>
  );
}
