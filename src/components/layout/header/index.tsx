import React from "react";
import zapianLogo from "./../../../images/logos/zapian-logo.svg";
import zapianLogoBlue from "./../../../images/logos/zapian-logo-blue.png";
import burguerMenu from "./../../../images/icons/burger-menu.svg";
import burguerMenuBlue from "./../../../images/icons/burger-menu-blue.png";
import { useLocation } from "@reach/router";

interface Props {
  onToggleMenu: () => void;
}

export default function Header({ onToggleMenu }: Props) {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header
      className={`${
        location.pathname === "/" || location.pathname === "/incubator/" ? "bg-black" : "bg-white"
      } w-full lg:container mx-0 fixed md:absolute top-0 left-1/2 -translate-x-1/2 p-8 lg:p-16 z-10`}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-center items-center">
          <img src={location.pathname === "/" || location.pathname === "/incubator/" ? zapianLogo : zapianLogoBlue} alt="Zapian logo" />
        </div>
        <div className="flex flex-row justify-center items-center">
          <img
            src={location.pathname === "/" || location.pathname === "/incubator/" ? burguerMenu : burguerMenuBlue}
            alt="Burguer menu"
            className="cursor-pointer"
            onClick={() => onToggleMenu()}
          />
        </div>
      </div>
    </header>
  );
}
