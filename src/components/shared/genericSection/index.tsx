import React from "react";
import { LinkButtonType } from "../../../types/linkButton";
import LinkButton from "../linkButton";
interface Props {
  title: string;
  description: string;
  buttonData: LinkButtonType;
  icon?: { src: string; alt: string };
}
export default function GenericSection({
  title,
  description,
  buttonData,
  icon,
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      {icon && <img src={icon.src} alt={icon.alt} />}
      <h2 className="text-white text-center text-normal font-bold uppercase">{title}</h2>
      <h2 className="text-white text-center text-normal font-normal">{description}</h2>
      <LinkButton color={buttonData.color} path={buttonData.path} text={buttonData.text} />
    </div>
  );
}
