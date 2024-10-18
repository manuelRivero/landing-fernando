import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { showContactPopup } from "../../../store/global";
import { RootState } from "../../../store";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPopup() {
  const dispatch = useDispatch();
  const { contactPopupValue } = useSelector((state: RootState) => state.global);
  const childRef = useRef<HTMLDivElement>(null); // Referencia al div hijo

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactData>({
    resolver: yupResolver(schema),
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (childRef.current && !childRef.current.contains(event.target as Node)) {
      dispatch(showContactPopup(false));
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

  const onSubmit: SubmitHandler<ContactData> = async (data) => {
    console.log("Sent data", data);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={contactPopupValue ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }} // Transición suave sin rebote
      className={`${
        contactPopupValue ? "fixed" : "hidden"
      } h-screen w-full flex justify-center items-center z-20 overflow-hidde bg-black bg-opacity-30`}
    >
      <div
        ref={childRef}
        className="bg-white rounded-[32px] w-[316px] md:w-[450px] lg:w-[825px] p-7 flex flex-col space-y-6"
      >
        <h3 className="text-customBlue-600 text-xs md:text-normal uppercase font-bold">
          Contact us to address your concerns and work together to grow your
          business
        </h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          <div>
            <input
              type="text"
              className="placeholder-customYellow-500 rounded-full w-full border border-customYellow-500 bg-transparent px-6 py-2 text-xs md:text-normal text-customYellow-500"
              placeholder="NAME"
              {...register("name")}
            />
            <p className="text-tight md:text-xs text-red-500">
              {errors.name?.message}
            </p>
          </div>
          <div>
            <input
              type="text"
              className="placeholder-customYellow-500 rounded-full w-full border border-customYellow-500 bg-transparent px-6 py-2 text-xs md:text-normal text-customYellow-500"
              placeholder="EMAIL"
              {...register("email")}
            />
            <p className="text-tight md:text-xs text-red-500">
              {errors.email?.message}
            </p>
          </div>

          <div className="flex flex-row space-x-4 items-center justify-between ">
            <p className="rounded-full bg-customYellow-500 text-xs md:text-normal text-customBlue-600 px-6 py-2 font-bold text-nowrap">
              MX: +52
            </p>
            <div className="w-full">
              <input
                type="text"
                className="placeholder-customYellow-500 rounded-full w-full border border-customYellow-500 bg-transparent px-6 py-2 text-xs md:text-normal text-customYellow-500"
                placeholder="PHONE NUMBER"
                {...register("phone")}
              />
              <p className="text-tight md:text-xs text-red-500">
                {errors.phone?.message}
              </p>
            </div>
          </div>
          <div>
            <textarea
              className="placeholder-customYellow-500 rounded-[32px] w-full border border-customYellow-500 bg-transparent px-6 py-2 text-xs md:text-normal text-customYellow-500"
              placeholder="MESSAGE"
              {...register("message")}
            />
            <p className="text-tight md:text-xs text-red-500">
              {errors.message?.message}
            </p>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-customGreen-500 px-7 py-2 rounded-full text-customBlue-600 text-xs md:text-normal text-center font-bold"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
