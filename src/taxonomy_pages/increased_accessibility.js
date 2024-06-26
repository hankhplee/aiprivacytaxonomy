import React from 'react';
import NavbarSidebar from '../navbar_sidebar';
import Sidebar from './sidebar'; // Import the Sidebar component
import '../App.css';
import '../individual_taxonomy.css';
import { useEffect, useState } from 'react';


// Assuming you have imported necessary images for the cards
import CardImage1 from '../images/increased-accessibility-img-1.webp';
import CardImage2 from '../images/increased-accessibility-img-2.webp';
import CardImage3 from '../images/increased-accessibility-img-3.jpg';


import GoToTop from '../GoToTop'


const IncreasedAccessibility = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
    useEffect(() => {
        document.title = 'AI Privacy Taxonomy | Increased Accessibility';
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
        <h1 className="main-title-2">Increased Accessibility</h1>
        <h2 className="subtitle">making it easier for a wider audience of people to access potentially sensitive information</h2> {/* Adjusted margin */}
        <h1 className="subtitle bold top-padding-small">How does AI influence the risk?</h1>
        <div className="blue-line"></div> {/* Blue line */}
        <p className="info-paragraph3">
        AI exacerbates the scale of increased accessibility risks via publicizing largescale datasets that contain personal information, for the use of building and improving AI/ML models.
        </p>

        {/* Two new cards */}
        <div className="card-container-news">
          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage1} alt="Card 1" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">OkCupid Facial Dataset Sharing </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>OkCupid dataset contained personal information such as users’ location, demographics, sexual preferences, and drug use, and was uploaded to Open Science Framework to facilitate research on modeling dating behaviors. </p>
              </div>
            </div>
            <a href="https://www.forbes.com/sites/emmawoollacott/2016/05/13/intimate-data-of-70000-okcupid-users-released/?sh=577e987b1e15" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage2} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Secretly Collected Student Footages Were Made Public For Research Purposes</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>The UnConstrained College Students Dataset (UCSD), which includes 16,000 photos of about 1,700 University of Colorado, Colorado Springs students was available for public use for research purposes (e.g., developing recognition technology). </p>
              </div>
            </div>
            <a href="https://www.denverpost.com/2019/05/27/cu-colorado-springs-facial-recognition-research/" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>

          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage3} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">People in Photo Albums (PIPA) Dataset</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>The People in Photo Albums (PIPA) dataset comprises facial photographs collected from semi-public images was curated to facilitate the recognition of individuals' identities in unconstrained photo album settings. </p>
              </div>
            </div>
            <a href="https://exposing.ai/pipa/" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
        </div>
      </div>
      <GoToTop/>
    </div>
  );
};

export default IncreasedAccessibility;