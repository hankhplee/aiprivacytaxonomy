import React from 'react';
import { useRef } from 'react';

import './App.css';
import Navbar from './navbar.js';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Publication from './publication';
import Methods from './methods';
import BookIcon from './images/book-check.png';
import DataFlow from './images/data-flow-img.png';
import DataDisseminationIcon from './images/data-dissemination-icon.png'; // Import circle images for each column
import DataCollectionIcon from './images/data-collection-icon.png';
import InvasionIcon from './images/invasion-icon.png';
import DataProcessingIcon from './images/data-processing-icon.png';

//individual taxonomies icons
import ExposureIcon from './images/ExposureIcon.png';
import DistortionIcon from './images/DistortionIcon.png';
import DisclosureIcon from './images/DisclosureIcon.png';
import IncreasedAccessibilityIcon from './images/IncreasedAccessibilityIcon.png';
import SurveillanceIcon from './images/SurveillanceIcon.png';
import IntrusionIcon from './images/IntrusionIcon.png';
import IdentificationIcon from './images/IdentificationIcon.png';
import AggregationIcon from './images/AggregationIcon.png';
import PhrenologyPhysiognomyIcon from './images/PhrenologyPhysiognomyIcon.png';
import SecondaryUseIcon from './images/SecondaryUseIcon.png';
import ExclusionIcon from './images/ExclusionIcon.png';
import InsecurityIcon from './images/InsecurityIcon.png';


import GoToTop from './GoToTop'


const columnData = [
    {
      circleImage: DataDisseminationIcon,
      cards: [
        { id: 1, title: 'Exposure', path: 'exposure', icon: ExposureIcon, content: 'revealing sensitive private information' },
        { id: 2, title: 'Distortion', path: 'distortion', icon: DistortionIcon, content: 'disseminating false or misleading information about people' },
        { id: 3, title: 'Disclosure', path: 'disclosure', icon: DisclosureIcon, content: 'revealing and improperly sharing data of individuals' },
        { id: 4, title: 'Increased Accessibility', path: 'increased_accessibility', icon: IncreasedAccessibilityIcon, content: 'easier access for a wider audience of people to sensitive information' }

      ]
    },
    {
      circleImage: DataCollectionIcon,
      cards: [
        { id: 5, title: 'Surveillance', path: 'surveillance', icon: SurveillanceIcon, content: 'watching, listening to, or recording your activities' }
      ]
    },
    {
      circleImage: InvasionIcon,
      cards: [
        { id: 6, title: 'Intrusion', path: 'intrusion', icon: IntrusionIcon, content: 'actions that disturb one’s solitude in physical space' }
      ]
    },
    {
      circleImage: DataProcessingIcon,
      cards: [
        { id: 7, title: 'Identification', path: 'identification', icon: IdentificationIcon, content: 'linking specific data points to your identity' },
        { id: 8, title: 'Aggregation', path: 'aggregation', icon: AggregationIcon, content: 'combining data about you to make inferences beyond what is captured in data' },
        { id: 9, title: 'Phrenology / Physiognomy', path: 'phrenology_physiognomy', icon: PhrenologyPhysiognomyIcon, content: 'inferring social and emotional attributes from physical attributes.' },
        { id: 10, title: 'Secondary Use', path: 'secondary_use', icon: SecondaryUseIcon, content: 'using personal data collected for one purpose for a different purpose without consent' },
        { id: 11, title: 'Exclusion', path: 'exclusion', icon: ExclusionIcon, content: 'failure to provide end-users with notice and control over how their data is being used' },
        { id: 12, title: 'Insecurity', path: 'insecurity', icon: InsecurityIcon, content: 'carelessness in protecting collected personal data due to faulty practices' }
      ]
    }
  ];


function Home() {
  const scrollRef = useRef(null);

  const handleLearnMoreClick = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <Navbar />
      <div className="header-container">
        <div className="gradient-overlay"></div> {/* Gradient overlay */}
        <div className="header-text">
          <div className="content">
            <h1 className="main-title">Deepfakes, Phrenology, Surveillance, and More! A Taxonomy of AI Privacy Risks</h1>
            <h2 className="subtitle">How does AI change privacy risks, if at all?</h2> {/* Removed bold */}
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
        <h1 className="paragraph-title">The Problem</h1> {/* Increased font size and made bold */}
        <div className="blue-line"></div> {/* Blue line */}
        <p>Privacy is a key principle for developing ethical AI technologies, but how does 
          including AI technologies in products and services change privacy risks? We constructed 
          a taxonomy of AI privacy risks by analyzing 321 documented AI privacy incidents. 
          We codified how the unique capabilities and requirements of AI technologies described 
          in those incidents generated new privacy risks, exacerbated known ones, or otherwise did 
          not meaningfully alter the risk. We present 12 high-level privacy risks that AI technologies 
          either newly created (e.g., exposure risks from deepfake pornography) or exacerbated 
          (e.g., surveillance risks from collecting training data). 
</p> {/* Paragraph content */}

         {/* Card container */}
        <div className="card-container">
            {/* Card 1 */}
            <div className="card">
                <div className="left-content">
                <div className="large-card-text">321</div>
                <div className="small-card-text">real-world AI incidents analyzed</div>
                </div>
                <div className="right-content">
                    <img className="card-image-placeholder" src={BookIcon}></img>
                </div>
            </div>

            {/* Card 2 */}
            <div className="card">
                <div className="left-content">
                <div className="large-card-text">12</div>
                <div className="small-card-text">types of AI privacy risks</div>
                </div>
                <div className="right-content">
                    <img className="card-image-placeholder" src={BookIcon}></img>
                </div>
            </div>

            {/* Card 3 */}
            <div className="card">
                <div className="left-content">
                <div className="large-card-text">93%</div>
                <div className="small-card-text">of the incidents, AI either exacerbates a known risk or creates a new risk</div>
                </div>
                <div className="right-content">
                <img className="card-image-placeholder" src={BookIcon}></img>
                </div>
            </div>
        </div>
      </div>

      <div className="info-paragraph">
        <h1 className="paragraph-title">Taxonomy of AI Privacy Risks</h1> {/* Increased font size and made bold */}
        <div className="blue-line"></div> {/* Blue line */}
        <p>We introduce a taxonomy of AI privacy risks: i.e., privacy risks that are created and/or 
          exacerbated by the incorporation of AI technologies into products and services. We found 
          that AI technologies create new instantiations of the known privacy risks 
          (e.g., generative AI can create new types of distortion), create a new category of risk 
          before the modern advances of AI (e.g., resurging phrenology/physiognomy), and 
          exacerbate many of the known risks (e.g., AI technologies can more robustly identify 
          individuals from low fidelity data sources).</p> {/* Paragraph content */}


        <div className="img-container">
          {/* Card 1 */}
          <img src={DataFlow} alt="data flow"/>
        </div>
         {/* Card container */} 
      </div>
      {/* End of card container */}

      {/* Circle container */}
      <div className="circle-container">

      {columnData.map((column, index) => (
        <div key={index} className="column">
            <div className="circle-image">
                <img src={column.circleImage} alt={`circle${index + 1}`} className="circle" />
            </div>
          <div className="column-content">
            {/* Map through cards to create cards in each column */}
            {column.cards.map(card => (
                <Link to={`/${card.path}`} key={card.id} className="card-link">
                    <div key={card.id} className="card">
                        <div className="left-content">
                            <div className="medium-card-text">{card.title}</div>
                            <div className="tiny-card-text">{card.content}</div>
                        </div>
                        <div className="right-content">
                            <img className="card-image-placeholder" src={card.icon} alt="book icon" />
                        </div>
                    </div>
                </Link>
            ))}
            </div>
          </div>
      ))}
    </div>
    
    <GoToTop/>
    </div>
  );
}

export default Home;
