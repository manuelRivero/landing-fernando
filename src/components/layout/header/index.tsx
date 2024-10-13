import React from "react";
import zapianLogoDotBlue from "./../../../images/logos/zapian-logo-white-dot-blue.png";
import zapianLogoBlue from "./../../../images/logos/zapian-logo-blue.png";
import zapianLogoPink from "./../../../images/logos/zapian-logo-Pink.png";
import zapianLogoDotRed from "./../../../images/logos/zapian-logo-white-dot-red.png";
import { useLocation } from "@reach/router";

interface Props {
  onToggleMenu: () => void;
}

export default function Header({ onToggleMenu }: Props) {
  const location = useLocation();

  const handleIconsColors = (
    location: string
  ): { zapianLogo: string; burgerIconColor: string } => {
    if (location === "/")
      return { zapianLogo: zapianLogoDotBlue, burgerIconColor: "white" };
    else if (location === "/growth-and-funnel/" || location === "/web-and-app/")
      return { zapianLogo: zapianLogoBlue, burgerIconColor: "#2B0B57" };
    else if (location === "/branding/")
      return { zapianLogo: zapianLogoPink, burgerIconColor: "#F94074" };
    else if (location === "/incubator/")
      return { zapianLogo: zapianLogoDotRed, burgerIconColor: "white" };
    else return { zapianLogo: zapianLogoDotBlue, burgerIconColor: "white" };
  };
  return (
    <header
      className={`${
        location.pathname === "/" || location.pathname === "/incubator/"
          ? "bg-black"
          : "bg-white"
      } w-full lg:container mx-0 fixed md:absolute top-0 left-1/2 -translate-x-1/2 p-8 lg:p-16 z-10`}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-center items-center">
          <img
            src={handleIconsColors(location.pathname).zapianLogo}
            alt="Zapian logo"
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={() => onToggleMenu()}
          >
            <path
              d="M30.75 5.66039H2.41003C1.09003 5.66039 0.0300293 4.60039 0.0300293 3.28039C0.0300293 1.96039 1.09003 0.900391 2.41003 0.900391H30.75C32.07 0.900391 33.13 1.96039 33.13 3.28039C33.14 4.60039 32.08 5.66039 30.75 5.66039Z"
              fill={handleIconsColors(location.pathname).burgerIconColor}
            />
            <path
              d="M30.75 15.0608H2.41003C1.09003 15.0608 0.0300293 14.0008 0.0300293 12.6808C0.0300293 11.3608 1.09003 10.3008 2.41003 10.3008H30.75C32.07 10.3008 33.13 11.3608 33.13 12.6808C33.14 14.0008 32.08 15.0608 30.75 15.0608Z"
              fill={handleIconsColors(location.pathname).burgerIconColor}
            />
            <path
              d="M30.75 24.6008H2.41003C1.09003 24.6008 0.0300293 23.5408 0.0300293 22.2208C0.0300293 20.9008 1.09003 19.8408 2.41003 19.8408H30.75C32.07 19.8408 33.13 20.9008 33.13 22.2208C33.14 23.5408 32.08 24.6008 30.75 24.6008Z"
              fill={handleIconsColors(location.pathname).burgerIconColor}
            />
            <path
              d="M30.75 34.0002H2.41003C1.09003 34.0002 0.0300293 32.9402 0.0300293 31.6202C0.0300293 30.3002 1.09003 29.2402 2.41003 29.2402H30.75C32.07 29.2402 33.13 30.3002 33.13 31.6202C33.14 32.9402 32.08 34.0002 30.75 34.0002Z"
              fill={handleIconsColors(location.pathname).burgerIconColor}
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
