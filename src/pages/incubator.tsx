import React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import IncubatorHero from "../components/incubator/incubatorHero";
import Expertise from "../components/incubator/expertise";
import Applications from "../components/incubator/applications";
import ApplyNow from "../components/incubator/applyNow";
import Coaching from "../components/incubator/coaching";
import { motion } from "framer-motion";

const IncubatorPage: React.FC<PageProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="relative overflow-x-hidden">
          <IncubatorHero />
          <Applications />
          <Expertise />
          <ApplyNow />
          <Coaching />
        </div>
      </div>
    </motion.div>
  );
};

export default IncubatorPage;

export const Head: HeadFC = () => <title>Incubator</title>;
