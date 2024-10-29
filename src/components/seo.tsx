import React from "react";

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
    </>
  );
};
