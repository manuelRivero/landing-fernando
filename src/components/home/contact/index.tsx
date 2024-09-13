import React from "react";
import LinkButton from "../../shared/linkButton";

export default function Contact() {
  return (
    <div className="bg-customOrange-500">
      <div className="py-14 px-8 md:px-32 container">
        <h2 className="text-white text-center font-inter font-bold text-3xl uppercase">
          Chat with Us
        </h2>
        <p className="text-white text-center font-inter font-normal text-normal">
          Answers to all your questions related to business and digital
          products.
        </p>
        <p className="text-white text-center font-inter font-bold text-normal mb-8">
          We work with small and medium-sized enterprises, startups, and large
          corporations.
        </p>

        <div className="flex justify-center">
          <LinkButton
            color="customBlue-600"
            path="#"
            text="GO TO WHATSAPP"
            textColor="customGreen-500"
          />
        </div>
      </div>
    </div>
  );
}
