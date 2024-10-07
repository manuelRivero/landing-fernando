import React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import WebAndAppHero from "../components/webAndApp/webAndAppHero";
import Plans from "../components/webAndApp/plans";
import Process from "../components/webAndApp/process";
import GetQuotation from "../components/webAndApp/getQuotation";

const WebAndAppPage: React.FC<PageProps> = () => {
  return (
    <div className="relative">
      <div className="relative overflow-x-hidden">
        <WebAndAppHero />
        <Plans />
        <Process />
        <GetQuotation />
      </div>
    </div>
  );
};

export default WebAndAppPage;

export const Head: HeadFC = () => <title>Web and app</title>;
