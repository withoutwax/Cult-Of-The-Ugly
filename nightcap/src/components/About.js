import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <section className="about-container">
          <div className="about-section-01-01">
            <h2>guests</h2>
          </div>
          <div className="about-section-02-01">
            <h2>mig ryes,</h2>
            <h2>amy schwartz,</h2>
            <h2>eileen tjan,</h2>
            <h2>aiga chicago</h2>
          </div>
          <div className="about-section-01-02">
            <h2>sponsors</h2>
          </div>
          <div className="about-section-02-02">
            <h2>chicago's historic gems,</h2>
            <h2>the merchandise mart,</h2>
            <h2>tony junior</h2>
          </div>
          <div className="about-section-03">
            ** Photos of people **
          </div>
        </section>
      </div>
    );
  }
}

export default About;
