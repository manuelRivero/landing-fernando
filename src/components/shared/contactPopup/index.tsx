import React, { useEffect, useRef, useState } from "react";
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
  const [code, setCode] = useState<string>('');
  const [step, setStep] = useState<number>(1);

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
      setStep(1)
      setCode('')
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
    reset()
    setStep(2)
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    // Limita el valor a solo 4 dígitos numéricos
    if (input.length <= 4) {
      setCode(input);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={contactPopupValue ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }} // Transición suave sin rebote
      className={`${
        contactPopupValue ? "fixed" : "hidden"
      } h-screen w-full flex justify-center items-center z-20 overflow-y-auto bg-black bg-opacity-30`}
    >
      <div
        ref={childRef}
        className={`w-[316px] md:w-[450px] lg:w-[825px] ${step !== 1 && "mt-[500px]"}`}
      >
        <div className={`bg-white ${step === 1 ? "rounded-[32px]" : "rounded-t-[32px] pb-0"} flex flex-col space-y-6 p-7`}>
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

            <div className="flex flex-row space-x-4 items-start justify-between ">
              <p className="rounded-full bg-customYellow-500 text-xs md:text-normal text-customBlue-600 px-6 py-2 font-bold text-nowrap">
                MX: +52
              </p>
              <div className="w-full">
                <input
                  type="number"
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
        {step > 1 && <div className={`bg-customBlue-600 ${step === 2 && "rounded-b-[32px] mb-10"}`}>
          <div className="h-10 bg-white rounded-b-[32px]" />
          <div className={`p-7 ${step > 2 && "pb-0"} flex flex-col space-y-6`}>
            <h3 className="text-customYellow-500 text-xs md:text-normal uppercase font-bold">
              Place here the 4-digit code delivered to your phone
            </h3>

            <input
              type="number"
              value={code}
              onChange={handleChange}
              className="placeholder-customGreen-500 rounded-full w-full border border-customGreen-500 bg-transparent px-6 py-2 text-xs md:text-normal text-customGreen-500"
              placeholder="DIGIT CODE"
            />

            <div className="flex justify-center">
              <button
                disabled={code.length !== 4 && step < 3}
                onClick={() => {
                  setStep(3)
                  setCode('')
                }}
                className={`${code.length !== 4 && "opacity-60"} bg-customYellow-500 px-7 py-2 rounded-full text-customBlue-600 text-xs md:text-normal text-center font-bold`}
              >
                OK
              </button>
            </div>
          </div>
        </div>}
        {step > 2 && <div className="bg-customYellow-500 rounded-b-[32px] mb-10">
          <div className="h-10 bg-customBlue-600 rounded-b-[32px]" />
          <div className="p-7">
            <h3 className="text-customBlue-600 text-center text-xs md:text-normal uppercase font-bold">
              Thanks for contacting us!
            </h3>
            <h3 className="text-customBlue-600 text-center text-xs md:text-normal uppercase font-bold">
              We’ll get in touch
            </h3>
          </div>
        </div>}
      </div>
    </motion.div>
  );
}
