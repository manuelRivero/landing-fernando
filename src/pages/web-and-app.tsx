import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import WebAndAppHero from "../components/webAndApp/webAndAppHero";
import Plans from "../components/webAndApp/plans";
import Process from "../components/webAndApp/process";
import GetQuotation from "../components/webAndApp/getQuotation";
import ContactPopup from "../components/shared/contactPopup";

const WebAndAppPage: React.FC<PageProps> = () => {
  const [showContactModal, setShowContactModal] =
    React.useState<boolean>(false);

  React.useEffect(() => {
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

  const handleShowModal = () => {
    setShowContactModal(true);
  };

  return (
    <div className="relative">
      <div
        className="relative overflow-x-hidden"
        onClick={() => {
          if (showContactModal) {
            setShowContactModal(false);
          }
        }}
      >
        <WebAndAppHero close={() => handleShowModal()} />
        <Plans close={() => handleShowModal()} />
        <Process close={() => handleShowModal()} />
        <GetQuotation close={() => handleShowModal()} />
      </div>
      {showContactModal && <ContactPopup />}
    </div>
  );
};

export default WebAndAppPage;

export const Head: HeadFC = () => <title>Web and app</title>;
