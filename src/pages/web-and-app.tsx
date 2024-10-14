import React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import WebAndAppHero from "../components/webAndApp/webAndAppHero";
import Plans from "../components/webAndApp/plans";
import Process from "../components/webAndApp/process";
import GetQuotation from "../components/webAndApp/getQuotation";
import { motion } from "framer-motion";

const WebAndAppPage: React.FC<PageProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="relative overflow-x-hidden">
          <WebAndAppHero />
          <Plans />
          <Process />
          <GetQuotation />
        </div>
      </div>
    </motion.div>
  );
};

export default WebAndAppPage;

export const Head: HeadFC = () => <title>Web and app</title>;
