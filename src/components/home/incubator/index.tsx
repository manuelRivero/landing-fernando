import React, { useEffect, useState } from "react";
import GenericSection from "../../shared/genericSection";
import incubatorIcon from "./../../../images/icons/incubator.svg";
import ContactPopup from "../../shared/contactPopup";

export default function Incubator() {
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  useEffect(() => {
    if (showContactModal) {
      document.body.style.overflow = "hidden"; // Bloquea el scroll
    } else {
      document.body.style.overflow = ""; // Restablece el scroll
    }

    // Limpia el efecto al desmontar el componente
    return () => {
      document.body.style.overflow = ""; // Asegura que el scroll se restablezca
    };
  }, [showContactModal]);
  return (
    <div className="bg-black relative">
      <div
        onClick={() => {
          if (showContactModal) {
            setShowContactModal(false);
          }
        }}
        className="py-32 pb-20 lg:pb-40 px-8 md:px-32 container"
      >
        <GenericSection
          icon={{ src: incubatorIcon, alt: "Incubator icon" }}
          title="Incubator"
          description="We help businesses with limited budgets optimize revenue and make informed decisions. Apply now to boost your business."
          buttonData={{ color: "customYellow-500", path: "#", text: "APPLY" }}
        />
      </div>

      {showContactModal && <ContactPopup />}
    </div>
  );
}
