import React from "react";

interface Props {
  close: () => void;
}

export default function ContactPopup() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-10 overflow-hidden">
      <div className="bg-white rounded-[32px] lg:w-[825px] p-7  flex flex-col space-y-6">
        <h3 className="text-customBlue-600 text-normal uppercase font-bold">
          Contact us to address your concerns and work together to grow your
          business
        </h3>

        <input
            type="text"
            className="rounded-full w-full border border-customYellow-500 bg-transparent px-6 py-2 text-normal text-customYellow-500"
            placeholder="NAME"
          />
          <input
            type="text"
            className="rounded-full w-full border border-customYellow-500 bg-transparent px-6 py-2 text-normal text-customYellow-500"
            placeholder="EMAIL"
          />

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-between ">
          <p className="rounded-full bg-customYellow-500 text-normal text-customBlue-600 px-6 py-2 font-bold text-nowrap">
            MX: +52
          </p>
          <input
            type="text"
            className="rounded-full w-full border border-customYellow-500 bg-transparent px-6 py-2 text-normal text-customYellow-500"
            placeholder="PHONE NUMBER"
          />
        </div>
        <textarea
          className="rounded-[32px] w-full border border-customYellow-500 bg-transparent px-6 py-2 text-normal text-customYellow-500"
          placeholder="MESSAGE"
        />
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-customGreen-500 px-7 py-2 rounded-full text-customBlue-600 text-normal text-center font-bold"
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}
