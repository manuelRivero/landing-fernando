import React from "react";
import LinkButton from "../../shared/linkButton";

export default function Coaching() {
  return (
    <div className="bg-black">
      <div className="py-16 md:py-32 md:pb-40 px-8 md:px-32 container">
        <div className="flex flex-col justify-center items-center space-y-12">
          <div>
            <h1 className="text-white text-center text-small md:text-3xl font-bold uppercase leading-none">
              Not Ready to Apply?
            </h1>
            <h1 className="text-white text-center text-small md:text-3xl font-bold uppercase leading-none">
              Start with a{" "}
              <span className="text-customGreen-500">Coaching Session!</span>
            </h1>
            <p className="text-white text-center text-xs md:text-normal mt-8 md:mt-0">
              If you're not ready to apply for the Exclusive Incubator Program,
              begin your journey with a personalized coaching session. Our
              experts will guide you on strategic decisions, business
              challenges, and growth opportunities.
            </p>
          </div>
          <LinkButton
            color={"customGreen-500"}
            path={"https://calendly.com/andy-lde/30min"}
            text={"SCHEDULE YOUR COACHING SESSION"}
            textColor={"white"}
            target={"_blank"}
          />
        </div>
      </div>
    </div>
  );
}
