import React, { useState } from "react";
import swiperContainerImg from "./../../../images/incubator/swiper-container.png";
import aplicationDetailContainerImg from "./../../../images/incubator/aplication-detail-container.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import CustomButton from "../../shared/customButton";
import { useDispatch } from "react-redux";
import { showContactPopup } from "../../../store/global";

const applicationDetails = [
  {
    title: "Application",
    description:
      "Kickstart your journey by completing our application form. Share insights into your business, challenges, and aspirations.",
  },
  {
    title: "Rapid Assessment",
    description:
      "Our team reviews applications, identifying businesses with the most potential for exponential growth. You can expect a response within the next two weeks of submitting your application.",
  },
  {
    title: "Coaching Sessions",
    description:
      "Selected applicants receive a consultation – an exclusive opportunity to discuss your business intricacies and explore how the Incubator Program can elevate your success.",
  },
];

export default function Applications() {
  const dispatch = useDispatch();
  const [showSlideInfo, setShowSlideInfo] = useState<number>(-1);
  return (
    <div className="bg-customOrange-500">
      <div className="py-16 md:pb-32 md:pt-32 lg:pt-52 px-8 md:px-32 container">
        <div className="mb-16">
          <h1 className="text-white text-center font-bold text-small md:text-3xl uppercase leading-tight">
            Applications now open for our Autumn program
          </h1>
          <p className="text-center text-customGreen-500 text-xs md:text-normal font-semibold">
            How It Works
          </p>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3 flex flex-col items-center">
            <div className="lg:w-fit">
              <div className="flex justify-center mb-8">
                <CustomButton
                  bgColor="customGreen-500"
                  text="APPLY NOW"
                  cb={() => dispatch(showContactPopup(true))}
                />
              </div>
              <div className="hidden lg:flex items-center justify-between px-8">
                <button className="custom-prev-btn">
                  <svg
                    width="19"
                    height="33"
                    viewBox="0 0 19 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.599861 18.04L14.7199 32.3198C15.5199 33.1298 16.8199 33.1298 17.6299 32.3198C18.4299 31.5098 18.4299 30.1899 17.6299 29.3799L4.86985 16.4702L17.6299 3.56006C18.4299 2.75006 18.4299 1.43012 17.6299 0.620117C17.2299 0.210117 16.6998 0.00976562 16.1798 0.00976562C15.6498 0.00976562 15.1299 0.210117 14.7299 0.620117L0.609856 14.8999C0.179856 15.3299 -0.0101408 15.9002 0.0198592 16.4702C-0.0201408 17.0402 0.169861 17.61 0.599861 18.04Z"
                      fill="#1BE5A6"
                    />
                  </svg>
                </button>
                <button className="custom-next-btn">
                  <svg
                    width="19"
                    height="34"
                    viewBox="0 0 19 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0199 15.7506L3.89988 1.47078C3.09988 0.660781 1.79989 0.660781 0.989893 1.47078C0.189893 2.28078 0.189893 3.60072 0.989893 4.41072L13.7499 17.3204L0.989893 30.2305C0.189893 31.0405 0.189893 32.3605 0.989893 33.1705C1.38989 33.5805 1.91989 33.7803 2.43989 33.7803C2.96989 33.7803 3.4899 33.5805 3.8899 33.1705L18.0099 18.8907C18.4399 18.4607 18.6299 17.8904 18.5999 17.3204C18.6399 16.7604 18.4399 16.1906 18.0199 15.7506Z"
                      fill="#1BE5A6"
                    />
                  </svg>
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
              {applicationDetails.map((item, index: number) => (
                <SwiperSlide key={`${item.title}-${index}`}>
                  <div className="flex flex-col items-center space-y-8">
                    <div
                      onClick={() => {
                        setShowSlideInfo((prev: number) =>
                          prev === index ? -1 : index
                        );
                      }}
                      className="cursor-pointer relative"
                    >
                      <div className="flex">
                        <div className="relative w-fit h-fit">
                          <img
                            src={swiperContainerImg}
                            alt="swiperContainer"
                            width={"100%"}
                          />
                          <div className="absolute bottom-0 left-0 font-inter text-customGreen-500 text-normal font-bold uppercase p-8">
                            <h3>{item.title}</h3>
                          </div>
                        </div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={
                          showSlideInfo === index
                            ? { opacity: 1 }
                            : { opacity: 0 }
                        }
                        transition={{ duration: 0.5, ease: "easeOut" }} // Transición suave sin rebote
                        className={`absolute top-0 left-0 w-full flex justify-center items-center`}
                      >
                        <div className="flex justify-center">
                          <div className="relative w-fit">
                            <img
                              src={aplicationDetailContainerImg}
                              alt="planDetailContainerImg"
                              width={"100%"}
                            />
                            <div className="absolute w-full h-full top-0 left-0 font-inter text-customOrange-500 p-8 flex flex-col justify-between">
                              <h3 className="font-bold text-tight md:text-little uppercase">
                                {item.title}
                              </h3>

                              <p className="text-3xs md:text-tight leading-tight text-customOrange-500">
                                {item.description}
                              </p>
                            </div>
                          </div>
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
