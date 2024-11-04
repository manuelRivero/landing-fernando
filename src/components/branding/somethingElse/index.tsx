import React from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../../shared/customButton";
import { showContactPopup } from "../../../store/global";
import AnimateSection from "../../shared/animateSection";

export default function SomethingElse() {
  const dispatch = useDispatch();

  return (
    <div className="bg-black">
      <AnimateSection>
        <div className="py-16 md:py-32 md:pb-40 px-8 md:px-32 container">
          <div className="flex flex-col justify-center items-center space-y-4 md:space-y-12">
            <div>
              <h1 className="text-white text-center text-2xl md:text-3xl font-bold uppercase leading-none">
                <span className="text-customPink-500">Looking </span>
                for something else?
              </h1>
              <p className="text-white text-center text-xs md:text-normal">
                We generate your AI chatbot as well.
              </p>
            </div>
            <div className="flex justify-center">
              <CustomButton
                bgColor="white"
                textColor="customPink-500"
                text="QUOTE"
                cb={() => dispatch(showContactPopup(true))}
              />
            </div>
          </div>
        </div>
      </AnimateSection>
    </div>
  );
}
