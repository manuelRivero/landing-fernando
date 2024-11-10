import React, { useState } from "react";
import swiperContainerImg from "./../../../images/web-and-app/swiper-container.png";
import swiperContainerResImg from "./../../../images/web-and-app/swiper-container-res.png";
import planDetailContainerImg from "./../../../images/web-and-app/plan-detail-container.png";
import planDetailContainerResImg from "./../../../images/web-and-app/plan-detail-container-res.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { showContactPopup } from "../../../store/global";
import AnimateSection from "../../shared/animateSection";

export default function Plans() {
  const dispatch = useDispatch();
  const [showSlideInfo, setShowSlideInfo] = useState<number>(-1);

  return (
    <div className="bg-customGreen-500">
      <AnimateSection>
        <div className="pt-16 lg:pt-52 pb-16 md:pb-40 px-8 md:px-32 container">
          <div>
            <Swiper
              breakpoints={{
                1300: {
                  slidesPerView: 3, // Mostrar 3 slides cuando la pantalla sea mayor a 1300px
                },
                1000: {
                  slidesPerView: 2, // Mostrar 2 slides entre 900px y 1300px
                },
                0: {
                  slidesPerView: 1.4, // Mostrar 1 slide si la pantalla es menor a 900px
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
            >
              <SwiperSlide>
                <div className="flex flex-col items-center space-y-8 w-fit">
                  <div
                    onClick={() => {
                      setShowSlideInfo((prev: number) => (prev === 1 ? -1 : 1));
                    }}
                    className="cursor-pointer relative"
                  >
                    <div
                      className={`${
                        showSlideInfo === 1 && "scale-50"
                      } transition-all flex justify-center items-center h-[420px]`}
                    >
                      <div className="relative w-fit h-fit">
                        <img
                          src={swiperContainerImg}
                          alt="swiperContainer"
                          width={"100%"}
                          className="hidden md:block"
                        />
                        <img
                          src={swiperContainerResImg}
                          alt="swiperContainer"
                          width={"100%"}
                          className="block md:hidden"
                        />
                        <div className="absolute bottom-0 left-0 font-inter text-white text-small md:text-normal font-bold uppercase p-8">
                          <h3>Landing · one-time fee</h3>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={
                        showSlideInfo === 1 ? { opacity: 1 } : { opacity: 0 }
                      }
                      transition={{ duration: 0.2, ease: "easeOut" }} // Transición suave sin rebote
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center`}
                    >
                      <div className="flex justify-center">
                        <div className="relative w-fit">
                          <img
                            src={planDetailContainerImg}
                            alt="planDetailContainerImg"
                            width={"100%"}
                            className="hidden md:block"
                          />
                          <img
                            src={planDetailContainerResImg}
                            alt="planDetailContainerImg"
                            width={"100%"}
                            className="block md:hidden"
                          />
                          <div className="absolute w-full h-full top-0 left-0 font-inter text-customBlue-600 p-8 flex flex-col justify-between">
                            <h3 className="font-bold text-little uppercase">
                              Landing
                            </h3>

                            <div className="flex flex-col">
                              <p className="text-2xs leading-tight">
                                · Design and development
                              </p>
                              <p className="text-2xs leading-tight">· 1 page</p>
                              <p className="text-2xs leading-tight">
                                · Web animations (Basic)
                              </p>
                              <p className="text-2xs leading-tight">
                                · Standard features and services
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <button
                    onClick={() => dispatch(showContactPopup(true))}
                    type="button"
                    className="bg-customBlue-600 hover:scale-110 transition-all px-7 py-2 rounded-full text-customGreen-500 text-small md:text-normal text-center font-bold w-fit"
                  >
                    SELECT
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center space-y-8">
                  <div
                    onClick={() => {
                      setShowSlideInfo((prev: number) => (prev === 2 ? -1 : 2));
                    }}
                    className="cursor-pointer relative"
                  >
                    <div
                      className={`${
                        showSlideInfo === 2 && "scale-50"
                      } transition-all flex justify-center items-center h-[420px]`}
                    >
                      <div className="relative w-fit h-fit">
                        <img
                            src={swiperContainerImg}
                            alt="swiperContainer"
                            width={"100%"}
                            className="hidden md:block"
                          />
                          <img
                            src={swiperContainerResImg}
                            alt="swiperContainer"
                            width={"100%"}
                            className="block md:hidden"
                          />
                        <div className="absolute bottom-0 left-0 font-inter text-white text-small md:text-normal font-bold uppercase p-8">
                          <h3>Standard Development · one-time fee</h3>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={
                        showSlideInfo === 2 ? { opacity: 1 } : { opacity: 0 }
                      }
                      transition={{ duration: 0.2, ease: "easeOut" }} // Transición suave sin rebote
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full flex justify-center items-center`}
                    >
                      <div className="flex justify-center">
                        <div className="relative w-fit">
                        <img
                            src={planDetailContainerImg}
                            alt="planDetailContainerImg"
                            width={"100%"}
                            className="hidden md:block"
                          />
                          <img
                            src={planDetailContainerResImg}
                            alt="planDetailContainerImg"
                            width={"100%"}
                            className="block md:hidden"
                          />
                          <div className="absolute w-full h-full top-0 left-0 font-inter text-customBlue-600 p-8 flex flex-col justify-between">
                            <h3 className="font-bold text-little uppercase pr-8 leading-tight">
                              Standard Development
                            </h3>

                            <div className="flex flex-col">
                              <p className="text-[12px] leading-tight">
                                · Design and development
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Up to 3 pages
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Web animations (Intermediate)
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Standard back-office design
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Enhanced features and services
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Intermediate integrations and APIs
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Accept Payment
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Web customization by cookies/page
                                (Intermediate)
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Annual maintenance (Regular)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <button
                    onClick={() => dispatch(showContactPopup(true))}
                    type="button"
                    className="bg-customBlue-600 hover:scale-110 transition-all px-7 py-2 rounded-full text-customGreen-500 text-small md:text-normal text-center font-bold w-fit"
                  >
                    SELECT
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center space-y-8">
                  <div
                    onClick={() => {
                      setShowSlideInfo((prev: number) => (prev === 3 ? -1 : 3));
                    }}
                    className="cursor-pointer relative"
                  >
                    <div
                      className={`${
                        showSlideInfo === 3 && "scale-50"
                      } transition-all flex justify-center items-center h-[420px]`}
                    >
                      <div className="relative w-fit h-fit">
                        <img
                            src={swiperContainerImg}
                            alt="swiperContainer"
                            width={"100%"}
                            className="hidden md:block"
                          />
                          <img
                            src={swiperContainerResImg}
                            alt="swiperContainer"
                            width={"100%"}
                            className="block md:hidden"
                          />
                        <div className="absolute bottom-0 left-0 font-inter text-white text-small md:text-normal font-bold uppercase p-8">
                          <h3>Premium Development · one-time fee</h3>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={
                        showSlideInfo === 3 ? { opacity: 1 } : { opacity: 0 }
                      }
                      transition={{ duration: 0.2, ease: "easeOut" }} // Transición suave sin rebote
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full flex justify-center items-center`}
                    >
                      <div className="flex justify-center">
                        <div className="relative w-fit">
                          <img
                              src={planDetailContainerImg}
                              alt="planDetailContainerImg"
                              width={"100%"}
                              className="hidden md:block"
                            />
                            <img
                              src={planDetailContainerResImg}
                              alt="planDetailContainerImg"
                              width={"100%"}
                              className="block md:hidden"
                            />
                          <div className="absolute w-full h-full top-0 left-0 font-inter text-customBlue-600 p-8 flex flex-col justify-between">
                            <h3 className="font-bold text-little uppercase pr-8 leading-tight">
                              Premium Development
                            </h3>

                            <div className="flex flex-col">
                              <p className="text-[12px] leading-tight">
                                · Design and development
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Up to 10 pages
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Web animations (Advanced)
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Customized back-office design
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Accept Payment
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Advanced features and services
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Advanced integrations and APIs
                              </p>
                              <p className="text-[12px] leading-tight">
                                · Web customization by cookies/page (Advanced)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <button
                    onClick={() => dispatch(showContactPopup(true))}
                    type="button"
                    className="bg-customBlue-600 hover:scale-110 transition-all px-7 py-2 rounded-full text-customGreen-500 text-small md:text-normal text-center font-bold w-fit"
                  >
                    SELECT
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </AnimateSection>
    </div>
  );
}
