import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Hero from "../components/home/hero";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
