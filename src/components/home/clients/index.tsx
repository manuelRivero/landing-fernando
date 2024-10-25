import React, { useState } from "react";
import client1 from "./../../../images/home/clients/client1.png";
import client2 from "./../../../images/home/clients/client2.png";
import client3 from "./../../../images/home/clients/client3.png";
import client4 from "./../../../images/home/clients/client4.png";
import client5 from "./../../../images/home/clients/client5.png";
import chevronRight from "./../../../images/icons/chevron-right.svg";
import chevronLeft from "./../../../images/icons/chevron-left.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

const clientsList = [
  {
    src: client1,
    alt: "client-1",
    text1: "",
    text2: "· Ana Pau",
    description:
      "Cuando empecé a posicionarme en las redes me sentía muy perdida. Andy me guió  para elevar mi presencia en línea. Con ella hubo un giro drástico y positivo en mi audiencia. Siempre estaba presente para contestar mis preguntas y mandarme contenido. Gracias a ella me siento más segura con mi contenido y he crecido.",
  },
  {
    src: client2,
    alt: "client-2",
    text1: "Curena Mia",
    text2: "· Jimena de la Torre",
    description:
      "Andy me ayudo a creando mi brand book para mi marca Curena Mía y ella estuvo ahí desde el principio del proceso, desde la creación del nombre hasta los logos y la paleta de color, TODO!  Me encantó lo que me entregó, todo a tiempo y forma, y estoy muy contenta con ella. La recomiendo muchisimo, es una buenaza!",
  },
  {
    src: client3,
    alt: "client-3",
    text1: "Centro de Diseño, Cine y TV ",
    text2: "· Miguel Torres",
    description:
      "Con Andrea estamos ante el ejemplo de la constancia, estamos ante el ejemplo de la disciplina y ante el ejemplo de la persona que de manera rigurosa y cuidadosa siguió metódicamente todos los pasos, todo el proceso de una manera ejemplar.",
  },
  {
    src: client4,
    alt: "client-4",
    text1: "Co-fundador de Teu ",
    text2: "· Fernando Oviedo",
    description:
      "Desde el nombre hasta el sitio web, Zapian nos ha llevado a crear una marca y un producto digital que nos ayuda a posicionarnos y crecer en el mercado. Seguiremos trabajando con ellos.",
  },
  {
    src: client5,
    alt: "client-5",
    text1: "Nomatt ",
    text2: "· Kathy",
    description:
      "Me sentía estancada en el desarrollo de mi marca y el comenzar a trabajar con Andrea me hizo salir de esto pues me fue guiando paso por paso, desde el comienzo sentí que estábamos en la misma sintonía pues siempre capto mis ideas, sin duda se cumplió todo lo que yo buscaba y superó todas mis espectativas.",
  },
];

export default function Clients() {
  const [showSlideInfo, setShowSlideInfo] = useState<number>(-1);
  return (
    <div className="bg-black">
      <div className="py-16 md:pb-36 px-8 md:px-32 container">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3">
            <div className="lg:w-fit">
              <h2 className="text-white text-center font-inter font-bold text-normal">
                REVIEWS <span className="inline lg:hidden"> · Our clients</span>
              </h2>
              <p className="hidden lg:block text-white text-center font-inter text-normal mb-8">
                Our clients
              </p>
              <div className="hidden lg:flex items-center justify-between">
                <button className="custom-prev-btn">
                  <img src={chevronLeft} alt="Chevron Left" />
                </button>
                <button className="custom-next-btn">
                  <img src={chevronRight} alt="Chevron Right" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <Swiper
              breakpoints={{
                1300: {
                  slidesPerView: 3, // Mostrar 3 slides cuando la pantalla sea mayor a 1300px
                },
                700: {
                  slidesPerView: 2, // Mostrar 2 slides entre 900px y 1300px
                },
                0: {
                  slidesPerView: 1, // Mostrar 1 slide si la pantalla es menor a 900px
                },
              }}
              spaceBetween={20}
              freeMode={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: ".custom-prev-btn", // Selector del botón "prev"
                nextEl: ".custom-next-btn", // Selector del botón "next"
              }}
              modules={[FreeMode, Pagination, Navigation]}
            >
              {clientsList.map((logo, index: number) => (
                <SwiperSlide key={`${index}`} className="cursor-pointer">
                  <div
                    className="flex justify-center"
                    onClick={() => {
                      setShowSlideInfo((prev: number) =>
                        prev === index ? -1 : index
                      );
                    }}
                  >
                    <div className="relative w-fit">
                      <img src={logo.src} alt={logo.alt} className="max-w-[220px]" />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={
                          showSlideInfo === index
                            ? { opacity: 1 }
                            : { opacity: 0 }
                        }
                        transition={{ duration: 0.5, ease: "easeOut" }} // Transición suave sin rebote
                        className={`absolute top-0 left-0 h-full`}
                      >
                        <div
                          className={`h-full bg-customBlue-500 rounded-[18px] px-5 transition-all flex flex-col justify-center items-center`}
                        >
                          <p className="text-white text-2xs place-self-start font-inter font-semibold uppercase">
                            {logo.text1}
                            <span className="text-customPink-500">
                              {logo.text2}
                            </span>
                          </p>

                          <p className="text-white text-3xs font-light">
                            {logo.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
