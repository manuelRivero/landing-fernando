import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import GrowthHero from "../components/growth/growthHero";
import Plans from "../components/growth/plans";
import Process from "../components/growth/process";
import GenericSection from "../components/shared/genericSection";
import GetQuotation from "../components/growth/getQuotation";

const ContentAndGrowthPage: React.FC<PageProps> = () => {
  return (
    <div className="relative overflow-x-hidden">
      <GrowthHero />
      <Plans />
      <Process />
      <GetQuotation />
    </div>
  );
};

export default ContentAndGrowthPage;

export const Head: HeadFC = () => <title>Growth</title>;
