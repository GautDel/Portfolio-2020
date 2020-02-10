import React from 'react';

const Work = ({ date, h, m, s }) => {
  return (
    <div className="container" id="work">
      <div className="work-container text-container">

        <div className="column">
          <h3>
            <span className="bracket">&lt; </span>
            Work
            <span className="bracket"> &gt;</span>
          </h3>

          <div className="border-left">
            <p className="date">
              <span className="bracket">&lt; </span>
              On
              <span className="green"> {date}</span>
              <span className="bracket"> /&gt;</span>
            </p>

            <div className="border-left">
              <h6 className="time">
                <span className="bracket">&lt; </span>
                {h !== null ? <> {h}<span className="code">:</span>{m}<span className="code">:</span>{s} </> : "Fetching time..."}
                <span className="bracket"> /&gt;</span>
              </h6>
              <div className="border-left">
                <p>
                  <span className="bracket">&lt; </span>
                  I am actively looking for an opportunity to work with a passionate, goal-oriented team of talented designers and developers, working together to create eye-catching, intuitive and lightning fast applications.
                  <span className="bracket"> /&gt;</span>
                </p>

                <p>
                  <span className="bracket">&lt; </span>
                  If, after viewing my portfolio and CV, you feel I might be a good fit within your team, please feel free to contact me using the form that follows this section!
                  <span className="bracket"> /&gt;</span>
                </p>
              </div>
            </div>
          </div>

          <h3>
            <span className="bracket">&lt; </span>
            Work
            <span className="bracket"> /&gt;</span>
          </h3>
        </div>
        <div className="learn-container">
          <h3>
            <span className="bracket">&lt; </span>
            Learning
            <span className="bracket"> /&gt;</span>
          </h3>
          <div className="border-left">
            <img src={window.location.origin + '/images/react.svg'} alt="What I'm Learning" />
          </div>
          <h3>
            <span className="bracket">&lt; </span>
            Learning
            <span className="bracket"> /&gt;</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Work;

