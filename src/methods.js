import React from 'react';
import './App.css';
import Navbar from './navbar.js';
import { Route, Routes } from 'react-router-dom';
import Publication from './publication';
import App from './App';
import methodGraphic from './images/methods-graphic.png'
import cohensKappa from './images/cohens-kappa.png'

import GoToTop from './GoToTop'



const Methods = () => {
  return (
    <div className="App">
      <div className="header-container2">
        <div className="gradient-overlay"></div> {/* Gradient overlay */}
        <div className="header-text">
          <div className="content">
            <h1 className="main-title">Methods and Processes</h1> {/* Increased font size and made bold */}
            <h2 className="subtitle">The strategies used to generate important AI-related insights</h2> {/* Removed bold */}
            <button className="learn-more-button"> {/* Increased button size and made text bold */}
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* End of header-container */}

      {/* Separate content container */}
      <div className="info-paragraph">
        <h1 className="paragraph-title">AI, Algorithmic and Automation Incident and <br/>Controversy Repository (AIAAIC)</h1> {/* Increased font size and made bold */}
        <div className="blue-line"></div> {/* Blue line */}
        <p>We drew on the AI, Algorithmic and Automation Incident and Controversy Repository (AIAAIC) to analyze 321 documented AI privacy incidents. Rooting our analysis on Solove’s taxonomy of privacy, we found that the unique capabilities and data requirements of AI can create new and exacerbate known privacy intrusions across 12 high-level categories: intrusion, identification, distortion, exposure, aggregation, phrenology/physiognomy, disclosure, surveillance, exclusion, secondary use, insecurity, and increased accessibility (see the figure here). In short, we found the unique capabilities of AI create new types of privacy intrusions, while the massive data requirements of AI can exacerbate intrusions that are already well known</p> {/* Paragraph content */}

         {/* Card container */}
        <div className="img-container">
          {/* Card 1 */}
          <img src={methodGraphic} alt="methods"/>
        </div>
      </div>

      <div className="info-paragraph">
        <h1 className="paragraph-title">Measuring the Reliability of Our Processes</h1> {/* Increased font size and made bold */}
        <div className="blue-line"></div>
        <p>To summarize our qualitative analysis procedure, the first author iteratively applied the codebook to 132 cases to update and better scope the definition of each privacy risk in active discussion with four other authors and constructed the initial codebook. Another author joined the coding process when the initial codebook was constructed. This author was trained with the codebook and independently coded the same set of 132 cases. The codes were then iteratively refined and discussed when disagreements occurred until both authors agreed on all codes in the codebook. To validate the inter-rater reliability, the two coders then independently coded another 65 cases (20% of our overall analysis pool; N=321) and reached a high agreement, with Cohen’s Kappa larger than 0.8 on every type of risk and averaging 0.94 on all types of risks (see Appendix Table 2). One coder then coded the rest of the 124 cases. The final codebook comprises 12 types of privacy risks that we identified across the corpus of 321 cases. In determining whether AI newly created, exacerbated, or not meaningfully changed the privacy risks identified in each incident, the two coders engaged in an incident-by-incident discussion for all 321 incidents concerning the root cause of the privacy intrusions, as well as the role AI played in that root cause. The three themes — i.e., create, exacerbate, and no meaningful change — naturally emerged during this process.</p> {/* Paragraph content */}
        <div className="img-container">
          <img style={{maxHeight: "50%", maxWidth: "50%"}} src={cohensKappa} alt="Cohens Kappa"/>
        </div>
      </div>

    <GoToTop/>
    </div>
  );
}

export default Methods;