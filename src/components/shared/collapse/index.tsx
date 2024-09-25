import React, { useState } from "react";
import plusIcon from "./../../../images/icons/plus.svg";
import closeIcon from "./../../../images/icons/close-pink.svg";
import LinkButton from "../linkButton";

interface Props {
  title: string;
  description?: string;
  icon: string;
  alt: string;
  textColor?: string;
  plusColor?: string;
  buttonData?: {
    text?: string;
    path?: string;
    color?: string;
  };
}

export default function Collapse({
  title,
  description,
  textColor = "white",
  plusColor = "white",
  icon,
  alt,
  buttonData,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`text-${textColor} grid grid-cols-12 items-start py-14 font-inter text-normal cursor-pointer`}
      onClick={() => handleOpen()}
    >
      <div className="col-span-1 place-self-start">
        <img src={icon} alt={alt} />
      </div>

      <div className="col-span-10 place-self-center text-center">
        <div className="cursor-pointer">
          <h2 className="font-bold uppercase px-4">{title}</h2>
        </div>
        {isOpen && (
          <div>
            <p className="mb-11">{description}</p>
            <LinkButton
              text={buttonData?.text}
              path={buttonData?.path}
              color={buttonData?.color}
            />
          </div>
        )}
      </div>

      <div className="col-span-1 place-self-end self-start">
        {isOpen ? (
          <img src={closeIcon} alt="Plus icon" />
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
  );
}
