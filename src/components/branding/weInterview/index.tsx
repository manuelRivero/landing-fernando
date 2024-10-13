import React from "react";
import CustomButton from "../../shared/customButton";
import { useDispatch } from "react-redux";
import { showContactPopup } from "../../../store/global";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import brandingContainer1 from "./../../../images/branding/interview-container-1.png";
import brandingContainer2 from "./../../../images/branding/interview-container-2.png";

export default function WeInterview() {
  const dispatch = useDispatch();

  return (
    <div className="bg-white">
      <div className="flex flex-col space-y-8 py-24 px-8 md:px-32 container">
        <h1 className="text-black text-center font-bold text-2xl md:text-3xl leading-tight uppercase">
          We interview
        </h1>
        <div>
          <Swiper
            breakpoints={{
              1080: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
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
              <div className="flex justify-center">
                <div className="relative w-fit">
                  <img src={brandingContainer1} alt={"we interview"} width={"516px"} />
                  <p className="absolute left-0 top-1/2 -translate-y-1/2 pl-8 pr-20 text-white text-normal font-bold uppercase">
                  Individuals from your segment, without you having to worry about logistics.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="relative w-fit">
                  <img src={brandingContainer2} alt={"..."} />
                  <p className="absolute left-0 top-1/2 -translate-y-1/2 pl-8 pr-20 text-white text-normal font-bold uppercase">
                  You can send the interview or upload your prospect base. Any option is good!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="w-fit text-black text-center text-normal leading-tight">
          Request a quote for your interview and lead your business to success
          with informed decisions.
        </p>
        <div className="flex justify-center">
          <CustomButton
            bgColor="customPink-500"
            textColor="white"
            text="QUOTE"
            cb={() => dispatch(showContactPopup(true))}
          />
        </div>
      </div>
    </div>
  );
}
