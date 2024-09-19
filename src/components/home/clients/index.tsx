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
import { ImageType } from "../../../types/imageType";
import { motion } from "framer-motion";

const clientsList = [
  { src: client1, alt: "client-1", text1: "", text2: "", description: "" },
  { src: client2, alt: "client-2", text1: "", text2: "", description: "" },
  { src: client3, alt: "client-3", text1: "", text2: "", description: "" },
  { src: client4, alt: "client-4", text1: "", text2: "", description: "" },
  { src: client5, alt: "client-5", text1: "", text2: "", description: "" },
];

export default function Clients() {
  const [showSlideInfo, setShowSlideInfo] = useState<number>(-1);
  return (
    <div className="bg-black">
      <div className="pb-36 px-8 md:px-32 container">
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
                  slidesPerView: 4, // Mostrar 3 slides cuando la pantalla sea mayor a 1300px
                },
                1080: {
                  slidesPerView: 3, // Mostrar 2 slides entre 900px y 1300px
                },
                0: {
                  slidesPerView: 1, // Mostrar 1 slide si la pantalla es menor a 900px
                },
              }}
              spaceBetween={20}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: ".custom-prev-btn", // Selector del botón "prev"
                nextEl: ".custom-next-btn", // Selector del botón "next"
              }}
              modules={[FreeMode, Pagination, Navigation]}
            >
              {clientsList.map((logo: ImageType, index: number) => (
                <SwiperSlide key={`${index}`}>
                  <div
                    className="flex justify-center"
                    onClick={() => {
                      setShowSlideInfo((prev: number) =>
                        prev === index ? -1 : index
                      );
                    }}
                  >
                    <div className="relative w-fit">
                      <img src={logo.src} alt={logo.alt} />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={showSlideInfo === index ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }} // Transición suave sin rebote
                        className={`absolute top-0 left-0 h-full`}
                      >
                        <div
                          className={`h-full bg-customBlue-500 rounded-[18px] px-5 transition-all flex flex-col justify-center items-center`}
                        >
                          <p className="text-customPink-500 text-2xs place-self-start font-inter font-semibold uppercase">
                            Ana Pau
                          </p>
                          <p className="text-white text-3xs font-light">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Sunt eveniet repellat, molestiae nam ad
                            ducimus soluta placeat magni ut! Quis facilis totam
                            odit debitis aspernatur quos accusantium ipsum
                            voluptas omnis.
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
