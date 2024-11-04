import React from "react";

interface Props {
  bgColor: string;
  textColor?: string;
  text: string;
  cb: () => void;
  uppercase?: boolean;
}

export default function CustomButton({
  bgColor,
  textColor = "white",
  text,
  cb,
  uppercase,
}: Props) {
  return (
    <button
      onClick={() => cb()}
      type="button"
      className={`bg-${bgColor} hover:scale-110 transition-all px-8 py-2 rounded-full text-${textColor} text-xs md:text-normal text-center font-bold ${
        uppercase && "uppercase"
      }`}
    >
      {text}
    </button>
  );
}
