import React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import BrandingHero from "../components/branding/brandingHero";
import WeHelpYou from "../components/branding/weHelpYou";
import WeInterview from "../components/branding/weInterview";
import HowWeDoIt from "../components/branding/howWeDoIt";
import SomethingElse from "../components/branding/somethingElse";
import { motion } from "framer-motion";

const BrandingPage: React.FC<PageProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="relative overflow-x-hidden">
          <BrandingHero />
          <WeHelpYou />
          <WeInterview />
          <HowWeDoIt />
          <SomethingElse />
        </div>
      </div>
    </motion.div>
  );
};

export default BrandingPage;

export const Head: HeadFC = () => <title>Branding</title>;
