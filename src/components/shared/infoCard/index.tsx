import React from "react";

interface Props {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

export default function InfoCard({ title, description, icon, alt }: Props) {
  return (
    <div className="bg-customPink w-[332px] h-[135px] rounded-r-[30px] rounded-bl-[30px] relative">
      <div className="absolute top-0 right-2 -translate-y-full pb-2 pl-2">
        <img src={icon} alt={alt} />
      </div>
      <div className="absolute top-1 -translate-y-full bg-customPink rounded-t-[30px] w-[267px] h-[55px]" />
      <div className="pl-8 flex flex-col space-y-4 absolute top-0 left-0 -translate-y-8">
        <h3 className="text-white text-normal font-bold font-inter uppercase">
          {title}
        </h3>
        <p className="text-white text-little font-inter">{description}</p>
      </div>
    </div>
  );
}
