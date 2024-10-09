import React from "react";
import GenericSection from "../../shared/genericSection";
import { useDispatch } from "react-redux";
import IconsAndTextsSection from "../../shared/iconsAndTextsSection";

export default function Expertise() {
  const dispatch = useDispatch();

  return (
    <div className="bg-black">
      <div className="py-24 px-8 md:px-32 container">
        <h1 className="text-white text-center font-inter font-bold text-2xl md:text-3xl leading-tight mb-16">
          <span className="text-customGreen-500 italic">Zapian's</span> EXPERTISE
        </h1>
        <IconsAndTextsSection />
      </div>
    </div>
  );
}
