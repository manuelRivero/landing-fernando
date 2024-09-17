import React from "react";
import client1 from "./../../../images/home/clients/client1.png";
import client2 from "./../../../images/home/clients/client2.png";
import client3 from "./../../../images/home/clients/client3.png";
import chevronRight from "./../../../images/icons/chevron-right.svg";
import chevronLeft from "./../../../images/icons/chevron-left.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { ImageType } from "../../../types/imageType";

const clientsList: ImageType[] = [
  { src: client1, alt: "client-1" },
  { src: client2, alt: "client-2" },
  { src: client3, alt: "client-3" },
  { src: client1, alt: "client-1" },
  { src: client2, alt: "client-2" },
  { src: client3, alt: "client-3" },
];

export default function Clients() {
  return (
    <div className="bg-black">
      <div className="pb-36 px-8 md:px-32 container">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3">
            <div className="lg:w-fit">
              <h2 className="text-white text-center font-inter font-bold text-normal">
                REVIEWS <span className="inline lg:hidden"> · Our clients</span>
              </h2>
              <p className="hidden lg:block text-white text-center font-inter text-normal mb-8">Our clients</p>
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
                  slidesPerView: 2, // Mostrar 1 slide si la pantalla es menor a 900px
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
                  <div className="flex justify-center">
                    <img src={logo.src} alt={logo.alt} />
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
