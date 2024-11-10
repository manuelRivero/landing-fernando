import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import { useLocation } from "@reach/router";

interface ContentType {
  icon: React.JSX.Element;
  title: string;
  description: string;
}

const IncubatorContent: ContentType[] = [
  {
    icon: (
      <svg
        width="66"
        height="67"
        viewBox="0 0 66 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.6598 0.759766C14.6298 0.759766 0.00976562 15.3798 0.00976562 33.4098C0.00976562 51.4398 14.6298 66.0598 32.6598 66.0598C50.6898 66.0598 65.3098 51.4398 65.3098 33.4098C65.3198 15.3798 50.6998 0.759766 32.6598 0.759766ZM54.1198 54.5498C48.6798 50.9598 43.4898 48.7897 38.4798 47.8597C35.5498 52.2697 33.6097 57.4998 32.4297 63.4198C31.2497 57.5698 29.3398 52.3597 26.4698 47.9497C21.2798 48.9997 16.2297 51.3198 11.2097 54.6698C14.5697 49.6098 16.9297 44.4897 17.9897 39.2297C13.8997 36.4097 8.83977 34.3197 2.63977 33.0697C8.82977 31.7697 13.8898 29.6597 18.0098 26.8497C17.0598 22.1197 14.9898 17.2298 11.5998 12.1398C16.7198 15.4798 21.6298 17.5398 26.3798 18.5098C29.3598 14.1598 31.3397 9.06977 32.5497 3.38977C33.5097 8.89977 35.4097 14.0198 38.6497 18.6398C43.8397 17.6798 48.8497 15.4698 53.7397 12.2998C50.5597 16.8198 48.2998 21.7197 47.3098 27.2097C51.6098 30.1297 56.6898 32.0397 62.6998 32.9897C56.4798 34.2597 51.3897 36.3197 47.2397 39.0897C48.1697 44.3697 50.4198 49.4698 54.1198 54.5498Z"
          fill="#1BE4A5"
        />
      </svg>
    ),
    title: "Coaching Services",
    description:
      "Benefit from personalized coaching sessions aimed at addressing your business challenges, making informed decisions, and achieving sustainable growth.",
  },
  {
    icon: (
      <svg
        width="66"
        height="67"
        viewBox="0 0 66 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.2797 30.2799C36.5197 12.3299 50.2096 -0.0902088 65.6396 0.839791C65.1596 12.6598 60.5196 22.2098 51.0096 28.6298C40.1696 35.9598 28.5696 36.4498 17.1896 29.9698C6.40964 23.8198 1.13961 13.8998 0.349609 1.26984C12.7596 -1.86016 25.6597 9.48985 33.2797 30.2799Z"
          fill="#1BE4A5"
        />
        <path
          d="M33.2795 61.8496C36.4095 43.9696 49.8995 31.6896 65.6495 32.3296C65.0995 44.4896 60.3295 54.2896 50.3395 60.5996C38.3995 68.1396 26.0694 67.8996 14.4294 59.7196C5.26944 53.2896 0.809453 43.9795 0.439453 32.4395C15.4595 31.6295 25.7595 40.8796 33.2795 61.8496Z"
          fill="#1BE4A5"
        />
      </svg>
    ),
    title: "Web and App Development",
    description:
      "Access cutting-edge technology with our development services. Enhance your online presence and user experience with our web and mobile application solutions.",
  },
  {
    icon: (
      <svg
        width="66"
        height="67"
        viewBox="0 0 66 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.75 33.4202C9.85002 27.2802 -0.949957 14.5902 0.900043 1.02018C14.08 -1.03982 26.2201 9.08011 33.3101 28.0701C40.6401 9.09011 51.77 -0.319845 65.51 0.870155C68.54 13.3002 57.21 26.7802 38.21 33.3802C56.02 38.1502 66.76 50.6302 65.9 65.5602C53.52 68.5202 39.4301 56.8401 33.1701 37.8301C31.4501 46.1801 28.0601 52.9202 22.0501 58.0502C16.0101 63.2002 9.10005 66.1902 1.03005 66.0502C-1.35995 52.5102 11.26 37.6002 28.75 33.4202Z"
          fill="#1BE4A5"
        />
      </svg>
    ),
    title: "Growth Strategies",
    description:
      "Accelerate your business growth with our proven strategies. From market expansion to customer acquisition, we guide you through the journey of scaling your business.",
  },
  {
    icon: (
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M65.3196 33.2593C65.3396 51.4493 50.9496 65.9693 32.8696 66.0093C14.3896 66.0493 -0.010422 51.6893 0.019578 33.2493C0.049578 15.1093 14.5096 0.689224 32.6696 0.699224C50.7996 0.719224 65.2996 15.1693 65.3196 33.2593ZM32.5896 2.76929C27.8496 18.6593 17.5396 28.3692 2.0396 33.4392C17.8996 38.1992 27.7696 48.4093 32.6696 63.9993C37.5396 48.0693 47.7996 38.1693 63.4596 33.3093C47.5896 28.5293 37.4996 18.5093 32.5896 2.76929Z"
          fill="#1BE4A5"
        />
      </svg>
    ),
    title: "HR Solutions",
    description:
      "Navigate HR complexities effortlessly. From talent acquisition to talent development, we provide comprehensive HR solutions to meet your workforce needs.",
  },
  {
    icon: (
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.99 39.5493C53.49 36.5393 59.03 34.2992 65.8 32.9092C59.26 31.8792 53.74 29.7894 49.06 26.6194C50.14 20.6494 52.6 15.3292 56.06 10.3992C50.75 13.8492 45.3 16.2493 39.66 17.2893C36.13 12.2593 34.07 6.68922 33.02 0.699219C31.7 6.87922 29.55 12.4292 26.31 17.1492C21.15 16.0992 15.81 13.8492 10.24 10.2192C13.92 15.7592 16.17 21.0692 17.21 26.2192C12.73 29.2692 7.23 31.5693 0.5 32.9893C7.25 34.3493 12.74 36.6192 17.19 39.6892C16.04 45.4092 13.47 50.9793 9.82001 56.4893C15.28 52.8393 20.78 50.3192 26.42 49.1792C29.55 53.9892 31.62 59.6493 32.91 66.0093C34.2 59.5593 36.3 53.8793 39.49 49.0793C44.94 50.0893 50.57 52.4494 56.49 56.3594C52.46 50.8294 50 45.2793 48.99 39.5493Z"
          fill="#1BE4A5"
        />
      </svg>
    ),
    title: "Communication and PR",
    description:
      "Elevate your brand visibility with strategic communication and PR. Our experts will help you craft compelling messages and establish a strong presence in your industry.",
  },
];
const BrandingContent: ContentType[] = [
  {
    icon: (
      <svg
        width="66"
        height="67"
        viewBox="0 0 66 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.6598 0.759766C14.6298 0.759766 0.00976562 15.3798 0.00976562 33.4098C0.00976562 51.4398 14.6298 66.0598 32.6598 66.0598C50.6898 66.0598 65.3098 51.4398 65.3098 33.4098C65.3198 15.3798 50.6998 0.759766 32.6598 0.759766ZM54.1198 54.5498C48.6798 50.9598 43.4898 48.7897 38.4798 47.8597C35.5498 52.2697 33.6097 57.4998 32.4297 63.4198C31.2497 57.5698 29.3398 52.3597 26.4698 47.9497C21.2798 48.9997 16.2297 51.3198 11.2097 54.6698C14.5697 49.6098 16.9297 44.4897 17.9897 39.2297C13.8997 36.4097 8.83977 34.3197 2.63977 33.0697C8.82977 31.7697 13.8898 29.6597 18.0098 26.8497C17.0598 22.1197 14.9898 17.2298 11.5998 12.1398C16.7198 15.4798 21.6298 17.5398 26.3798 18.5098C29.3598 14.1598 31.3397 9.06977 32.5497 3.38977C33.5097 8.89977 35.4097 14.0198 38.6497 18.6398C43.8397 17.6798 48.8497 15.4698 53.7397 12.2998C50.5597 16.8198 48.2998 21.7197 47.3098 27.2097C51.6098 30.1297 56.6898 32.0397 62.6998 32.9897C56.4798 34.2597 51.3897 36.3197 47.2397 39.0897C48.1697 44.3697 50.4198 49.4698 54.1198 54.5498Z"
          fill="#F94074"
        />
      </svg>
    ),
    title: "Product or Service Innovation",
    description: "New Products and Features",
  },
  {
    icon: (
      <svg
        width="66"
        height="67"
        viewBox="0 0 66 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.2797 30.2799C36.5197 12.3299 50.2096 -0.0902088 65.6396 0.839791C65.1596 12.6598 60.5196 22.2098 51.0096 28.6298C40.1696 35.9598 28.5696 36.4498 17.1896 29.9698C6.40964 23.8198 1.13961 13.8998 0.349609 1.26984C12.7596 -1.86016 25.6597 9.48985 33.2797 30.2799Z"
          fill="#F94074"
        />
        <path
          d="M33.2795 61.8496C36.4095 43.9696 49.8995 31.6896 65.6495 32.3296C65.0995 44.4896 60.3295 54.2896 50.3395 60.5996C38.3995 68.1396 26.0694 67.8996 14.4294 59.7196C5.26944 53.2896 0.809453 43.9795 0.439453 32.4395C15.4595 31.6295 25.7595 40.8796 33.2795 61.8496Z"
          fill="#F94074"
        />
      </svg>
    ),
    title: "User Experience",
    description: "Communication Validation",
  },
  {
    icon: (
      <svg
        width="66"
        height="67"
        viewBox="0 0 66 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.75 33.4202C9.85002 27.2802 -0.949957 14.5902 0.900043 1.02018C14.08 -1.03982 26.2201 9.08011 33.3101 28.0701C40.6401 9.09011 51.77 -0.319845 65.51 0.870155C68.54 13.3002 57.21 26.7802 38.21 33.3802C56.02 38.1502 66.76 50.6302 65.9 65.5602C53.52 68.5202 39.4301 56.8401 33.1701 37.8301C31.4501 46.1801 28.0601 52.9202 22.0501 58.0502C16.0101 63.2002 9.10005 66.1902 1.03005 66.0502C-1.35995 52.5102 11.26 37.6002 28.75 33.4202Z"
          fill="#F94074"
        />
      </svg>
    ),
    title: "Rebranding",
    description: "Updating brand identity",
  },
  {
    icon: (
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M65.3196 33.2593C65.3396 51.4493 50.9496 65.9693 32.8696 66.0093C14.3896 66.0493 -0.010422 51.6893 0.019578 33.2493C0.049578 15.1093 14.5096 0.689224 32.6696 0.699224C50.7996 0.719224 65.2996 15.1693 65.3196 33.2593ZM32.5896 2.76929C27.8496 18.6593 17.5396 28.3692 2.0396 33.4392C17.8996 38.1992 27.7696 48.4093 32.6696 63.9993C37.5396 48.0693 47.7996 38.1693 63.4596 33.3093C47.5896 28.5293 37.4996 18.5093 32.5896 2.76929Z"
          fill="#F94074"
        />
      </svg>
    ),
    title: "Trend Identification",
    description: "Consumer behavior and industry trends",
  },
  {
    icon: (
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.99 39.5493C53.49 36.5393 59.03 34.2992 65.8 32.9092C59.26 31.8792 53.74 29.7894 49.06 26.6194C50.14 20.6494 52.6 15.3292 56.06 10.3992C50.75 13.8492 45.3 16.2493 39.66 17.2893C36.13 12.2593 34.07 6.68922 33.02 0.699219C31.7 6.87922 29.55 12.4292 26.31 17.1492C21.15 16.0992 15.81 13.8492 10.24 10.2192C13.92 15.7592 16.17 21.0692 17.21 26.2192C12.73 29.2692 7.23 31.5693 0.5 32.9893C7.25 34.3493 12.74 36.6192 17.19 39.6892C16.04 45.4092 13.47 50.9793 9.82001 56.4893C15.28 52.8393 20.78 50.3192 26.42 49.1792C29.55 53.9892 31.62 59.6493 32.91 66.0093C34.2 59.5593 36.3 53.8793 39.49 49.0793C44.94 50.0893 50.57 52.4494 56.49 56.3594C52.46 50.8294 50 45.2793 48.99 39.5493Z"
          fill="#F94074"
        />
      </svg>
    ),
    title: "Personalized",
    description: "Trend Research",
  },
];
export default function IconsAndTextsSection() {
  const { pathname } = useLocation();

  const handleShowContent = (): ContentType[] => {
    if (pathname === "/incubator/") return IncubatorContent;
    else return BrandingContent;
  };

  return (
    <div>
      <div className="hidden lg:grid grid-cols-12 gap-16">
        {handleShowContent().map((item, index: number) => (
          <div
            key={`${item.title}-${index}`}
            className={`hover:scale-105 transition-all flex flex-col space-y-2 ${
              index >= 0 && index <= 2 ? "col-span-4" : "col-span-6"
            } justify-center items-center`}
          >
            {item.icon}
            <div>
              <h3 className="text-white uppercase text-normal font-bold text-center leading-tight">
                {item.title}
              </h3>
              <p className="text-white text-little text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="block lg:hidden">
        <Swiper
          breakpoints={{
            1000: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1.4,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
            el: '.pagination-3'
          }}
          modules={[FreeMode, Pagination]}
        >
          {handleShowContent().map((item, index: number) => (
            <SwiperSlide key={`${item.title}-${index}`} className="max-w-[250px]">
              <div
                className={`flex flex-col space-y-2 ${
                  index >= 0 && index <= 2 ? "col-span-4" : "col-span-6"
                } justify-center items-center`}
              >
                {item.icon}
                <div>
                  <h3 className="text-white uppercase text-xs md:text-normal font-bold text-center leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white text-2xs md:text-little text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pagination-3 my-custom-pagination pt-5 md:hidden"></div>
      </div>
    </div>
  );
}
