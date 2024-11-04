import React from "react";
import IconsAndTextsSection from "../../shared/iconsAndTextsSection";
import AnimateSection from "../../shared/animateSection";

export default function Expertise() {
  return (
    <div className="bg-black">
      <AnimateSection>
        <div className="py-24 px-8 md:px-32 container">
          <h1 className="text-white text-center font-inter font-bold text-2xl md:text-3xl leading-tight mb-16">
            <span className="text-customGreen-500 italic">Zapian's</span>{" "}
            EXPERTISE
          </h1>
          <IconsAndTextsSection />
        </div>
      </AnimateSection>
    </div>
  );
}
