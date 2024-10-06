import { Link } from "gatsby";
import React from "react";
import footerTop from "./../../../images/footer-top.png";
import footerBottom from "./../../../images/footer-bottom.png";
import zapianFooter from "./../../../images/logos/zapian-footer.png";
import linkedinLogo from "./../../../images/logos/linkedin-logo.svg";
import instagramLogo from "./../../../images/logos/instagram-logo.svg";
import tiktokLogo from "./../../../images/logos/tiktok-logo.svg";
import whatsappLogo from "./../../../images/logos/whatsapp-logo.svg";
import { ImageType } from "../../../types/imageType";

const importantLinks = [
  { text: "Home", href: "/" },
  { text: "Web", href: "/web-and-app" },
  { text: "Branding", href: "#" },
  { text: "Growth", href: "/growth-and-funnel" },
  { text: "Incubator", href: "#" },
];

const socialMediaList: ImageType[] = [
  { src: linkedinLogo, alt: "linkedin-logo" },
  { src: instagramLogo, alt: "instagram-logo" },
  { src: tiktokLogo, alt: "tiktok-logo" },
  { src: whatsappLogo, alt: "whatsapp-logo" },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container">
        <div className="grid grid-cols-1 px-8">
          <img src={footerTop} alt="" />
        </div>
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8 p-8">
          <div className="col-span-12 lg:col-span-3 flex flex-col space-y-4 lg:space-y-14">
            <h3 className="font-inter text-customOrange-500 text-little md:text-normal uppercase">
              Important links
            </h3>
            {importantLinks.map((linkItem) => (
              <Link
                key={linkItem.text}
                to={linkItem.href}
                type="button"
                className="font-inter text-white text-little md:text-normal font-semibold"
              >
                {linkItem.text}
              </Link>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col space-y-8">
            <div>
              <h3 className="font-inter text-customOrange-500 text-little md:text-normal uppercase">
                Contact
              </h3>
              <p className="text-white text-little md:text-normal">
                hola@zapian.co
              </p>
              <p className="text-white text-little md:text-normal">
                55 0000 0000
              </p>
            </div>
            <div>
              <h3 className="font-inter text-customOrange-500 text-little md:text-normal uppercase">
                Address
              </h3>
              <p className="text-white text-little md:text-normal italic">
                Anzures, 11590 CDMX, México. C. del Pez, Centro, 28004 Madrid,
                España.
              </p>
              <p className="text-white text-little md:text-normal italic">
                S Beverly Dr, Beverly Hills, CA 90212, United States.
              </p>
            </div>
            <div>
              <h3 className="font-inter text-customOrange-500 text-little md:text-normal uppercase">
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
              <h3 className="font-inter text-customOrange-500 text-little md:text-normal uppercase">
                ENGLISH | MEXICO · $0,000
              </h3>
              <p className="text-white text-little md:text-normal italic">
                Prices do not include taxes
              </p>
            </div>
            <div>
              <h3 className="font-inter text-customOrange-500 text-little md:text-normal uppercase">
                We Accept
              </h3>
              <p className="text-white text-little md:text-normal underline">
                Visa | Mastercard | American Express | OXXO | PayPal
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col space-y-8">
            <div>
              <h3 className="font-inter font-normal lg:font-semibold text-customOrange-500 text-little md:text-normal uppercase mb-2">
                Subscribe to the newsletter
              </h3>
              <div className="grid grid-cols-6 gap-2">
                <input
                  type="text"
                  className="col-span-6 md:col-span-4 bg-black rounded-full border border-customOrange-500 text-white px-6 py-1 font-inter"
                />
                <div className="flex justify-center col-span-6 md:col-span-2">
                  <button
                    type="button"
                    className="w-fit bg-customOrange-500 px-6 py-2 rounded-full text-white font-inter lg:uppercase"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="h-full flex flex-col justify-end">
              <h3 className="font-inter text-customOrange-500 text-little md:text-normal uppercase">
                Resource Links:
              </h3>
              <p className="text-white text-little md:text-normal font-inter italic mb-10">
                Free PDF
              </p>
              <div className="flex justify-start items-end mb-4">
                <img src={zapianFooter} alt="Zapian" />
              </div>
              <h3 className="font-inter font-normal text-customOrange-500 text-little md:text-normal uppercase">
                Policies and Terms
              </h3>
              <p className="text-white text-little md:text-normal font-inter">
                Privacy Policy
              </p>
              <p className="text-white text-little md:text-normal font-inter">
                Terms and Conditions of Use
              </p>
              <p className="text-white text-little md:text-normal font-inter">
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
  );
}
