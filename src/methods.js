import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';


import './App.css';
import Navbar from './navbar.js';
import { Route, Routes } from 'react-router-dom';
import Publication from './publication';
import App from './App';
import methodGraphic from './images/methods-graphic.png'
import cohensKappa from './images/cohens-kappa.png'


import GoToTop from './GoToTop'



const Methods = () => {
  useEffect(() => {
    document.title = 'AI Privacy Risk | Methods';
  }, []);
  const scrollRef = useRef(null);

  const handleLearnMoreClick = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="App">
      <div className="header-container2">
        <div className="gradient-overlay"></div> {/* Gradient overlay */}
        <div className="header-text">
          <div className="content">
            <h1 className="main-title">Methods</h1> {/* Increased font size and made bold */}
            {/* <h2 className="subtitle">The strategies used to generate important AI-related insights</h2> Removed bold */}
            <button className="learn-more-button" onClick={handleLearnMoreClick}> {/* Increased button size and made text bold */}
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* End of header-container */}

      <div ref={scrollRef}>
      </div>
      {/* Separate content container */}
      <div className="info-paragraph">
        <h1 className="paragraph-title">Constructing the Taxonomy of AI Privacy Risks Based on AIAAIC</h1> {/* Increased font size and made bold */}
        <div className="blue-line"></div> {/* Blue line */}
        <p>We developed a taxonomy of privacy risks exhibited in documented AI privacy incidents by performing a systematic review of case studies.We partly relied on the <a href='https://www.aiaaic.org/'>AI, Algorithmic, and Automation Incident and Controversy Repository (AIAAIC)</a>, the largest, up-to-date crowdsourced AI incident database curated by journalism professionals.</p> {/* Paragraph content */}

         {/* Card container */}
        <div className="img-container">
          {/* Card 1 */}
          <img src={methodGraphic} alt="methods"/>
        </div>
      </div>

      <div className="info-paragraph">
        <h1 className="paragraph-title">Qualitative Analysis Procedure</h1> {/* Increased font size and made bold */}
        <div className="blue-line"></div>
        <p>One researcher iteratively applied the codebook to cases to update and better scope the definition of each privacy risk in active discussion with four other authors and constructed the initial codebook. The second researcher joined the coding process when the initial codebook was constructed, and was trained with the codebook and independently coded the same set of cases. The codes were then iteratively refined and discussed when disagreements occurred until both authors agreed on all codes in the codebook.</p> {/* Paragraph content */}
        <br/>
        <p>To validate the inter-rater reliability, the two coders independently coded 65 cases (20% of our overall analysis pool) and reached a high agreement, with Cohen's Kappa larger than 0.8 on every type of risk and averaging 0.94 on all types of risks. </p>
        <div className="img-container">
          <img style={{maxHeight: "35%", maxWidth: "35%"}} src={cohensKappa} alt="Cohens Kappa"/>
        </div>
      </div>

    <GoToTop/>
    </div>
  );
}

export default Methods;