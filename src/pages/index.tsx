import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      <Services />
      <Partners />
      <Contact />
      <Incubator />
      <div className="bg-black">
        <div className="grid grid-cols-3 gap-8 container px-8">
          <div className="col-span-1 flex justify-center items-center">
            <img src={teamImg} alt="Team" />
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <img src={officeImg} alt="Office" />
          </div>
        </div>
      </div>
      <Coaching />
      <Clients />
      <div className="hidden md:block fixed bottom-0 right-0 -translate-x-1/2 -translate-y-1/2 z-10">
      <button type="button">
        <img src={whatsapp} alt="Whatsapp" />
      </button>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
