import React from "react";
import GenericSection from "../../shared/genericSection";
import { useDispatch } from "react-redux";

export default function GetQuotation() {
  const dispatch = useDispatch();

  return (
    <div className="bg-black">
      <div className="py-16 md:py-24 px-8 md:px-32 container">
        <GenericSection
          title="Can't find the perfect fit for your business?"
          isUppercase={false}
          buttonData={{
            target: "_blank",
            color: "customBlue-600",
            path: "https://calendly.com/andy-lde/30min",
            text: "GET YOUR PERSONALIZED QUOTATION",
            textColor: "customGreen-500",
          }}
        />
      </div>
    </div>
  );
}
