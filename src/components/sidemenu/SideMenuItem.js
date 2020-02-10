import React, { useState } from 'react'

const SideMenuItem = ({ name, icon, link }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="side-menu-item" onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
          <p className="icon" >{icon}</p>
          {show === true ? <div className="details">{name}</div> : null}
        </div>
      </a>
    </>
  )
}

export default SideMenuItem
