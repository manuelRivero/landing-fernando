import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import GrowthHero from "../components/growth/growthHero";
import Plans from "../components/growth/plans";
import Process from "../components/growth/process";
import GetQuotation from "../components/growth/getQuotation";
import { motion } from "framer-motion";

const ContentAndGrowthPage: React.FC<PageProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div>
          <GrowthHero />
          <Plans />
          <Process />
          <GetQuotation />
        </div>
      </div>
    </motion.div>
  );
};

export default ContentAndGrowthPage;

export const Head: HeadFC = () => <title>Growth and funnel</title>;
