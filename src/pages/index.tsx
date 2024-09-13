import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Hero from "../components/home/hero";
import Services from "../components/home/services";
import Partners from "../components/home/partners";
import Contact from "../components/home/contact";
import Incubator from "../components/home/incubator";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Partners />
      <Contact />
      <Incubator />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
