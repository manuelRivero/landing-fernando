import React from "react";
import GenericSection from "../../shared/genericSection";

export default function GetQuotation() {
  return (
    <div className="bg-black">
      <div className="py-24 px-8 md:px-32 container">
        <GenericSection
          title="Can't find the perfect fit for your business?"
          isUppercase={false}
          buttonData={{
            color: "customBlue-600",
            path: "#",
            text: "Get your Personalized Quotation",
            textColor: "customYellow-500",
          }}
        />
      </div>
    </div>
  );
}
