import React from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../../shared/customButton";
import { showContactPopup } from "../../../store/global";

export default function SomethingElse() {
  const dispatch = useDispatch();

  return (
    <div className="bg-black">
      <div className="py-32 pb-40 px-8 md:px-32 container">
        <div className="flex flex-col justify-center items-center space-y-12">
          <div>
            <h1 className="text-white text-center text-3xl font-bold uppercase leading-none">
              <span className="text-customPink-500">Looking </span>
              for something else?
            </h1>
            <p className="text-white text-center text-normal">
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
    </div>
  );
}
