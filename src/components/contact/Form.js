import React, { Component } from 'react'
import axios from "axios"

class Form extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    msg: "",
    showName: true,
    showPhone: false,
    showEmail: false,
    showMsg: false,
    showValid: false,
    alert: "",
    valid: false, // Used to stop alert message from appearing on confirmation keypress
    sentAlert: "" // Final alert
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyDown.bind(this))
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDown.bind(this))
  }

  componentDidUpdate() {
    if (this.state.alert !== "") {
      setTimeout(() => {
        this.setState({
          alert: ""
        })
      }, 2000);
    }
  }

  // Key listener to check for validation
  keyDown = e => {
    const { sentAlert, name, phone, email, msg, showPhone, showEmail, showMsg, showValid } = this.state

    // Kill event if form has been submitted
    if (sentAlert !== "") {
      return false
    }

    let key = e.keyCode

    //////////////////// VALIDATION SWITCH ///////////////////
    switch (true) {
      case (key === 13 && showPhone === false && name !== ""):
        this.setState({
          showPhone: true,
          valid: true
        })
        break;

      case (key === 13 && showEmail === false && phone !== ""):
        this.setState({
          showEmail: true,
          valid: true
        })
        break;

      case (key === 13 && showMsg === false && email !== ""):
        this.setState({
          showMsg: true,
          valid: true
        })
        break;

      case ((key === 13 && showValid === false && msg !== "") &&
        (name !== "") &&
        (phone !== "") &&
        (email !== "")):
        this.setState({
          showValid: true
        })
        break;
    }

    //////////////////// ALERT SWITCH ///////////////////
    switch (true) {
      case (key === 13 && showPhone === false && name === ""):
        this.setState({
          alert: "Name is empty... Please type in a name",
        })
        break;

      case (key === 13 && showEmail === false && phone === "" && this.state.valid === false):
        this.setState({
          alert: "Phone is empty... Please type in a phone number",
        })
        break;

      case (key === 13 && showMsg === false && email === "" && this.state.valid === false):
        this.setState({
          alert: "Email is empty... Please type in an Email",
        })
        break;

      case ((key === 13 && showValid === false && this.state.valid === false && msg === "")):
        this.setState({
          alert: "Message is empty... Please type in a message"
        })
        break;
    }
    this.setState({
      valid: false
    })

  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    const { showValid, name, phone, email, msg } = this.state

    if ((showValid === true && name === "") ||
      (showValid === true && phone === "") ||
      (showValid === true && email === "") ||
      (showValid === true && msg === "")) {

      this.setState({
        alert: "One or more fields are empty... Please fill in all fields before sending"
      })
      e.preventDefault()
      return false
    }

    if (name === "" ||
      phone === "" ||
      email === "" ||
      msg === "") {
      e.preventDefault()
      return false
    }

    e.preventDefault()
  }

  resetForm() {
    this.setState({
      showName: false,
      showPhone: false,
      showEmail: false,
      showMsg: false,
      showValid: false
    })
  }

  render() {
    const { date, browser } = this.props;
    const { showName, showPhone, showEmail, showMsg, showValid, alert, sentAlert } = this.state
    return (
      <div className="container" id="contact">
        <div className="form-container text-container">
          <div className="contact-container">
            <h3>
              <span className="bracket">&lt; </span>
              Contact
              <span className="bracket"> /&gt;</span>
            </h3>

            <div className="border-left">
              <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                <p>
                  <span className="code">Last Login: </span>
                  <span className="date">{date} on </span>
                  <span className="green">{browser}</span>
                </p>

                <p> If you're interested in contacting me, please fill out the form below <span className="code">(press enter / return on phone, to proceed)</span>.</p>


                {showName === true ? <div className="input-field">
                  <label htmlFor="name">Name: </label>
                  <input type="text" className="name" id="name" onChange={this.handleChange} onKeyDown={this.keyCode} />
                </div> : null}


                <div className={showPhone === true ? "show input-field" : "hide input-field"}>
                  <label htmlFor="phone">Phone: </label>
                  <input type="text" className="phone" id="phone" onChange={this.handleChange} onKeyDown={this.keyCode} />
                </div>


                <div className={showEmail === true ? "show input-field" : "hide input-field"}>
                  <label htmlFor="email">Email: </label>
                  <input type="text" className="email" id="email" onChange={this.handleChange} onKeyDown={this.keyCode} />
                </div>


                <div className={showMsg === true ? "show input-field textarea" : "hide input-field textarea"}>
                  <label htmlFor="msg">Msg: </label>
                  <textarea className="msg" id="msg" rows="4" cols="90" onChange={this.handleChange} onKeyDown={this.keyCode} autoFocus />
                </div>


                <div className={showValid === true ? "show input-field form-button-cont" : "hide input-field form-button-cont"}>
                  <button type="submit" className="submit mb-4" name="submit">Form is disabled</button>
                  <a className="green" href="mailto:gaut.del@proton.me" >email me @ gaut.del@proton.me</a>
                </div>


                <div className="alert">{alert}</div>
                <div className="alert final-alert">{sentAlert}</div>
              </form>
            </div>

            <h3>
              <span className="bracket">&lt; </span>
              Contact
              <span className="bracket"> /&gt;</span>
            </h3>
          </div>

          <div className="info-container">
            <h3>
              <span className="bracket">&lt; </span>
              Info
              <span className="bracket"> &gt;</span>
            </h3>

            <div className="border-left">
              <p className="green">
                <span className="code">Email </span>
                gaut.del@proton.me
              </p>
              <p className="green">
                <span className="code">Phone </span>
                +33 06 30 14 92 55
              </p>
              <p className="green">
                <span className="code">LinkedIn </span>
                linkedin.com/in/gauthier-delalleau/
              </p>
            </div>

            <h3>
              <span className="bracket">&lt; </span>
              Info
              <span className="bracket"> /&gt;</span>
            </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
