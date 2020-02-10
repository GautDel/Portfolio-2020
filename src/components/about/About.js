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
              Hello! I'm Gauthier, a 26 year old front-end web developer currently living in Cork, Ireland. I love designing and building non-intrusive, blazingly fast web applications to provide the best user-experience possible.
              <span className="bracket"> /&gt;</span>
            </p>

            <p>
              <span className="bracket">&lt; </span>
              While my current experience is primarily within the front-end sector, I am continually working to become a full-stack developer.
              <span className="bracket"> /&gt;</span>
            </p>

            <p>
              <span className="bracket">&lt; </span>
              Here are some technologies I've worked with and am currently learning.
              <span className="bracket"> /&gt;</span>
            </p>

            <div className="border-left">
              <span className="bracket">&lt; </span>

              <span className="technologies">
                HTML5
                <span className="code"> | </span>
                CSS3
                <span className="code"> | </span>
                SCSS
                <span className="code"> | </span>
                JavaScript
                <span className="code"> | </span>
                React
                <span className="code"> | </span>
                PHP
                <span className="code"> | </span>
                Vue
                <span className="code"> | </span>
                Node.js
                <span className="code"> | </span>
                Express
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
          <img src={window.location.origin + '/images/me.jpg'} alt="Me" />
        </div>
      </div>
    </div>
  );
}

export default About;
