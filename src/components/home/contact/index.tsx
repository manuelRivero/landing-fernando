import React from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../../shared/customButton";
import { showVerifyPopup } from "../../../store/global";

export default function Contact() {
  const dispatch = useDispatch();

  return (
    <div className="bg-customOrange-500 relative">
      <div className="py-14 px-8 md:px-32 container">
        <h2 className="text-white text-center  font-bold text-2xl md:text-3xl uppercase">
          Chat with Us
        </h2>
        <p className="text-white text-center  font-normal text-xs md:text-normal mb-8">
          Answers to all your questions related to business and digital
          products.{" "}
          <span className="font-normal lg:font-bold">
            We work with small and medium-sized enterprises, startups, and large
            corporations.
          </span>
        </p>

        <div className="flex justify-center">
          <CustomButton
            bgColor="customBlue-600"
            textColor="customGreen-500"
            text="GO TO WHATSAPP"
            cb={() => dispatch(showVerifyPopup(true))}
          />
        </div>
      </div>
    </div>
  );
}
