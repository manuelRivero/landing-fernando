import React from "react";
import LinkButton from "../../shared/linkButton";
import AnimateSection from "../../shared/animateSection";

export default function Welcome() {
  return (
    <div className="bg-customPink-500">
      <AnimateSection orientation="vertical">
        <div className="py-16 md:py-32 pb-20 lg:pb-40 px-8 md:px-32 container">
          <div className="grid grid-cols-2 justify-center items-center gap-8">
            <h2 className="col-span-2 lg:col-span-1 text-white text-3xl md:text-9xl font-bold leading-tight text-center md:text-left">
              Welcome to <span className="italic">Zapian</span>
            </h2>
            <h2 className="col-span-2 lg:col-span-1 text-white text-xs md:text-normal font-normal text-center md:text-left">
              At Zapian, we are dedicated to the transformative power of
              innovation. Our mission is to empower businesses by providing
              creative and data driven solutions that drive growth and
              excellence.
            </h2>
            <div className="col-span-2 flex justify-center mt-4">
              <LinkButton
                color={"customPurple-500"}
                path={
                  "https://www.canva.com/design/DAGPUawZZGc/fD2EIHHW5kEXha5cRZaj2Q/view?utm_content=DAGPUawZZGc&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                }
                text={"ABOUT US"}
                textColor={"white"}
                target="_blank"
              />
            </div>
          </div>
        </div>
      </AnimateSection>
    </div>
  );
}
