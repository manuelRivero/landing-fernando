import { Link } from "gatsby";
import React from "react";
import footerTop from "./../../../images/footer-top.png";
import footerTopPink from "./../../../images/footer-top-pink.png";
import footerBottom from "./../../../images/footer-bottom.png";
import footerBottomWhite from "./../../../images/footer-bottom-white.png";
import zapianFooter from "./../../../images/logos/zapian-footer.png";
import linkedinLogo from "./../../../images/logos/linkedin-logo.svg";
import instagramLogo from "./../../../images/logos/instagram-logo.svg";
import tiktokLogo from "./../../../images/logos/tiktok-logo.svg";
import whatsappLogo from "./../../../images/logos/whatsapp-logo.svg";
import { ImageType } from "../../../types/imageType";
import { useLocation } from "@reach/router";

const relevantLinks = [
  { text: "Home", href: "/", bold: true },
  { text: "Web", href: "/web-and-app", bold: false },
  { text: "Branding", href: "/branding", bold: false },
  { text: "Growth", href: "/growth-and-funnel", bold: false },
  { text: "Incubator", href: "/incubator", bold: true },
];

const socialMediaList: ImageType[] = [
  { src: linkedinLogo, alt: "linkedin-logo" },
  { src: instagramLogo, alt: "instagram-logo" },
  { src: tiktokLogo, alt: "tiktok-logo" },
  { src: whatsappLogo, alt: "whatsapp-logo" },
];

export default function Footer() {
  const { pathname } = useLocation();

  const handleIconsColors = (): {
    mainColor: string;
    textButtonColor: string;
  } => {
    if (pathname === "/" || pathname === "/incubator/")
      return { mainColor: "customOrange-500", textButtonColor: "white" };
    else if (pathname === "/growth-and-funnel/")
      return {
        mainColor: "customYellow-500",
        textButtonColor: "customBlue-600",
      };
    else if (pathname === "/web-and-app/")
      return {
        mainColor: "customGreen-500",
        textButtonColor: "customBlue-600",
      };
    else if (pathname === "/branding/")
      return { mainColor: "customPink-500", textButtonColor: "white" };
    else return { mainColor: "", textButtonColor: "white" };
  };

  return (
    <footer className="bg-black">
      <div className="container">
        <div className="grid grid-cols-1 px-8">
          <img
            src={pathname === "/branding/" ? footerTopPink : footerTop}
            alt="Footer Top"
          />
        </div>
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8 p-8">
          <div className="col-span-12 lg:col-span-3 flex flex-col space-y-4 lg:space-y-14">
            <h3
              className={`text-${
                handleIconsColors().mainColor
              } text-xs md:text-normal uppercase`}
            >
              Relevant Links
            </h3>
            {relevantLinks.map((linkItem) => (
              <Link
                key={linkItem.text}
                to={linkItem.href}
                type="button"
                className={`text-white text-xs md:text-normal ${
                  linkItem.bold && "font-semibold"
                }`}
              >
                {linkItem.text}
              </Link>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col space-y-8">
            <div>
              <h3
                className={`text-${
                  handleIconsColors().mainColor
                } text-xs md:text-little uppercase`}
              >
                Contact
              </h3>
              <p className="text-white text-xs md:text-little">
                andy@zapian.io
              </p>
              <p className="text-white text-xs md:text-little">5540699598</p>
            </div>
            {/* <div>
              <h3
                className={`text-${
                  handleIconsColors().mainColor
                } text-xs md:text-little uppercase`}
              >
                Address
              </h3>
              <p className="text-white text-xs md:text-little italic">
                Anzures, 11590 CDMX, México. C. del Pez, Centro, 28004 Madrid,
                España.
              </p>
              <p className="text-white text-xs md:text-little italic">
                S Beverly Dr, Beverly Hills, CA 90212, United States.
              </p>
            </div> */}
            <div>
              <h3
                className={`text-${
                  handleIconsColors().mainColor
                } text-xs md:text-little uppercase`}
              >
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
              <h3
                className={`text-${
                  handleIconsColors().mainColor
                } text-xs md:text-little uppercase font-semibold`}
              >
                ENGLISH | MEXICO · $0,000
              </h3>
              <p className="text-white text-xs md:text-little italic">
                Prices do not include taxes
              </p>
            </div>
            <div>
              <h3
                className={`text-${
                  handleIconsColors().mainColor
                } text-xs md:text-little uppercase`}
              >
                We Accept
              </h3>
              <p className="text-white text-xs md:text-little underline">
                Visa | Mastercard | American Express | OXXO | PayPal
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col space-y-8">
            <div>
              <h3
                className={`font-normal text-${
                  handleIconsColors().mainColor
                } text-xs md:text-little uppercase mb-2`}
              >
                Subscribe to the newsletter
              </h3>
              <div className="grid grid-cols-12 gap-2">
                <input
                  type="text"
                  className={`col-span-8 bg-black rounded-full border border-${
                    handleIconsColors().mainColor
                  } text-white px-6 py-1 font-inter`}
                />
                <div className="flex justify-center col-span-4">
                  <button
                    type="button"
                    className={`text-3xs md:text-tight w-fit bg-${
                      handleIconsColors().mainColor
                    } px-6 py-2 rounded-full text-${
                      handleIconsColors().textButtonColor
                    } font-bold uppercase`}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="h-full flex flex-col justify-end">
              <h3
                className={`text-${
                  handleIconsColors().mainColor
                } text-xs md:text-little uppercase`}
              >
                Resource Links:
              </h3>
              <p className="text-white text-xs md:text-little font-inter italic mb-10">
                Free PDF
              </p>
              <div className="flex justify-start items-end mb-4">
                <img src={zapianFooter} alt="Zapian" />
              </div>
              <h3 className="font-inter font-little text-white text-xs md:text-little uppercase">
                Policies and Terms
              </h3>
              <p className="text-white text-xs md:text-little font-inter">
                Privacy Policy
              </p>
              <p className="text-white text-xs md:text-little font-inter">
                Terms and Conditions of Use
              </p>
              <p className="text-white text-xs md:text-little font-inter">
                © 2023 Zapian All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <img
            src={
              pathname === "/" || pathname === "/incubator/"
                ? footerBottom
                : footerBottomWhite
            }
            alt="Footer Bottom"
          />
        </div>
      </div>
    </footer>
  );
}
