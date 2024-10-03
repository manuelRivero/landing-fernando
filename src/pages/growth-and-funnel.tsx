import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import GrowthHero from "../components/growth/growthHero";
import Plans from "../components/growth/plans";
import Process from "../components/growth/process";
import GenericSection from "../components/shared/genericSection";
import GetQuotation from "../components/growth/getQuotation";
import ContactPopup from "../components/shared/contactPopup";

const ContentAndGrowthPage: React.FC<PageProps> = () => {
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
        <GrowthHero close={() => handleShowModal()} />
        <Plans close={() => handleShowModal()} />
        <Process close={() => handleShowModal()} />
        <GetQuotation close={() => handleShowModal()} />
      </div>
      {showContactModal && <ContactPopup />}
    </div>
  );
};

export default ContentAndGrowthPage;

export const Head: HeadFC = () => <title>Growth</title>;
