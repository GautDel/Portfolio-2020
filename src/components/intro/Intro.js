import React from 'react';

const Intro = () => {
  return (
    <div className="container">
      <div className="intro-container text-container">
        <h3>
          <span className="bracket">&lt; </span>
          Intro<span className="bracket"> &gt;</span>
        </h3>

        <div className="border-left">
          <h2>
            <span className="bracket">&lt;</span> Hello World, people call me, <span className="bracket">/&gt;</span>
          </h2>

          <div className="border-left">
            <h1>
              <span className="bracket">&lt;</span> GAUTHIER DELALLEAU <span className="bracket">/&gt;</span>
            </h1>

            <div className="border-left">
              <h4>
                <span className="bracket">&lt;</span> I BUILD THINGS FOR THE DIGITAL AGE <span className="bracket">/&gt;</span>
              </h4>

              <div className="border-left">
                <p>
                  <span className="bracket">&lt;</span> I'm a web developer based out of the south of France who is passionate about designing and building beautiful, intuitive and pixel-perfect web experiences. <span className="bracket">/&gt;</span>
                </p>
                <p>
                  <span className="bracket">&lt;</span> You will find more about me below, including some of my work. <span className="bracket">/&gt;</span>
                </p>
              </div>
            </div>
          </div>
        </div>


        <h3>
          <span className="bracket">&lt;/ </span>
          Intro
          <span className="bracket"> &gt;</span>
        </h3>
      </div>
    </div>
  );
}

export default Intro;
