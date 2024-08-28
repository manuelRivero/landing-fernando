import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Hero from "../components/home/hero";
import Services from "../components/home/services";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
