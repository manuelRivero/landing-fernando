import React, { useState } from "react";
import swiperContainerImg from "./../../../images/content-and-growth/swiper-container.png";
import planDetailContainerImg from "./../../../images/content-and-growth/plan-detail-container.png";
import LinkButton from "../../shared/linkButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

interface Props {
  close: () => void;
}

const swiperTexts: string[] = [
  "Starter · STARTER",
  "Growth Path · STARTER",
  "Growth hacker · STARTER",
];

export default function Plans({ close }: Props) {
  const [showSlideInfo, setShowSlideInfo] = useState<number>(-1);

  return (
    <div className="bg-customYellow-500">
      <div className="pt-32 lg:pt-52 pb-32 lg:pb-40 px-8 md:px-32 container">
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
            <SwiperSlide>
              <div className="flex flex-col items-center space-y-8">
                <div
                  onClick={() => {
                    setShowSlideInfo((prev: number) => (prev === 1 ? -1 : 1));
                  }}
                  className="cursor-pointer relative"
                >
                  <div className="flex justify-center items-center h-[420px]">
                    <div className="relative w-fit h-fit">
                      <img
                        src={swiperContainerImg}
                        alt="swiperContainer"
                        width={"100%"}
                      />
                      <div className="absolute bottom-0 left-0 font-inter text-white text-normal font-bold uppercase p-8">
                        <h3>Starter · STARTER</h3>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={
                      showSlideInfo === 1 ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ duration: 0.5, ease: "easeOut" }} // Transición suave sin rebote
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center`}
                  >
                    <div className="flex justify-center">
                      <div className="relative w-fit">
                        <img
                          src={planDetailContainerImg}
                          alt="planDetailContainerImg"
                          width={"100%"}
                        />
                        <div className="absolute w-full h-full top-0 left-0 font-inter text-customBlue-600 p-8 flex flex-col justify-between">
                          <h3 className="font-bold text-little uppercase">
                            Starter
                          </h3>

                          <div className="flex flex-col space-y-4">
                            <div>
                              <p className="text-tight leading-tight">
                                Advertising
                              </p>
                              <p className="text-tight leading-tight font-bold">
                                1 campaign(s) on 1 platform(s) (Meta Ads)
                              </p>
                            </div>
                            <div>
                              <p className="text-tight leading-tight">
                                Organic content development
                              </p>
                              <p className="text-tight leading-tight font-bold">
                                8 content(s) on 1 channel(s) (Meta)
                              </p>
                              <p className="text-tight leading-tight font-bold">
                                Creation of 0 SEO blogs
                              </p>
                            </div>
                            <div>
                              <p className="text-tight leading-tight">
                                Flexible
                              </p>
                              <p className="text-tight leading-tight font-bold">
                                Including copy in 2 channels(s) (Meta, Meta Ads)
                              </p>
                              <p className="text-tight leading-tight font-bold">
                                Including design in 2 channels(s) (Meta, Meta
                                Ads)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <button
                  onClick={() => close()}
                  type="button"
                  className="bg-customBlue-600 px-7 py-2 rounded-full text-customYellow-500 text-normal text-center font-bold w-fit"
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
                  <div className="flex justify-center items-center h-[420px]">
                    <div className="relative w-fit h-fit">
                      <img
                        src={swiperContainerImg}
                        alt="swiperContainer"
                        width={"100%"}
                      />
                      <div className="absolute bottom-0 left-0 font-inter text-white text-normal font-bold uppercase p-8">
                        <h3>Growth Path · STARTER</h3>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={
                      showSlideInfo === 2 ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ duration: 0.5, ease: "easeOut" }} // Transición suave sin rebote
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full flex justify-center items-center`}
                  >
                    <div className="flex justify-center">
                      <div className="relative w-fit">
                        <img
                          src={planDetailContainerImg}
                          alt="planDetailContainerImg"
                          width={"100%"}
                        />
                        <div className="absolute w-full h-full top-0 left-0 font-inter text-customBlue-600 p-8 flex flex-col justify-between">
                          <h3 className="font-bold text-little uppercase">
                            Growth Path
                          </h3>

                          <div className="flex flex-col space-y-4">
                            <div>
                              <p className="text-3xs leading-tight">
                                Advertising
                              </p>
                              <p className="text-3xs leading-tight font-bold">
                                3 campaign(s) on 2 platform(s) (2 Meta Ads, 1
                                Google)
                              </p>
                            </div>
                            <div>
                              <p className="text-3xs leading-tight">
                                Organic content development
                              </p>
                              <p className="text-3xs leading-tight font-bold">
                                16 content(s) on 2 channels(s) (Meta, TikTok)
                              </p>
                              <p className="text-3xs leading-tight font-bold">
                                Creation of 1 SEO blog (web needed)
                              </p>
                            </div>
                            <div>
                              <p className="text-3xs leading-tight">
                                Communication automations with leads/clients
                              </p>
                              <p className="text-3xs leading-tight font-bold">
                                1 communication channel (SMS, WhatsApp, Email,
                                Calls) 4 monthly contents
                              </p>
                            </div>
                            <div>
                              <p className="text-3xs leading-tight">Flexible</p>
                              <p className="text-3xs leading-tight font-bold">
                                Including copy in 4 channels(s) (Meta, Meta Ads,
                                Google Ads, Email)
                              </p>
                              <p className="text-3xs leading-tight font-bold">
                                Including design in 3 channels(s) (Meta, Meta
                                Ads, Email)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <button
                  onClick={() => close()}
                  type="button"
                  className="bg-customBlue-600 px-7 py-2 rounded-full text-customYellow-500 text-normal text-center font-bold w-fit"
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
                  <div className="flex justify-center items-center h-[420px]">
                    <div className="relative w-fit h-fit">
                      <img
                        src={swiperContainerImg}
                        alt="swiperContainer"
                        width={"100%"}
                      />
                      <div className="absolute bottom-0 left-0 font-inter text-white text-normal font-bold uppercase p-8">
                        <h3>Growth hacker · STARTER</h3>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={
                      showSlideInfo === 3 ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ duration: 0.5, ease: "easeOut" }} // Transición suave sin rebote
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full flex justify-center items-center`}
                  >
                    <div className="flex justify-center">
                      <div className="relative w-fit">
                        <img
                          src={planDetailContainerImg}
                          alt="planDetailContainerImg"
                          width={"100%"}
                        />
                        <div className="absolute w-full h-full top-0 left-0 font-inter text-customBlue-600 p-8 flex flex-col justify-between">
                          <h3 className="font-bold text-little uppercase">
                            Growth Hacker
                          </h3>

                          <div className="flex flex-col space-y-4">
                            <div>
                              <p className="text-3xs leading-tight">
                                Advertising
                              </p>
                              <p className="text-3xs leading-tight font-bold">
                                4 campaign(s) on 3 platform(s) (2 Meta Ads, 1
                                Google, 1 TikTok)
                              </p>
                            </div>
                            <div>
                              <p className="text-3xs leading-tight">
                                Organic content development
                              </p>
                              <p className="text-3xs leading-tight font-bold">
                                20 content(s) on 2 channels(s) (Meta, TikTok)
                              </p>
                              <p className="text-3xs leading-tight font-bold">
                                Creation of 4 SEO blogs (web needed)
                              </p>
                            </div>
                            <div>
                              <p className="text-3xs leading-tight">
                                Communication automations with leads/clients
                              </p>
                              <p className="text-3xs leading-tight font-bold">
                                2 communication channels (SMS, WhatsApp, Email,
                                Calls)
                              </p>
                              <p className="text-3xs leading-tight font-bold">
                                6 monthly contents (4 Email, 2 WhatsApp
                                broadcast)
                              </p>
                            </div>
                            <div>
                              <p className="text-3xs leading-tight">Flexible</p>
                              <p className="text-3xs leading-tight font-bold">
                                Including copy in 5 channels(s) (Meta, Meta Ads,
                                Google Ads, Email, WhatsApp)
                              </p>
                              <p className="text-3xs leading-tight font-bold">
                                Including design in 4 channels(s) (Meta, Meta
                                Ads, Email, WhatsApp)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <button
                  onClick={() => close()}
                  type="button"
                  className="bg-customBlue-600 px-7 py-2 rounded-full text-customYellow-500 text-normal text-center font-bold w-fit"
                >
                  SELECT
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
