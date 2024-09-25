import React, { useEffect, useRef, useState } from "react";
import menuFlower from "./../../images/icons/menu-flower.svg";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import { motion } from "framer-motion";

const menuLinks = [
  { text: "Home", href: "#", bold: true },
  { text: "About us", href: "#", bold: true },
  { text: "Services", href: "#", bold: true },
  { text: "Branding", href: "#", bold: false },
  { text: "CONTENT & GROWTH", href: "/content-and-growth", bold: false },
  { text: "WEB DESIGN", href: "#", bold: false },
  { text: "Coaching ", href: "#", bold: true },
  { text: "Incubator", href: "#", bold: true },
];

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function Layout({ children }: JSX.Element) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Este efecto cierra el menú cuando se hace clic fuera del mismo
  useEffect(() => {
    const handleClickOutside = (event) => {
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

  return (
    <main>
      <div className="relative">
        <Header onToggleMenu={toggleMenu} />
        <motion.div
          initial={{ y: "-100vh" }}
          animate={isMenuOpen ? { y: 0 } : { y: "-100vh" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}  // Transición suave sin rebote
          className={`fixed md:absolute top-0 right-0 z-20`}
        >
          <div
            ref={menuRef}
            className="rounded-bl-[120px] bg-customPink-500 flex flex-col items-end pt-8 md:pt-16 pr-8 md:pr-16 pl-5 md:pl-9 pb-20 md:pb-32 space-y-2 md:space-y-0"
          >
            <img src={menuFlower} alt="Menu-flower" className="mb-6" />
            {menuLinks.map((linkItem) => (
              <Link
                key={linkItem.text}
                to={linkItem.href}
                type="button"
                className={`font-inter text-white text-little md:text-normal uppercase ${
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
      </div>
    </main>
  );
}
