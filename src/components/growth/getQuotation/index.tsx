import React from "react";
import GenericSection from "../../shared/genericSection";
import AnimateSection from "../../shared/animateSection";

export default function GetQuotation() {
  return (
    <div className="bg-black">
      <AnimateSection>
        <div className="py-16 md:py-24 px-8 md:px-32 container">
          <GenericSection
            title="Can't find the perfect fit for your business?"
            isUppercase={false}
            buttonData={{
              target: "_blank",
              color: "customBlue-600",
              path: "https://calendly.com/andy-lde/30min",
              text: "Get your Personalized Quotation",
              textColor: "customYellow-500",
            }}
          />
        </div>
      </AnimateSection>
    </div>
  );
}
