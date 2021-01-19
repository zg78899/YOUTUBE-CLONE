import React from "react";
import { Helmet } from "react-helmet";

function HelmetCustom({
  title = "Youtube using Youtube API",
  description = "a project made with youtube api and react js , react thunk",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
export default HelmetCustom;
