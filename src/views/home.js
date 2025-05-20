import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Character NFT template</title>
        <meta property="og:title" content="Character NFT template" />
      </Helmet>
      <header className="home-header1">
        <header data-thq="thq-navbar" className="home-navbar">
          <code className="home-logo">14fintech</code>
          <h3 className="home-header2">
            <span className="home-text10">917.259.1043</span>
            <br></br>
          </h3>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          ></div>
          <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu"></div>
        </header>
      </header>
      <section className="home-landing">
        <div className="home-heading">
          <h3 className="home-header3">Your Strategic Execution Partner</h3>
          <h3 className="home-header4">
            <span className="home-text12">
              We design, develop, and maintain bespoke fintech systems.
            </span>
            <br></br>
          </h3>
          <img
            alt="image"
            src="/data-1400w.jpg"
            loading="eager"
            className="home-fintech-cloud"
          />
        </div>
      </section>
      <section className="home-description">
        <h3 className="home-header5">
          <span className="home-text14">
            Together we challenge the norms, fuel innovation, and unlock new
            possibilities. We transform bold ideas into impactful technologies,
            driving meaningful change.
          </span>
          <br></br>
          <br></br>
        </h3>
        <h3 className="home-header6">
          <br></br>
          <span>sales [at] 14fintech.com</span>
          <br></br>
          <span>917.259.1043</span>
          <br></br>
          <span>14 Wall Street, New York, NY 10005</span>
          <br></br>
        </h3>
        <span className="home-copyright">
          © 2025 14fintech. All Rights Reserved.
        </span>
      </section>
    </div>
  )
}

export default Home
