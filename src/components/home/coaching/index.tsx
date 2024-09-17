import React from "react";
import GenericSection from "../../shared/genericSection";
import coachingIcon from "./../../../images/icons/coaching.svg";

export default function Coaching() {
    return (
        <div className="bg-black">
            <div className="py-32 pb-40 px-8 md:px-32 container">
                <GenericSection
                    icon={{ src: coachingIcon, alt: "Coaching icon" }}
                    title="Get your Coaching Session"
                    description="Clear your doubts and talk to business experts. Schedule a consultation to receive personalized guidance."
                    buttonData={{ color: "customGreen-500", path: "#", text: "SCHEDULE" }}
                />
            </div>
        </div>
    );
}
