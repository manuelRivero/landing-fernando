import React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import IncubatorHero from "../components/incubator/incubatorHero";
import Expertise from "../components/incubator/expertise";
import Applications from "../components/incubator/applications";
import ApplyNow from "../components/incubator/applyNow";
import Coaching from "../components/incubator/coaching";

const IncubatorPage: React.FC<PageProps> = () => {
  return (
    <div className="relative">
      <div className="relative overflow-x-hidden">
        <IncubatorHero />
        <Applications />
        <Expertise />
        <ApplyNow />
        <Coaching />
      </div>
    </div>
  );
};

export default IncubatorPage;

export const Head: HeadFC = () => <title>Web and app</title>;
