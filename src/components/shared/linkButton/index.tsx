import { Link } from "gatsby";
import React from "react";

interface Props {
  text: string;
  path: string;
  color: string;
}

export default function LinkButton({ text, path, color }: Props) {
  return (
    <Link
      to={path}
      type="button"
      className={`bg-${color} px-14 py-2 rounded-full text-white text-normal font-semibold w-fit`}
    >
      {text}
    </Link>
  );
}
