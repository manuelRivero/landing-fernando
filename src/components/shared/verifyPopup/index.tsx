import React, { useEffect, useRef } from "react";
import { useLocation } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { setSubscribePopup, showVerifyPopup } from "../../../store/global";
import { RootState } from "../../../store";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

interface VerifyData {
  email: string;
  phone: string;
}

export default function VerifyPopup() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { verifyPopupValue, subscribePopup } = useSelector(
    (state: RootState) => state.global
  );
  const childRef = useRef<HTMLDivElement>(null);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    phone: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VerifyData>({
    resolver: yupResolver(schema),
  });

  const handleClickOutside = (event: MouseEvent) => {
    // Verifica si el clic ocurrió fuera del div hijo
    if (childRef.current && !childRef.current.contains(event.target as Node)) {
      dispatch(showVerifyPopup(false));
      dispatch(setSubscribePopup(false));
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

  const onSubmit: SubmitHandler<VerifyData> = async (data) => {
    console.log("Sent data", data);
    reset();
  };

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
          pathname === "/incubator/" || subscribePopup
            ? "bg-white"
            : "bg-customBlue-600"
        } rounded-[32px] w-[316px] md:w-[450px] lg:w-[825px] p-7`}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          <h3
            className={`${
              pathname === "/incubator/" || subscribePopup
                ? "text-black"
                : "text-white"
            } text-xs md:text-normal uppercase pr-14 font-bold`}
          >
            {pathname === "/incubator/" || subscribePopup
              ? "Subscribe to the newsletter"
              : "Create an account and chat with us to make informed business decisions"}
          </h3>

          <div className="flex flex-row space-x-4 items-start justify-between ">
            <p
              className={`${
                pathname === "/incubator/" || subscribePopup
                  ? "bg-customBlue-500 text-customPink-500"
                  : "bg-customGreen-500 text-customBlue-600"
              } rounded-full text-xs md:text-normal px-6 py-2 font-bold text-nowrap`}
            >
              MX: +52
            </p>
            <div className="w-full">
              <input
                {...register("phone")}
                type="number"
                className={`${
                  pathname === "/incubator/" || subscribePopup
                    ? "border-customBlue-500 text-customBlue-500 placeholder-customBlue-500"
                    : "border-white text-white placeholder-white"
                } rounded-full w-full border bg-transparent px-6 py-2 text-xs md:text-normal`}
                placeholder={
                  pathname === "/incubator/" || subscribePopup
                    ? "PHONE NUMBER"
                    : "YOUR WHATSAPP"
                }
              />
              <p className="text-tight md:text-xs text-red-500">
                {errors.phone?.message}
              </p>
            </div>
          </div>
          <div>
            <input
              {...register("email")}
              type="text"
              className={`${
                pathname === "/incubator/" || subscribePopup
                  ? "border-customBlue-500 text-customBlue-500 placeholder-customBlue-500"
                  : "border-white text-white placeholder-customGreen-500"
              } rounded-full w-full border bg-transparent px-6 py-2 text-xs md:text-normal`}
              placeholder="EMAIL"
            />
            <p className="text-tight md:text-xs text-red-500">
              {errors.email?.message}
            </p>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`${
                pathname === "/incubator/" || subscribePopup
                  ? "bg-customPink-500 text-customBlue-600"
                  : "bg-customOrange-500 text-customGreen-500"
              } px-7 py-2 rounded-full text-xs md:text-normal text-center font-bold`}
            >
              VERIFY
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
