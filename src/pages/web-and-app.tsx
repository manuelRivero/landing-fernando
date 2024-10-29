import React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import WebAndAppHero from "../components/webAndApp/webAndAppHero";
import Plans from "../components/webAndApp/plans";
import Process from "../components/webAndApp/process";
import GetQuotation from "../components/webAndApp/getQuotation";
import { SEO } from "../components/seo";

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

export const Head: HeadFC = () => (
  <SEO
    title="Custom Web Design & Development | Zapian Digital Marketing Agency"
    description="Increase conversions with user-focused web design, optimized UX/UI, and seamless integrations. We build fast, responsive sites that enhance user experiences and strengthen brand impact."
  />
);
