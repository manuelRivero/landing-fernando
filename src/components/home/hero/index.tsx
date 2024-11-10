import React from "react";
import computerImg from "./../../../images/home/computer.png";
import spinerIcon from "./../../../images/icons/spiner.svg";
import star8 from "./../../../images/icons/star-8.svg";
import star4 from "./../../../images/icons/star-4.svg";
import InfoCard from "../../shared/infoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import CustomButton from "../../shared/customButton";
import { useDispatch } from "react-redux";
import { showContactPopup } from "../../../store/global";
import AnimateSection from "../../shared/animateSection";

interface Card {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

const cardsContent: Card[] = [
  {
    title: "Technology",
    description:
      "Solutions tailored to elevate your digital presence and streamline operations.",
    icon: spinerIcon,
    alt: "Spiner Icon",
  },
  {
    title: "Design",
    description:
      "Our design-driven approach ensures strategic development and brand success.",
    icon: star8,
    alt: "Star 8",
  },
  {
    title: "Innovation",
    description:
      "Facilitating your enterprise to stay ahead in a dynamic business landscape.",
    icon: star4,
    alt: "Star 8",
  },
];

export default function Hero() {
  const dispatch = useDispatch();

  return (
    <div className="bg-black">
      <div className="pt-32 md:pt-52 pb-16 md:pb-40 px-8 md:px-32 container">
        <div className="mb-11">
          <h1 className="text-white text-center md:text-left font-inter font-bold text-2xl md:text-3xl lg:text-9xl uppercase leading-tight lg:leading-customLineHeight">
            Empowering Your Business{" "}
            <span className="text-customPink-500">Growth</span>
          </h1>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center mb-8 md:mb-32">
          <div className="flex flex-col space-y-4 items-center lg:items-start">
            <h2 className="text-white text-center lg:text-left text-normal md:text-2xl font-bold">
              WEB · BRANDING · GROWTH
            </h2>
            <CustomButton
              bgColor="customPurple-500"
              textColor="white"
              text="GET QUOTE"
              cb={() => dispatch(showContactPopup(true))}
            />
          </div>

          <div className="flex flex-row justify-end mb-8 lg:mb-0">
            <img src={computerImg} alt="Computer" />
          </div>
        </div>
        <AnimateSection orientation="vertical">
          <div>
            <Swiper
              breakpoints={{
                1300: {
                  slidesPerView: 3, // Mostrar 3 slides cuando la pantalla sea mayor a 1300px
                },
                1080: {
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
                el: '.pagination-1',
              }}
              modules={[FreeMode, Pagination]}
            >
              {cardsContent.map((card: Card, index: number) => (
                <SwiperSlide key={`${card.title}-${index}`}>
                  <div className="flex justify-center">
                    <InfoCard
                      title={card.title}
                      description={card.description}
                      icon={card.icon}
                      alt={card.alt}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="pagination-1 my-custom-pagination md:hidden"></div>
          </div>
        </AnimateSection>
      </div>
    </div>
  );
}
