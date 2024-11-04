import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Hero from "../components/home/hero";
import Services from "../components/home/services";
import Partners from "../components/home/partners";
import Contact from "../components/home/contact";
import Incubator from "../components/home/incubator";
import Coaching from "../components/home/coaching";
import teamImg from "../images/home/team.png";
import officeImg from "../images/home/office.png";
import whatsapp from "../images/logos/whatsapp-logo-button.png";
import Clients from "../components/home/clients";
import Welcome from "../components/home/welcome";
import { SEO } from "../components/seo";
import AnimateSection from "../components/shared/animateSection";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      <Services />
      <Welcome />
      <Partners />
      <Contact />
      <Incubator />
      <div className="bg-black">
        <AnimateSection orientation="vertical">
          <div className="grid grid-cols-3 gap-8 container px-8">
            <div className="col-span-1 flex justify-center items-center">
              <img src={teamImg} alt="Team" />
            </div>
            <div className="col-span-2 flex justify-center items-center">
              <img src={officeImg} alt="Office" />
            </div>
          </div>
        </AnimateSection>
      </div>
      <Coaching />
      <Clients />
      <div className="hidden md:block fixed bottom-0 right-0 -translate-x-1/2 -translate-y-1/2 z-10">
        <a
          href="https://api.whatsapp.com/send?phone=5215639308664&text=%C2%A1Hola!%20Me%20interesa%20saber%20m%C3%A1s%20de%20Zapian."
          target="_blank"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO
    title="Zapian | Digital Marketing Agency - Proven Growth Strategies"
    description="Achieve measurable brand growth with our digital marketing solutions, from web design to content and branding. Tailored strategies boost online visibility, customer engagement, and conversions."
  />
);
