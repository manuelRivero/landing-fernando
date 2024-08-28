import React from "react";
import computerImg from "./../../../images/home/computer.png";
import spinerIcon from "./../../../images/icons/spiner.svg";
import star8 from "./../../../images/icons/star-8.svg";
import star4 from "./../../../images/icons/star-4.svg";
import { Link } from "gatsby";
import InfoCard from "../../shared/infoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import LinkButton from "../../shared/linkButton";

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
    title: "Data",
    description:
      "Our data-driven approach ensures strategic insights for sustainable success.",
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
  return (
    <div className="bg-black">
      <div className="pt-52 pb-40 px-32 container">
        <div className="mb-11">
          <h1 className="text-white font-inter font-bold text-9xl uppercase leading-customLineHeight">
            Empowering Your Business{" "}
            <span className="text-customPink">Growth</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-32">
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-2xl font-bold">
              WEB · BRANDING · GROWTH
            </h2>
            <LinkButton
              text="Explore Our Services"
              path="#"
              color="customPurple"
            />
          </div>

          <div className="flex flex-row justify-end">
            <img src={computerImg} alt="Computer" />
          </div>
        </div>

        <div className="hidden xl:grid grid-cols-3 gap-8">
          {cardsContent.map((card: Card) => (
            <InfoCard
              title={card.title}
              description={card.description}
              icon={card.icon}
              alt={card.alt}
            />
          ))}
        </div>
        <div className="block xl:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={200}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
          >
            {cardsContent.map((card: Card, index: number) => (
              <SwiperSlide key={`${card.title}-${index}`}>
                <InfoCard
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  alt={card.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
