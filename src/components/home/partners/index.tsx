import React from "react";
import nusaLogo from "./../../../images/logos/nusa-studio-logo.svg";
import brandWithLogo from "./../../../images/logos/brand-with-logo.svg";
import teuLogo from "./../../../images/logos/teu-logo.svg";
import ardenteLogo from "./../../../images/logos/ardente-logo.svg";
import cieloLogo from "./../../../images/logos/cielo-logo.svg";
import ubuLogo from "./../../../images/logos/ubu-logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import { ImageType } from "../../../types/imageType";
import AnimateSection from "../../shared/animateSection";

const logosData: ImageType[] = [
  { src: nusaLogo, alt: "nusa-logo" },
  { src: brandWithLogo, alt: "brand-with-logo" },
  { src: teuLogo, alt: "teu-logo" },
  { src: ardenteLogo, alt: "ardente-logo" },
  { src: cieloLogo, alt: "cielo-logo" },
  { src: ubuLogo, alt: "ubu-logo" },
];

export default function Partners() {
  return (
    <div className="bg-black">
      <AnimateSection orientation="vertical">
        <div className="py-16 md:py-32 md:pb-40 px-8 md:px-32 container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-11">
            <h2 className="text-white text-center lg:text-left font-inter font-bold text-2xl md:text-3xl uppercase leading-none">
              We’ve got the trust of
            </h2>
            <h3 className="text-white text-center lg:text-left font-inter font-bold text-xs md:text-normal leading-tight">
              Brand With, Nusa, UBU, Ardente, Casa del Cielo, Teu, Instructivo
              del alma, <span className="font-normal">and more.</span>
            </h3>
          </div>

          <div>
            <Swiper
              breakpoints={{
                1300: {
                  slidesPerView: 6, // Mostrar 3 slides cuando la pantalla sea mayor a 1300px
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
                el: '.pagination-2',
              }}
              modules={[FreeMode, Pagination]}
            >
              {logosData.map((logo: ImageType, index: number) => (
                <SwiperSlide key={`${index}`}>
                  <div className="flex justify-center">
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="pagination-2 my-custom-pagination md:hidden"></div>
          </div>
        </div>
      </AnimateSection>
    </div>
  );
}
