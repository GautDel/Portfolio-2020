import React from 'react';

const ExperienceBtn = ({ btnName, setProject, project, active, i }) => {
  return (

    <div className={i === active ? "button active" : "button"} onClick={() => { setProject(project, i) }}>
      <h6>{btnName} <span className="code">Build</span></h6>
    </div>
  );
}

export default ExperienceBtn;
