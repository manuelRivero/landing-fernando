import React from "react";
import coachingIcon from "./../../../images/icons/coaching.svg";
import LinkButton from "../../shared/linkButton";
import { Link } from "gatsby";

export default function Coaching() {
  return (
    <div className="bg-black">
      <div className="py-16 md:py-32 md:pb-40 px-8 md:px-32 container">
        <div className="flex flex-col justify-center items-center space-y-4">
          <img src={coachingIcon} alt="Coaching icon" />
          <Link
            to="https://www.canva.com/design/DAGEOtU18t0/WrP44fuTROrsfebghYJ5HA/view?utm_content=DAGEOtU18t0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank"
          >
            <h2 className="text-white text-center text-xs md:text-normal font-bold uppercase underline">
              Get your Coaching Session
            </h2>
          </Link>
          <h2 className="text-white text-center text-xs md:text-normal font-normal">
            Clear your doubts and talk to business experts. Schedule a
            consultation to receive personalized guidance.
          </h2>
          <LinkButton
            color={"customGreen-500"}
            path={"https://calendly.com/andy-lde/30min"}
            text={"SCHEDULE"}
            textColor={"white"}
            target={"_blank"}
          />
        </div>
      </div>
    </div>
  );
}
