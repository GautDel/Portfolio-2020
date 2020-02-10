import React from 'react';
import NavLogo from "./NavLogo.js";

const Nav = ({ show }) => {
  return (
    <div className={`${show} desktop-nav`}>
      <NavLogo />
      <nav className="desktop-menu">
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
            <a href="http://www.gautdel.com/cv" className="typewriter-container">
              <span className="code sudo">$ </span>
              <p className="typewriter">
                <span className="code">cd</span> -CV
            </p>
              <span className="code mobile-caret typer">█</span></a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
