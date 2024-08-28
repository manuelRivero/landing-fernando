import React, { useState } from "react";
import plusIcon from "./../../../images/icons/plus.svg";
import closeIcon from "./../../../images/icons/close-pink.svg";
import LinkButton from "../linkButton";

interface Props {
  title: string;
  description?: string;
  icon: string;
  alt: string;
  buttonData?: {
    text?: string;
    path?: string;
    color?: string;
  };
}

export default function Collapse({
  title,
  description,
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
      className="grid grid-cols-12 items-start py-14 text-white font-inter text-normal cursor-pointer"
      onClick={() => handleOpen()}
    >
      <div className="col-span-1 place-self-start">
        <img src={icon} alt={alt} />
      </div>

      <div className="col-span-10 place-self-center text-center">
        <div className="cursor-pointer">
          <h2 className="font-bold uppercase">{title}</h2>
        </div>
        {isOpen && (
          <div>
            <p className="mb-11">{description}</p>
						<LinkButton text={buttonData?.text} path={buttonData?.path} color={buttonData?.color} />
          </div>
        )}
      </div>

      <div className="col-span-1 place-self-end self-start">
        <img src={isOpen ? closeIcon : plusIcon} alt="Plus icon" />
      </div>
    </div>
  );
}
