import React from 'react';
import NavLogo from "./NavLogo.js";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <NavLogo />
      <div className="nav-toggle">
        <div className="nav-toggle-bar"></div>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#about">about<span className="code">();</span></a>
          </li>
          <li>
            <a href="#experience">experience<span className="code">();</span></a>
          </li>
          <li>
            <a href="#work">work<span className="code">();</span></a>
          </li>
          <li>
            <a href="#contact">contact<span className="code">();</span></a>
          </li>
          <li>
            <a  className="code-border"><span className="code">$ cd</span> -CV <span className="code mobile-caret"> █</span></a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;
