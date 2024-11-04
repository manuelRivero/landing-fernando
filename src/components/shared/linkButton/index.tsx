import { Link } from "gatsby";
import React from "react";
import { LinkButtonType } from "../../../types/linkButton";

export default function LinkButton({
  text,
  path,
  color,
  textColor = "white",
  target = "_self",
}: LinkButtonType) {
  return (
    <Link
      target={target}
      to={path}
      className={`bg-${color} px-7 py-2 hover:scale-110 transition-all rounded-full text-${textColor} text-xs md:text-normal text-center font-bold w-fit`}
    >
      <button>{text}</button>
    </Link>
  );
}
