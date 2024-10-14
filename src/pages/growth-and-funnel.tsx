import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import GrowthHero from "../components/growth/growthHero";
import Plans from "../components/growth/plans";
import Process from "../components/growth/process";
import GenericSection from "../components/shared/genericSection";
import GetQuotation from "../components/growth/getQuotation";
import ContactPopup from "../components/shared/contactPopup";

const ContentAndGrowthPage: React.FC<PageProps> = () => {
  return (
    <div className="relative">
      <div>
        <GrowthHero />
        <Plans />
        <Process />
        <GetQuotation />
      </div>
    </div>
  );
};

export default ContentAndGrowthPage;

export const Head: HeadFC = () => <title>Growth and funnel</title>;
