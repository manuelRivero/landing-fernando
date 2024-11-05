import React, { useState } from "react";
import { useLocation } from "@reach/router";
import { motion } from "framer-motion";

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
            <motion.div
              initial={{ opacity: 0 }}
              animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center mt-4"
            >
              <p className="text-center">{description}</p>
            </motion.div>
          )}
        </div>

        <div
          className="col-span-1 place-self-end self-start cursor-pointer"
          onClick={() => handleOpen()}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            className={`cursor-pointer transition-colors
          ${
            isOpen
              ? location.pathname === "/"
                ? "text-customPink-400"
                : "text-" + plusColor
              : "text-" + plusColor
          }`}
            animate={{
              rotate: isOpen ? 45 : 0,
            }}
          >
            <motion.path
              d="M31.1801 13.8301H20.29V2.94006C20.29 1.38006 19.03 0.120117 17.47 0.120117C15.91 0.120117 14.65 1.38006 14.65 2.94006V13.8301H3.76001C2.20001 13.8301 0.939941 15.0901 0.939941 16.6501C0.939941 18.2101 2.20001 19.4701 3.76001 19.4701H14.65V30.3601C14.65 31.9201 15.91 33.1802 17.47 33.1802C19.03 33.1802 20.29 31.9201 20.29 30.3601V19.4701H31.1801C32.7401 19.4701 34 18.2101 34 16.6501C34 15.0901 32.7401 13.8301 31.1801 13.8301Z"
              className="fill-current" // `fill-current` permite que el color del relleno siga el color del texto
            />
          </motion.svg>
        </div>
      </div>
    </div>
  );
}
