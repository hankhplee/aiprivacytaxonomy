import React from 'react';
import NavbarSidebar from '../navbar_sidebar';
import Sidebar from './sidebar'; // Import the Sidebar component
import '../App.css';
import '../individual_taxonomy.css';
import { useEffect, useState } from 'react';



// Assuming you have imported necessary images for the cards
import CardImage1 from '../images/exposure-img-1.webp';
import CardImage2 from '../images/exposure-img-2.jpg';
import CardImage3 from '../images/exposure-img-3.avif';


import GoToTop from '../GoToTop'


const Exposure = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
    useEffect(() => {
        document.title = 'AI Privacy Taxonomy | Exposure';
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
      }, []);



  return (
    <div className="App">
      <NavbarSidebar />
      {!isMobile && <Sidebar/>}
      <div className="main-individual-padding"> {/* Added padding */}
        <h1 className="main-title-2">Exposure</h1>
        <h2 className="subtitle">revealing sensitive private information that people view as deeply primordial that we have been socialized into concealing</h2> {/* Adjusted margin */}
        <h1 className="subtitle bold top-padding-small">How does AI influence the risk?</h1>
        <div className="blue-line"></div> {/* Blue line */}
        <p className="info-paragraph3">
          AI creates new types of exposure risks through generative techniques that can reconstruct censored or redacted content; and through exposing inferred sensitive data, preferences, and intentions.
        </p>

        {/* Two new cards */}
        <div className="card-container-news">
          <div className="news-card">
            <div className="news-card-top">
                <div className="news-image">
                  <img src={CardImage1} alt="Card 1" />
                </div>
                <div className="card-content" style={{ paddingTop: '15px' }}>
                  <h2 className="medium-card-text">Deep Learning Video Clarification Tool</h2>
                  <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>TecoGAN, a deep learning video clarification tool, has been used to clarify censored images of genitalia.</p>
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
                  <h2 className="medium-card-text">Xiaoyu Deepfake Pornography</h2>
                  <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>Deepfake technologies have been used to create illegal online pornography businesses that deepfakes images and videos of public figures.</p>
                </div>
            </div>
            <a href="https://newbloommag.net/2021/10/19/deepfake-arrest/" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>

          <div className="news-card">
            <div className="news-card-top">
                <div className="news-image">
                  <img src={CardImage3} alt="Card 3" />
                </div>
                <div className="card-content" style={{ paddingTop: '15px' }}>
                  <h2 className="medium-card-text">Shenzhen Uses LED Screen and Government Website to Shame Jaywalkers</h2>
                  <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>In Shenzhen, China, a system was implemented to detect jaywalking and other offenses captured by cameras. The system identifies offenders and displays their photographs, names, and social identification numbers on LED screens placed at road junctions and government website.</p>
                </div>
            </div>
            <a href="https://www.abc.net.au/news/2018-03-20/china-deploys-ai-cameras-to-tackle-jaywalkers-in-shenzhen/9567430" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
        </div>
      </div>
      <GoToTop/>
    </div>
  );
};

export default Exposure;


