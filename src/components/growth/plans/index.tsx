import React from "react";
import swiperContainerImg from "./../../../images/content-and-growth/swiper-container.png";
import LinkButton from "../../shared/linkButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";

const swiperTexts: string[] = [
    "Starter · STARTER", "Growth Path · STARTER", "Growth hacker · STARTER"
]

export default function Plans() {
  return (
    <div className="bg-customYellow-500">
      <div className="pt-32 lg:pt-52 pb-32 lg:pb-40 px-8 md:px-32 container">
      <div>
          <Swiper
            breakpoints={{
              1300: {
                slidesPerView: 3, // Mostrar 3 slides cuando la pantalla sea mayor a 1300px
              },
              900: {
                slidesPerView: 2, // Mostrar 2 slides entre 900px y 1300px
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
            modules={[FreeMode, Pagination]}
          >
            {swiperTexts.map((text: string, index: number) => (
              <SwiperSlide key={`${text}-${index}`}>
                <div className="flex justify-center">
                  <div className="relative w-fit">
                    <img src={swiperContainerImg} alt="swiperContainer" width={"100%"} />
                    <div className="absolute bottom-0 left-0 font-inter text-white text-normal font-bold uppercase p-8">
                        <h3>{text}</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
