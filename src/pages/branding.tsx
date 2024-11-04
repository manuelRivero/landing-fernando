import React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import BrandingHero from "../components/branding/brandingHero";
import IconsAndTextsSection from "../components/shared/iconsAndTextsSection";
import WeHelpYou from "../components/branding/weHelpYou";
import WeInterview from "../components/branding/weInterview";
import HowWeDoIt from "../components/branding/howWeDoIt";
import SomethingElse from "../components/branding/somethingElse";
import { SEO } from "../components/seo";

const BrandingPage: React.FC<PageProps> = () => {
  return (
    <div className="relative">
      <div className="relative overflow-x-hidden overflow-y-hidden">
        <BrandingHero />
        <WeHelpYou />
        <WeInterview />
        {/* <HowWeDoIt /> */}
        <SomethingElse />
      </div>
    </div>
  );
};

export default BrandingPage;

export const Head: HeadFC = () => <SEO title="Branding Services for Strong, Memorable Identities | Zapian" description="Transform your brand with compelling design and messaging that differentiates you in the market. Our branding expertise fosters customer loyalty and builds lasting impressions." />;
