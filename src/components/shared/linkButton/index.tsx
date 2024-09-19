import { Link } from "gatsby";
import React from "react";
import { LinkButtonType } from "../../../types/linkButton";

export default function LinkButton({
  text,
  path,
  color,
  textColor = "white",
}: LinkButtonType) {
  return (
    <Link
      to={path}
      type="button"
      className={`bg-${color} px-7 py-2 rounded-full text-${textColor} text-normal text-center font-semibold w-fit`}
    >
      <button>{text}</button>
    </Link>
  );
}
