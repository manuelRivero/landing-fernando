import React from "react";
import IconsAndTextsSection from "../../shared/iconsAndTextsSection";

export default function WeHelpYou() {
  return (
    <div className="bg-black">
      <div className="flex flex-col space-y-8 md:space-y-16 py-24 px-8 md:px-32 container">
        
        <h1 className="text-white text-center font-bold text-2xl md:text-3xl leading-tight">
          WE HELP YOU
        </h1>
        <IconsAndTextsSection />
      </div>
    </div>
  );
}
