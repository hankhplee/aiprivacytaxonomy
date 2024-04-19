import React from 'react';
import Navbar from '../navbar';
import Sidebar from './sidebar'; // Import the Sidebar component
import '../App.css';
import '../individual_taxonomy.css';


// Assuming you have imported necessary images for the cards
import CardImage1 from '../images/phrenology-img-1.avif';
import CardImage2 from '../images/phrenology-img-2.webp';
import CardImage3 from '../images/phrenology-img-3.webp';


import GoToTop from '../GoToTop'


const PhrenologyPhysiognomy = () => {
  return (
    <div className="App">
      <Navbar />
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="bottom-padding main-individual-padding"> {/* Added padding */}
        <h1 className="main-title">Phrenology & Physiognomy</h1>
        <h2 className="subtitle">inferring personality, social, and emotional attributes about an individual from their physical attributes</h2> {/* Adjusted margin */}
        <h1 className="subtitle bold top-padding-small">How does AI influence the risk?</h1>
        <div className="blue-line"></div> {/* Blue line */}
        <p className="info-paragraph3">
        AI creates phrenology/physiognomy risks through learning correlations between arbitrary inputs (e.g., images) and outputs (e.g., sexual orientation).
        </p>

        {/* Two new cards */}
        <div className="card-container-news">
          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage1} alt="Card 1" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Gaydar: an AI Sexual Orientation Prediction Model </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>Gaydar, an AI sexual orientation prediction model, was found to "distinguish between gay or straight people" based on their photos. </p>
              </div>
            </div>
            <a href="https://www.theguardian.com/technology/2017/sep/07/new-artificial-intelligence-can-tell-whether-youre-gay-or-straight-from-a-photograph" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage2} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Guesses Your Name By Your Face</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>Mitre Corp., a non-profit government reserach center has patented a technology that uses facial recognition to predicting a person's name based on facial characteristics.  </p>
              </div>
            </div>
            <a href="https://www.forbes.com/sites/thomasbrewster/2021/04/08/a-2-billion-government-surveillance-lab-created-tech-that-guesses-your-name-by-simply-looking-at-your-face/?sh=1af2622d76b1" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>

          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage3} alt="Card 3" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Class Technologies: a Face-Reading AI for Virtual Classrooms</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>Class Technologies, a company that features in virtual classrooms, has been estimating students' engagement and emotions by analyzing their facial expressions; the analyzed insights were then provided to teachers. </p>
              </div>
            </div>
            <a href="https://www.techradar.com/news/intel-under-fire-over-its-face-reading-ai" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
        </div>
      </div>
      <GoToTop/>
    </div>
  );
};

export default PhrenologyPhysiognomy;