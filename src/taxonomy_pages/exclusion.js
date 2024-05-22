import React from 'react';
import NavbarSidebar from '../navbar_sidebar';
import Sidebar from './sidebar'; // Import the Sidebar component
import '../App.css';
import '../individual_taxonomy.css';
import { useEffect, useState } from 'react';



// Assuming you have imported necessary images for the cards
import CardImage1 from '../images/exclusion-img-1.webp';
import CardImage2 from '../images/exclusion-img-2.webp';
import CardImage3 from '../images/exclusion-img-3.jpg';


import GoToTop from '../GoToTop'


const Exclusion = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
    useEffect(() => {
        document.title = 'AI Privacy Taxonomy | Exclusion';
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
        <h1 className="main-title-2">Exclusion</h1>
        <h2 className="subtitle">the failure to provide end-users with notice and control over how their data is being used</h2> {/* Adjusted margin */}
        <h1 className="subtitle bold top-padding-small">How does AI influence the risk?</h1>
        <div className="blue-line"></div> {/* Blue line */}
        <p className="info-paragraph3">
        AI exacerbates exclusion risks by training on rich personal data without consent.
        </p>

        {/* Two new cards */}
        <div className="card-container-news">
          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage1} alt="Card 1" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Airbnb Assess Users' Trustworthiness Scoring </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>Airbnb bought "trustworthiness" algorithm and covertly used publicly accessible social media posts to ascertain if a potential customer was trustworthy enough to offer the booking service.  </p>
              </div>
            </div>
            <a href="https://www.thenewdaily.com.au/news/2022/03/22/choice-airbnb-trust-algorithm" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage2} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Clearview AI Live Facial Recognition</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>Clearview AI built a private face recognition model trained on three billion photos that were "scraped from Facebook, YouTube, Venmo and millions of other websites." </p>
              </div>
            </div>
            <a href="https://www.buzzfeednews.com/article/ryanmac/clearview-ai-fbi-ice-global-law-enforcement" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>

          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage3} alt="Card 3" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">LAION Dataset: Use of Private Medical Images for Training</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>LAION-5B is a large, openly accessible image-text dataset for training ML models. However, a person found that her private medical photographs were referenced in the public dataset, and suspected that "someone stole the image from my deceased doctor’s files and it ended up somewhere online, and then it was scraped into this dataset." </p>
              </div>
            </div>
            <a href="https://arstechnica.com/information-technology/2022/09/artist-finds-private-medical-record-photos-in-popular-ai-training-data-set/" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
        </div>
      </div>
      <GoToTop/>
    </div>
  );
};

export default Exclusion;