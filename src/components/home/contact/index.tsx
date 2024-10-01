import React, { useEffect, useState } from "react";
import VerifyPopup from "../../shared/verifyPopup";

export default function Contact() {
  const [showVerifyModal, setShowVerifyModal] = useState<boolean>(false);

  useEffect(() => {
    if (showVerifyModal) {
      document.body.style.overflow = "hidden"; // Bloquea el scroll
    } else {
      document.body.style.overflow = ""; // Restablece el scroll
    }

    // Limpia el efecto al desmontar el componente
    return () => {
      document.body.style.overflow = ""; // Asegura que el scroll se restablezca
    };
  }, [showVerifyModal]);
  return (
    <div className="bg-customOrange-500 relative">
      <div
        className="py-14 px-8 md:px-32 container"
        onClick={() => {
          if (showVerifyModal) {
            setShowVerifyModal(false);
          }
        }}
      >
        <h2 className="text-white text-center font-inter font-bold text-3xl uppercase">
          Chat with Us
        </h2>
        <p className="text-white text-center font-inter font-normal text-normal mb-8">
          Answers to all your questions related to business and digital
          products.{" "}
          <span className="font-normal lg:font-bold">
            We work with small and medium-sized enterprises, startups, and large
            corporations.
          </span>
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => setShowVerifyModal(true)}
            type="button"
            className="bg-customBlue-600 px-7 py-2 rounded-full text-customGreen-500 text-normal text-center font-bold"
          >
            GO TO WHATSAPP
          </button>
        </div>
      </div>
      {showVerifyModal && <VerifyPopup />}
    </div>
  );
}
