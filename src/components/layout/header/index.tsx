import React from "react";
import zapianLogo from "./../../../images/logos/zapian-logo.svg";
import burguerMenu from "./../../../images/icons/burger-menu.svg";

interface Props {
    onToggleMenu: () => void
}

export default function Header({onToggleMenu}: Props) {
  return (
    <header className="container mx-0 fixed md:absolute bg-black top-0 left-1/2 -translate-x-1/2 p-8 lg:p-16 z-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-center items-center">
          <img src={zapianLogo} alt="Zapian logo" />
        </div>
        <div className="flex flex-row justify-center items-center">
          <img
            src={burguerMenu}
            alt="Burguer menu"
            className="cursor-pointer"
            onClick={() => onToggleMenu()}
          />
        </div>
      </div>
    </header>
  );
}
