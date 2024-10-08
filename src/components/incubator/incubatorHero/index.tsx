import React from "react";
import contentImg from "./../../../images/incubator/hero-img.png";
import CustomButton from "../../shared/customButton";
import { useDispatch } from "react-redux";
import { showContactPopup } from "../../../store/global";

export default function IncubatorHero() {
  const dispatch = useDispatch();

  return (
    <div className="bg-black">
      <div className="pt-32 lg:pt-52 px-8 md:px-32 container">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center pb-32">
          <div className="flex flex-col space-y-4 items-center lg:items-start">
            <div>
              <h1 className="text-white text-center lg:text-left font-inter font-black text-2xl md:text-3xl uppercase leading-tight">
                <span className="text-customGreen-500">Incubator</span> Program
              </h1>
              <p className="text-white text-center lg:text-left text-normal leading-none">
                Transform your business with{" "}
                <span className="font-semibold italic">Zapian's</span> Incubator
                Program – a high-impact initiative tailored for pre-seed
                startups.{" "}
                <span className="font-semibold">
                  Unleash your business's potential
                </span>{" "}
                with our specialized support, strategic guidance, and exclusive
                resources.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-end mb-8 lg:mb-0">
            <img src={contentImg} alt="Computer" />
          </div>
        </div>
      </div>
    </div>
  );
}
