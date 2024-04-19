import React from 'react';

const ExperienceDisplay = ({ project: { img, tech, para1, para2, codeLink, webLink, alt } }) => {
  return (
    <>
      <div className="image">
        {console.log(window.location.origin)}
        <a href={webLink} target="_blank" rel="noopener noreferrer"><img src={`${window.location.origin}/Portfolio-2020${img}`} alt={alt} />
          <div className="img-filter"></div></a>
      </div>
      <div className="tech ">{tech.join(" | ")}
        {codeLink !== "NA" ? <a href={codeLink} target="_blank" rel="noopener noreferrer"><span className="code-border"><span className="code">$ cd</span>  --code </span></a> : null}</div>
      <div className="text">
        <p>{para1}</p>
        <p>{para2}</p>
      </div>
    </>
  );
}

export default ExperienceDisplay;
