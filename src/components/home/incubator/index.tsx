import React from "react";
import GenericSection from "../../shared/genericSection";
import incubatorIcon from "./../../../images/icons/incubator.svg";

export default function Incubator() {
  return (
    <div className="bg-black">
      <div className="py-32 pb-20 lg:pb-40 px-8 md:px-32 container">
        <GenericSection
          icon={{ src: incubatorIcon, alt: "Incubator icon" }}
          title="Incubator"
          description="We help businesses with limited budgets optimize revenue and make informed decisions. Apply now to boost your business."
          buttonData={{ color: "customYellow-500", path: "#", text: "APPLY" }}
        />
      </div>
    </div>
  );
}
