import React from "react";
import GenericSection from "../../shared/genericSection";
import incubatorIcon from "./../../../images/icons/incubator.svg";
import CustomButton from "../../shared/customButton";
import { useDispatch } from "react-redux";
import { showContactPopup } from "../../../store/global";
import AnimateSection from "../../shared/animateSection";

export default function Incubator() {
  const dispatch = useDispatch();

  return (
    <div className="bg-black relative">
      <AnimateSection>
        <div className="py-16 md:py-32 md:pb-20 lg:pb-40 px-8 md:px-32 container">
          <GenericSection
            icon={{ src: incubatorIcon, alt: "Incubator icon" }}
            title="Incubator"
            description="We help businesses with limited budgets optimize revenue and make informed decisions. Apply now to boost your business."
          />
          <div className="flex justify-center mt-8">
            <CustomButton
              bgColor="customYellow-500"
              textColor="white"
              text="APPLY"
              cb={() => dispatch(showContactPopup(true))}
            />
          </div>
        </div>
      </AnimateSection>
    </div>
  );
}
