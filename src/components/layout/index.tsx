import React from "react";
import zapianLogo from "./../../images/logos/zapian-logo.svg";
import burguerMenu from "./../../images/icons/burger-menu.svg";

export default function Layout({ children }: JSX.Element) {
  return (
    <main>
      <div className="relative">
        <header className="container mx-0 absolute top-0 left-1/2 -translate-x-1/2 p-16">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-center items-center">
              <img src={zapianLogo} alt="Zapian logo" />
            </div>
            <div className="flex flex-row justify-center items-center">
              <img src={burguerMenu} alt="Burguer menu" />
            </div>
          </div>
        </header>
        {children}
        <footer>
          <h1>Footer</h1>
        </footer>
      </div>
    </main>
  );
}
