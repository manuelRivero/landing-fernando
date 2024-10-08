import React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import IncubatorHero from "../components/incubator/incubatorHero";
import Expertise from "../components/incubator/expertise";

const IncubatorPage: React.FC<PageProps> = () => {
  return (
    <div className="relative">
      <div className="relative overflow-x-hidden">
        <IncubatorHero />
        <Expertise />
      </div>
    </div>
  );
};

export default IncubatorPage;

export const Head: HeadFC = () => <title>Web and app</title>;
