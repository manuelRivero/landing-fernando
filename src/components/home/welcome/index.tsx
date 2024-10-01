import React from "react";
import LinkButton from "../../shared/linkButton";

export default function Welcome() {
  return (
    <div className="bg-customPink-500">
      <div className="py-32 pb-20 lg:pb-40 px-8 md:px-32 container">
        <div className="grid grid-cols-2 justify-center items-center gap-8">
          <h2 className="col-span-2 lg:col-span-1 text-white text-2xl md:text-3xl lg:text-9xl font-bold leading-tight">
            Welcome to <span className="italic">Zapian</span>
          </h2>
          <h2 className="col-span-2 lg:col-span-1 text-white text-normal font-normal">
            At Zapian, we are dedicated to the transformative power of
            innovation. Our mission is to empower businesses by providing
            creative and data driven solutions that drive growth and excellence.
          </h2>
          <div className="col-span-2 flex justify-center mt-4">
            <LinkButton
              color={"customPurple-500"}
              path={"#"}
              text={"ABOUT US"}
              textColor={"white"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
