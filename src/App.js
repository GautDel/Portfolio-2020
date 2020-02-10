import React, { Component, Suspense } from 'react'
import LoadEnergy from "./components/loader/LoadEnergy.js"
import LoadLogo from "./components/loader/LoadLogo.js"
import MobileNav from "./components/navbar/MobileNav.js"
import Nav from "./components/navbar/Nav.js"
import SideMenu from "./components/sidemenu/SideMenu"
import SideBar from "./components/sidebar/SideBar.js"

import './App.css'

const Intro = React.lazy(() => import("./components/intro/Intro.js"))
const About = React.lazy(() => import("./components/about/About.js"))
const Experience = React.lazy(() => import("./components/experience/Experience.js"))
const Work = React.lazy(() => import("./components/work/Work.js"))
const Form = React.lazy(() => import("./components/contact/Form.js"))
const Footer = React.lazy(() => import("./components/footer/Footer.js"))

class App extends Component {
  state = {
    loading: true,
    hour: null,
    minute: null,
    second: null,
    date: "Fetching Date...",
    minDate: null,
    browser: null,
    scrollPos: 0,
    showNav: true
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.getTime()
    }, 1000)
    this.loaded()
    this.getBrowser()
    setTimeout(() => {
      document.addEventListener("scroll", this.handleScroll.bind(this));
    }, 3000);

  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
    document.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll = (e) => {
    let windowY = window.scrollY
    if (windowY < this.state.scrollPos) {
      this.setState({
        showNav: true
      })
    } else {
      this.setState({
        showNav: false
      })
    }
    this.setState({
      scrollPos: windowY
    })
  }

  getBrowser() {
    let sBrowser, sUsrAg = navigator.userAgent

    if (sUsrAg.indexOf("Firefox") > -1) {
      sBrowser = "Firefox"
      // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
      sBrowser = "Samsung"
      // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
    } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
      sBrowser = "Opera"
      // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
    } else if (sUsrAg.indexOf("Trident") > -1) {
      sBrowser = "IE"
      // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
      sBrowser = "Edge"
      // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Chrome") > -1) {
      sBrowser = "Chrome"
      // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Safari"
      // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
      sBrowser = "Unknown"
    }

    this.setState({
      browser: sBrowser
    })
  }

  getTime() {
    let days = ["Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"]

    let minDays = ["Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"]

    let months = ["January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"]

    let minMonths = ["Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"]

    let date = new Date()
    let dayMonth = date.getDate()
    let day = date.getDay()
    let month = date.getMonth()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    this.setState({
      date: `${days[day]}, ${dayMonth} ${months[month]}`,
      minDate: `${minDays[day]} ${minMonths[month]} ${dayMonth}`,
      hour: hour,
      minute: minute,
      second: second
    })
  }

  showTime() {
    setInterval(() => {
      this.getTime()
    }, 1000)
  }

  loaded = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      })
      this.mobileNav()
    }, 4800)
  }

  mobileNav = () => {
    let hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('.nav'),
      anchors: document.querySelectorAll(".nav a"),

      doToggle: function (e) {
        this.navToggle.classList.toggle('expanded')
        this.nav.classList.toggle('expanded')
      }
    }

    hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e) })
    hamburger.anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) { hamburger.doToggle(e) })
    })
  }

  render() {
    const { showNav, loading, date, hour, minute, second, minDate, browser } = this.state

    return (
      <div className="App">
        {loading ?
          <div className="loader-container">
            <LoadEnergy />
            <LoadLogo />
          </div> :
          <div className="section-container">

            <Nav show={showNav === true ? "show-nav" : "hide-nav"} />
            <MobileNav />
            <Suspense fallback="Loading...">
              <Intro />
              <About
              />
              <Experience />
              <Work date={date} h={hour} m={minute} s={second} />
              <Form date={minDate} browser={browser} />
              <Footer />
            </Suspense>
            <SideMenu />
            <SideBar />
          </div>}
      </div>
    );
  }
}

export default App
