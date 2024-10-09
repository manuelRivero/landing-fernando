import React, { useEffect, useRef } from "react";
import { useLocation } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { showVerifyPopup } from "../../../store/global";
import { RootState } from "../../../store";

export default function VerifyPopup() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { verifyPopupValue } = useSelector((state: RootState) => state.global);
  const childRef = useRef<HTMLDivElement>(null); // Referencia al div hijo

  // Función para cerrar ambos divs
  const handleClickOutside = (event: MouseEvent) => {
    // Verifica si el clic ocurrió fuera del div hijo
    if (childRef.current && !childRef.current.contains(event.target as Node)) {
      dispatch(showVerifyPopup(false));
    }
  };

  useEffect(() => {
    // Agregar evento de clic en el documento
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Limpiar el evento cuando el componente se desmonte
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={verifyPopupValue ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${
        verifyPopupValue ? "fixed" : "hidden"
      } h-screen w-full flex justify-center items-center z-20 overflow-hidde bg-black bg-opacity-30`}
    >
      <div
        ref={childRef}
        className={`${
          pathname === "/incubator/" ? "bg-white" : "bg-customBlue-600"
        } rounded-[32px] lg:w-[825px] p-7  flex flex-col space-y-6`}
      >
        <h3
          className={`${
            pathname === "/incubator/" ? "text-black" : "text-white"
          } text-normal uppercase pr-14 font-bold`}
        >
          {pathname === "/incubator/"
            ? "Subscribe to the newsletter"
            : "Create an account and chat with us to make informed business decisions"}
        </h3>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-between ">
          <p
            className={`${
              pathname === "/incubator/"
                ? "bg-customBlue-500 text-customPink-500"
                : "bg-customGreen-500 text-customBlue-600"
            } rounded-full text-normal px-6 py-2 font-bold text-nowrap`}
          >
            MX: +52
          </p>
          <input
            type="text"
            className={`${
              pathname === "/incubator/"
                ? "border-customBlue-500 text-customBlue-500 placeholder-customBlue-500"
                : "border-white text-white placeholder-white"
            } rounded-full w-full border bg-transparent px-6 py-2 text-normal`}
            placeholder={pathname === "/incubator/"
              ? "PHONE NUMBER"
              : "YOUR WHATSAPP"}
          />
        </div>
        <input
          type="text"
          className={`${
            pathname === "/incubator/"
              ? "border-customBlue-500 text-customBlue-500 placeholder-customBlue-500"
              : "border-white text-white placeholder-customGreen-500"
          } rounded-full w-full border bg-transparent px-6 py-2 text-normal`}
          placeholder="EMAIL"
        />
        <div className="flex justify-center">
          <button
            type="button"
            className={`${
              pathname === "/incubator/"
                ? "bg-customPink-500 text-customBlue-600"
                : "bg-customOrange-500 text-customGreen-500"
            } px-7 py-2 rounded-full text-normal text-center font-bold`}
          >
            VERIFY
          </button>
        </div>
      </div>
    </motion.div>
  );
}
