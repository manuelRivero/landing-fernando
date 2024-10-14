import React, { useState } from "react";
import { useLocation } from "@reach/router";
import { useDispatch } from "react-redux";

interface Props {
  title: string;
  description?: string;
  icon: string;
  alt: string;
  textColor?: string;
  plusColor?: string;
}

export default function Collapse({
  title,
  description,
  textColor = "white",
  plusColor = "white",
  icon,
  alt,
}: Props) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <div
        className={`text-${textColor} grid grid-cols-12 items-start py-14 font-inter text-xs md:text-normal`}
      >
        <div className="col-span-1 place-self-start">
          <img src={icon} alt={alt} />
        </div>

        <div className="col-span-10 place-self-center">
          <div>
            <h2 className="font-bold uppercase px-4 text-center">{title}</h2>
          </div>
          {isOpen && (
            <div className="flex flex-col items-center mt-4">
              <p className={location.pathname === "/" ? "text-center" : ""}>
                {description}
              </p>
            </div>
          )}
        </div>

        <div
          className="col-span-1 place-self-end self-start cursor-pointer"
          onClick={() => handleOpen()}
        >
          {isOpen ? (
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.81 20.9308L17.1099 13.2308L24.81 5.53081C25.91 4.43081 25.91 2.64082 24.81 1.54082C23.71 0.44082 21.9199 0.44082 20.8199 1.54082L13.1199 9.24077L5.41997 1.54082C4.31997 0.44082 2.52998 0.44082 1.42998 1.54082C0.32998 2.64082 0.32998 4.43081 1.42998 5.53081L9.12993 13.2308L1.42998 20.9308C0.32998 22.0308 0.32998 23.8208 1.42998 24.9208C2.52998 26.0208 4.31997 26.0208 5.41997 24.9208L13.1199 17.2208L20.8199 24.9208C21.9199 26.0208 23.71 26.0208 24.81 24.9208C25.91 23.8208 25.91 22.0308 24.81 20.9308Z"
                fill={location.pathname === "/" ? "#E886DF" : plusColor}
              />
            </svg>
          ) : (
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              xmlns="http://www.w3.org/2000/svg"
              fill={plusColor}
            >
              <path
                d="M31.1801 13.8301H20.29V2.94006C20.29 1.38006 19.03 0.120117 17.47 0.120117C15.91 0.120117 14.65 1.38006 14.65 2.94006V13.8301H3.76001C2.20001 13.8301 0.939941 15.0901 0.939941 16.6501C0.939941 18.2101 2.20001 19.4701 3.76001 19.4701H14.65V30.3601C14.65 31.9201 15.91 33.1802 17.47 33.1802C19.03 33.1802 20.29 31.9201 20.29 30.3601V19.4701H31.1801C32.7401 19.4701 34 18.2101 34 16.6501C34 15.0901 32.7401 13.8301 31.1801 13.8301Z"
                className={`fill-${plusColor}`}
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
