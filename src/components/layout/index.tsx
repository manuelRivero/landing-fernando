import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import { motion } from "framer-motion";
import { useLocation } from "@reach/router";
import { Provider } from "react-redux";
import store from "../../store";
import ContactPopup from "../shared/contactPopup";
import VerifyPopup from "../shared/verifyPopup";
import whatsapp from "../../images/logos/whatsapp-logo-button.png";

interface LayoutProps {
  children: ReactNode; // Esto permite que se pasen elementos React como hijos
}

const menuLinks = [
  { text: "Home", href: "/", bold: true },
  { text: "WEB · APP", href: "/web-and-app", bold: false },
  { text: "Branding", href: "/branding", bold: false },
  { text: "Growth & Funnel", href: "/growth-and-funnel", bold: false },
  { text: "Incubator", href: "/incubator", bold: true },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef: any = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Este efecto cierra el menú cuando se hace clic fuera del mismo
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Cierra el menú si se hace clic fuera
      }
    };

    // Escucha de eventos global de clic
    document.addEventListener("mousedown", handleClickOutside);

    // Limpia el evento al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleMenuColors = (
    location: string
  ): { bgColor: string; iconColor: string } => {
    if (location === "/")
      return { bgColor: "customPink-500", iconColor: "#5A56ED" };
    else if (location === "/growth-and-funnel/")
      return { bgColor: "customBlue-600", iconColor: "#F8C332" };
    else if (location === "/web-and-app/")
      return { bgColor: "customBlue-600", iconColor: "#1BE4A5" };
    else if (location === "/incubator/")
      return { bgColor: "customOrange-500", iconColor: "#1BE4A5" };
    else if (location === "/branding/")
      return { bgColor: "black", iconColor: "#F94074" };
    else return { bgColor: "customBlue-600", iconColor: "#F8C332" };
  };

  return (
    <Provider store={store}>
      <main>
        <div className="relative">
          <ContactPopup />
          <VerifyPopup />
          <Header onToggleMenu={toggleMenu} />
          <motion.div
            initial={{ y: "-100vh" }}
            animate={isMenuOpen ? { y: 0 } : { y: "-100vh" }}
            transition={{ duration: 0.5, ease: "easeOut" }} // Transición suave sin rebote
            className={`fixed md:absolute top-0 right-0 z-20`}
          >
            <div
              ref={menuRef}
              className={`bg-${
                handleMenuColors(location.pathname).bgColor
              } rounded-bl-[120px] flex flex-col items-end pt-8 md:pt-16 pr-8 md:pr-16 pl-5 md:pl-9 pb-20 md:pb-32 space-y-2 md:space-y-0`}
            >
              <svg
                width="33"
                height="34"
                viewBox="0 0 33 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-6"
              >
                <path
                  d="M32.99 17.0599C31.29 16.1699 29.7499 15.0999 28.0399 14.5099C26.8299 14.0899 25.63 13.9099 24.45 13.9299C27.09 11.5599 28.3299 8.62989 27.8199 5.60989C24.2899 5.87989 21.6 7.13989 19.62 9.29989C19.86 5.67989 18.6999 2.66988 16.1899 0.879883C13.8699 3.59988 12.85 6.43989 12.98 9.39989C10.57 6.61989 7.55 5.26989 4.63 5.90989C4.91001 9.44989 6.15991 12.1599 8.27991 14.1499C4.65991 13.9299 1.62 15.1199 0 17.6399C2.74 19.9999 5.57992 21.0099 8.53992 20.8599C5.59992 23.3199 4.39 26.0599 4.87 29.1199C8.3 29.3499 10.9199 28.1199 13.3199 24.9099C12.8199 28.9899 13.8399 31.9799 16.4399 33.8699C18.9399 31.6699 19.91 29.0199 19.49 25.2699C21.8 28.0399 24.82 29.3999 28.36 29.0199C27.79 27.1799 27.44 25.3299 26.65 23.6899C26.1 22.5399 25.3799 21.5799 24.5499 20.7499C27.9299 20.9399 30.85 19.7299 32.99 17.0599Z"
                  fill={handleMenuColors(location.pathname).iconColor}
                />
              </svg>

              {menuLinks.map((linkItem) => (
                <Link
                  key={linkItem.text}
                  to={linkItem.href}
                  type="button"
                  className={`font-inter text-white text-small md:text-normal uppercase ${
                    linkItem.bold && "font-bold"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {linkItem.text}
                </Link>
              ))}
            </div>
          </motion.div>
          {children}
          <Footer />
          <div className="fixed bottom-0 right-0 -translate-x-5 md:-translate-x-1/2 -translate-y-5 md:-translate-y-1/2 z-10">
            <Link
              to="https://api.whatsapp.com/send?phone=5215639308664&text=%C2%A1Hola!%20Me%20interesa%20saber%20m%C3%A1s%20de%20Zapian."
              target="_blank"
            >
              <img
                src={whatsapp}
                alt="Whatsapp"
                className="w-[113px] md:w-[134px]"
              />
            </Link>
          </div>
        </div>
      </main>
    </Provider>
  );
}
