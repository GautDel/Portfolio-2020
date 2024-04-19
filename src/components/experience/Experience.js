import React, { Component } from 'react'
import ExperienceBtn from "./ExperienceBtn.js";
import ExperienceDisplay from "./ExperienceDisplay.js";
import projectData from "../../data/projects.json";

class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      project: {
        "name": "Fly Paper Shop",
        "img": "/images/flypapershop.png",
        "alt": "Business website",
        "codeLink": "https://github.com/GautDel/fly_paper",
        "webLink": "http://www.flypapershop.eu",
        "tech": [
        "PHP",
        "Laravel",
        "MySQL",
        "Docker",
        "TailwindCSS"
      ],
      "para1": "My personal business site.",
      "para2": "One of my latest projects. Creating this website taught me many valuable lessons, such as color psychology for call-to-actions, fonts, and backgrounds as well as researching client necessities and providing them with a UI that meets those needs."
  },
      active: 0
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    let details = []

    projectData.map((detail) => {
      return details.push(detail)
    })

    this.setState({
      projects: details
    });
  }

  renderBtns = () => {
    let btns = []
    this.state.projects.forEach((project, i) => {
      btns.push(<ExperienceBtn
        btnName={`${project.name}`}
        key={`${i}`}
        project={project}
        setProject={this.setProject}
        active={this.state.active}
        i={i} />)
    })
    return btns
  }

  renderDisplay = () => {
    return (<ExperienceDisplay
      project={this.state.project} />)
  }

  setProject = (project, i) => {
    this.setState({
      project: project,
      active: i
    })
  }

  render() {
    return (
      <div className="container" id="experience">
        <div className="experience-container text-container">
          <h3>
            <span className="bracket">&lt; </span>
            Experience
            <span className="bracket"> &gt;</span>
          </h3>

          <div className="border-left">
            <div className="ui-container">
              <div className="buttons-container">
                <p>Click on each project to see it displayed on the right / below (scroll for more) <span className="code mobile-caret typer">█</span></p>
                {this.renderBtns()}
              </div>

              <div className="border-left display-container">
                {this.renderDisplay()}
              </div>
            </div>
          </div>

          <h3>
            <span className="bracket">&lt;/ </span>
            Experience
              <span className="bracket"> &gt;</span>
          </h3>
        </div>
      </div>
    )
  }
}

export default Experience;
