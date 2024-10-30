import React from "react";
import OgImage from "../images/OgImage.jpg"

interface Props {
  title: string;
  description: string;
}

export const SEO = ({ title, description }: Props) => {
  const seo = {
    title: title,
    description: description,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content="Zapian | Digital Marketing Agency - Proven Growth Strategies" />
      <meta
        property="og:image"
        content={`https://landing-fernando.onrender.com` + OgImage}
      />
      <meta
        name="og:type"
        content="website"
      />
    </>
  );
};
