import React from 'react';
import Navbar from '../navbar';
import Sidebar from './sidebar'; // Import the Sidebar component
import '../App.css';
import '../individual_taxonomy.css';


// Assuming you have imported necessary images for the cards
import CardImage1 from '../images/china_police.jpg';
import CardImage2 from '../images/china_police.jpg';

import GoToTop from '../GoToTop'


const Disclosure = () => {
  return (
    <div className="App">
      <Navbar />
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="bottom-padding main-individual-padding"> {/* Added padding */}
        <h1 className="main-title">Disclosure</h1>
        <h2 className="subtitle">Surveillance refers to watching, listening to, or recording of an individual’s activities.</h2> {/* Adjusted margin */}
        <h1 className="subtitle bold top-padding-small">How is it Related to AI?</h1>
        <div className="blue-line"></div> {/* Blue line */}
        <p className="info-paragraph3">
        AI exacerbates surveillance risks by increasing the scale and ubiquity of personal data collected.
        </p>

        {/* Two new cards */}
        <div className="card-container-news">
          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage1} alt="Card 1" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Xinjiang Predictive Policing Platform </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>A predictive policing platform deployed in Xinjiang, China,“collects [individual’s] information from a variety of sources including CCTV cameras and Wi-Fi sniffers, as well as existing databases of health information, banking records, and family planning history”. </p>
              </div>
            </div>
            <a href="https://www.vice.com/en/article/xgdq87/deepfakes-japan-arrest-japanese-porn" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage2} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Gaggle monitors students' data in the cyber world</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>Gaggle, a student safety management tool, monitors students' digital footprints such as email accounts, online documents, internet usage, and social media accounts to assess and prevent violence and suicides.  </p>
              </div>
            </div>
            <a href="https://www.vice.com/en/article/xgdq87/deepfakes-japan-arrest-japanese-porn" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
        </div>
      </div>
      <GoToTop/>
    </div>
  );
};

export default Disclosure;