import React, { useEffect, useRef, useState } from "react";
import menuFlower from "./../../images/icons/menu-flower.svg";
import zapianLogo from "./../../images/logos/zapian-logo.svg";
import burguerMenu from "./../../images/icons/burger-menu.svg";
import footerTop from "./../../images/footer-top.png";
import footerBottom from "./../../images/footer-bottom.png";
import zapianFooter from "./../../images/logos/zapian-footer.png";
import linkedinLogo from "./../../images/logos/linkedin-logo.svg";
import instagramLogo from "./../../images/logos/instagram-logo.svg";
import tiktokLogo from "./../../images/logos/tiktok-logo.svg";
import whatsappLogo from "./../../images/logos/whatsapp-logo.svg";
import { Link } from "gatsby";
import { ImageType } from "../../types/imageType";

const menuLinks = [
  { text: "Home", href: "#", bold: true },
  { text: "About us", href: "#", bold: true },
  { text: "Services", href: "#", bold: true },
  { text: "Branding", href: "#", bold: false },
  { text: "CONTENT & GROWTH", href: "#", bold: false },
  { text: "WEB DESIGN", href: "#", bold: false },
  { text: "Coaching ", href: "#", bold: true },
  { text: "Incubator", href: "#", bold: true },
];

const importantLinks = [
  { text: "Home", href: "#" },
  { text: "Services", href: "#" },
  { text: "Coaching Sessions", href: "#" },
  { text: "About Us", href: "#" },
  { text: "Incubator", href: "#" },
];

const socialMediaList: ImageType[] = [
  { src: linkedinLogo, alt: "linkedin-logo" },
  { src: instagramLogo, alt: "instagram-logo" },
  { src: tiktokLogo, alt: "tiktok-logo" },
  { src: whatsappLogo, alt: "whatsapp-logo" },
];

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
        <header className="container mx-0 absolute top-0 left-1/2 -translate-x-1/2 p-8 lg:p-16">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-center items-center">
              <img src={zapianLogo} alt="Zapian logo" />
            </div>
            <div className="flex flex-row justify-center items-center">
              <img
                src={burguerMenu}
                alt="Burguer menu"
                className="cursor-pointer"
                onClick={() => toggleMenu()}
              />
            </div>
          </div>
        </header>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-0 right-0 rounded-bl-[120px] bg-customPink-500 flex flex-col items-end pt-16 pr-16 pl-9 pb-32"
          >
            <img src={menuFlower} alt="Menu-flower" className="mb-6" />
            {menuLinks.map((linkItem) => (
              <Link
                key={linkItem.text}
                to={linkItem.href}
                type="button"
                className={`font-inter text-white text-normal uppercase ${
                  linkItem.bold && "font-bold"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {linkItem.text}
              </Link>
            ))}
          </div>
        )}
        {children}
        <footer className="bg-black">
          <div>
            <div className="grid grid-cols-1 px-8">
              <img src={footerTop} alt="" />
            </div>
            <div className="grid grid-cols-12 gap-8 p-8">
              <div className="col-span-12 lg:col-span-3 flex flex-col space-y-4 lg:space-y-14">
                <h3 className="font-inter text-customOrange-500 text-normal uppercase">
                  Important links
                </h3>
                {importantLinks.map((linkItem) => (
                  <Link
                    key={linkItem.text}
                    to={linkItem.href}
                    type="button"
                    className="font-inter text-white text-normal font-semibold"
                  >
                    {linkItem.text}
                  </Link>
                ))}
              </div>
              <div className="col-span-12 lg:col-span-4 flex flex-col space-y-8">
                <div>
                  <h3 className="font-inter text-customOrange-500 text-normal md:text-little uppercase">
                    Contact
                  </h3>
                  <p className="text-white text-normal md:text-little">
                    hola@zapian.co
                  </p>
                  <p className="text-white text-normal md:text-little">
                    55 0000 0000
                  </p>
                </div>
                <div>
                  <h3 className="font-inter text-customOrange-500 text-normal md:text-little uppercase">
                    Address
                  </h3>
                  <p className="text-white text-normal md:text-little italic">
                    Anzures, 11590 CDMX, México. C. del Pez, Centro, 28004
                    Madrid, España.
                  </p>
                  <p className="text-white text-normal md:text-little italic">
                    S Beverly Dr, Beverly Hills, CA 90212, United States.
                  </p>
                </div>
                <div>
                  <h3 className="font-inter text-customOrange-500 text-normal md:text-little uppercase">
                    Social Media
                  </h3>
                  <div className="flex space-x-3">
                    {socialMediaList.map((logo: ImageType) => (
                      <div
                        key={logo.alt}
                        className="flex justify-center items-center"
                      >
                        <img src={logo.src} alt={logo.alt} />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-inter text-customOrange-500 text-normal md:text-little uppercase">
                    ENGLISH | MEXICO · $0,000
                  </h3>
                  <p className="text-white text-normal md:text-little italic">
                    Prices do not include taxes
                  </p>
                </div>
                <div>
                  <h3 className="font-inter text-customOrange-500 text-normal md:text-little uppercase">
                    We Accept
                  </h3>
                  <p className="text-white text-normal md:text-little underline">
                    Visa | Mastercard | American Express | OXXO | PayPal
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 flex flex-col space-y-8">
                <div>
                  <h3 className="font-inter font-normal lg:font-semibold text-customOrange-500 text-normal md:text-little uppercase">
                    Subscribe to the newsletter
                  </h3>
                  <div className="grid grid-cols-6 gap-4">
                    <input
                      type="text"
                      className="col-span-4 bg-black rounded-full border border-customOrange-500 text-white px-6 font-inter"
                    />
                    <button
                      type="button"
                      className="col-span-2 w-fit bg-customOrange-500 px-6 py-2 rounded-full text-white font-inter lg:uppercase"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="h-full flex flex-col justify-end">
                  <h3 className="font-inter text-customOrange-500 text-normal md:text-little uppercase">
                    Resource Links:
                  </h3>
                  <p className="text-white text-normal md:text-little font-inter italic mb-10">
                    Free PDF
                  </p>
                  <div className="flex justify-start items-end mb-4">
                    <img src={zapianFooter} alt="Zapian" />
                  </div>
                  <h3 className="font-inter font-normal text-customOrange-500 text-normal md:text-little uppercase">
                    Policies and Terms
                  </h3>
                  <p className="text-white text-normal md:text-little font-inter">
                    Privacy Policy
                  </p>
                  <p className="text-white text-normal md:text-little font-inter">
                    Terms and Conditions of Use
                  </p>
                  <p className="text-white text-normal md:text-little font-inter">
                    © 2023 Zapian All rights reserved.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <img src={footerBottom} alt="" />
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
