import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { showContactPopup } from "../../../store/global";
import { RootState } from "../../../store";

export default function ContactPopup() {
  const dispatch = useDispatch();
  const { contactPopupValue } = useSelector((state: RootState) => state.global);
  const childRef = useRef<HTMLDivElement>(null); // Referencia al div hijo

  // Función para cerrar ambos divs
  const handleClickOutside = (event: MouseEvent) => {
    // Verifica si el clic ocurrió fuera del div hijo
    if (childRef.current && !childRef.current.contains(event.target as Node)) {      
      dispatch(showContactPopup(false));
    }
  };

  useEffect(() => {
    // Agregar evento de clic en el documento
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Limpiar el evento cuando el componente se desmonte
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={contactPopupValue ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }} // Transición suave sin rebote
      className={`${contactPopupValue ? "fixed" : "hidden"} h-screen w-full flex justify-center items-center z-20 overflow-hidde bg-black bg-opacity-30`}
    >
      <div ref={childRef} className="bg-white rounded-[32px] min-w-[300px] lg:w-[825px] p-7 flex flex-col space-y-6">
        <h3 className="text-customBlue-600 text-little lg:text-normal uppercase font-bold">
          Contact us to address your concerns and work together to grow your
          business
        </h3>

        <input
          type="text"
          className="rounded-full w-full border border-customYellow-500 bg-transparent px-6 py-2 text-little lg:text-normal text-customYellow-500"
          placeholder="NAME"
        />
        <input
          type="text"
          className="rounded-full w-full border border-customYellow-500 bg-transparent px-6 py-2 text-little lg:text-normal text-customYellow-500"
          placeholder="EMAIL"
        />

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-between ">
          <p className="rounded-full bg-customYellow-500 text-little lg:text-normal text-customBlue-600 px-6 py-2 font-bold text-nowrap">
            MX: +52
          </p>
          <input
            type="text"
            className="rounded-full w-full border border-customYellow-500 bg-transparent px-6 py-2 text-little lg:text-normal text-customYellow-500"
            placeholder="PHONE NUMBER"
          />
        </div>
        <textarea
          className="rounded-[32px] w-full border border-customYellow-500 bg-transparent px-6 py-2 text-little lg:text-normal text-customYellow-500"
          placeholder="MESSAGE"
        />
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-customGreen-500 px-7 py-2 rounded-full text-customBlue-600 text-little lg:text-normal text-center font-bold"
          >
            SEND
          </button>
        </div>
      </div>
    </motion.div>
  );
}
