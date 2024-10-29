import React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import IncubatorHero from "../components/incubator/incubatorHero";
import Expertise from "../components/incubator/expertise";
import Applications from "../components/incubator/applications";
import ApplyNow from "../components/incubator/applyNow";
import Coaching from "../components/incubator/coaching";
import { SEO } from "../components/seo";

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

export const Head: HeadFC = () => <SEO title="Business Incubation for Growth | Zapian Marketing Agency" description="Develop your business from concept to market success with Zapian’s incubation services, combining strategic branding, design, and content to fuel growth for emerging businesses." />;
