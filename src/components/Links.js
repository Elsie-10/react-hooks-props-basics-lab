import React from "react";

const Links = ({ github, linkedin }) => {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <br />
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
};
export default Links;
