import React from 'react';

const About = () => {
  return (
    <div className="container" id="about">
      <div className="about-container text-container">
        <div className="column">
          <h3>
            <span className="bracket">&lt; </span>
            About
            <span className="bracket"> &gt;</span>
          </h3>

          <div className="border-left">
            <p>
              <span className="bracket">&lt; </span>
              Hello! I'm Gauthier, a 30 year old full-stack web developer currently living in the south of France. I love designing and building non-intrusive, blazingly fast web applications to provide the best user-experience possible.
              <span className="bracket"> /&gt;</span>
            </p>

            <p>
              <span className="bracket">&lt; </span>
              While my current experience is primarily to do with JavaScript & PHP, I've come to fall in love with Golang.
              <span className="bracket"> /&gt;</span>
            </p>

            <p>
              <span className="bracket">&lt; </span>
              Here's my tech stack.
              <span className="bracket"> /&gt;</span>
            </p>

            <div className="border-left">
              <span className="bracket">&lt; </span>

              <span className="technologies">
                JavaScript
                <span className="code"> | </span>
                TypeScript
                <span className="code"> | </span>
                React
                <span className="code"> | </span>
                NodeJS
                <span className="code"> | </span>
                PHP 
                <span className="code"> | </span>
                Laravel
                <span className="code"> | </span>
                Golang &#x3c;3
                <span className="code"> | </span>
                SCSS/TailwindCSS
                <span className="code"> | </span>
                PostgreSQL/MYSQL
                <span className="code"> | </span>
                Linux
                <span className="code"> | </span>
                Docker/Proxmox
                <span className="code"> | </span>
                Vim
                </span>

              <span className="bracket"> /&gt;</span>
            </div>
          </div>
          <h3>
            <span className="bracket">&lt;/ </span>
            About
            <span className="bracket"> &gt;</span>
          </h3>
        </div>

        <div className="about-image">
          <div className="about-image-frame">
            <div className="filter"></div>
          </div>
          <img src={window.location.origin + '/Portfolio-2020/images/me.jpg'} alt="Me" />
        </div>
      </div>
    </div>
  );
}

export default About;
