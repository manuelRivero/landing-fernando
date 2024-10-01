import React from "react";

interface Props {
  close: () => void;
}

export default function VerifyPopup() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-10 overflow-hidden">
      <div className="bg-customBlue-600 rounded-[32px] lg:w-[825px] p-7  flex flex-col space-y-6">
        <h3 className="text-white text-normal uppercase pr-14 font-bold">
          Create an account and chat with us to make informed business decisions
        </h3>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-between ">
          <p className="rounded-full bg-customGreen-500 text-normal text-customBlue-600 px-6 py-2 font-bold text-nowrap">
            MX: +52
          </p>
          <input
            type="text"
            className="rounded-full w-full border border-white bg-transparent px-6 py-2 text-normal text-white"
            placeholder="YOUR WHATSAPP"
          />
        </div>
        <input
          type="text"
          className="rounded-full w-full border border-white bg-transparent px-6 py-2 text-normal text-white"
          placeholder="EMAIL"
        />
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-customOrange-500 px-7 py-2 rounded-full text-customGreen-500 text-normal text-center font-bold"
          >
            VERIFY
          </button>
        </div>
      </div>
    </div>
  );
}
