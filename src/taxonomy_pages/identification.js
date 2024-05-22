import React from 'react';
import NavbarSidebar from '../navbar_sidebar';
import Sidebar from './sidebar'; // Import the Sidebar component
import '../App.css';
import '../individual_taxonomy.css';
import { useEffect, useState } from 'react';



// Assuming you have imported necessary images for the cards
import CardImage1 from '../images/identification-img-1.webp';
import CardImage2 from '../images/identification-img-2.webp';
import CardImage3 from '../images/identification-img-3.png';


import GoToTop from '../GoToTop'


const Identification = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
    useEffect(() => {
        document.title = 'AI Privacy Taxonomy | Identification';
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
        <h1 className="main-title-2">Identification</h1>
        <h2 className="subtitle">linking specific data points to an individual's identity</h2> {/* Adjusted margin */}
        <h1 className="subtitle bold top-padding-small">How does AI influence the risk?</h1>
        <div className="blue-line"></div> {/* Blue line */}
        <p className="info-paragraph3">
        AI creates new types of identification risks with respect to scale, latency, robustness, and ubiquity.
        </p>

        {/* Two new cards */}
        <div className="card-container-news">
          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage1} alt="Card 1" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Simulated Masked Face Recognition Dataset</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>Models trained on Simulated Masked Face Recognition Dataset (SMFRD) are capable of identifying persons with a mask on, "violating the privacy of those who wish to conceal their face."</p>
              </div>
            </div>
            <a href="https://venturebeat.com/ai/ai-datasets-are-prone-to-mismanagement-study-finds/" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>

          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage2} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Facebook Tag Suggestions </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>Facebook's now-disabled Tag Suggestions product, through which Facebook demonstrated its ability to automatically identify individuals from uploaded photos. When this feature was in use, Facebook had 1.4 billion daily active users "any time someone uploads a photo that includes what Facebook thinks is your face, you'll be notified even if you weren't tagged."</p>
              </div>
            </div>
            <a href="https://www.wired.com/story/facebook-will-find-your-face-even-when-its-not-tagged/" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>

          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage3} alt="Card 3" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Clearview AI Live Facial Recognition </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>Clearview AI, a facial recognition application that aids U.S. law enforcement in identifying wanted individuals, claims to be able to identify people under a range of obfuscation conditions: "a person can be wearing a hat or glasses, or it can be a profile shot or partial view of their face."</p>
              </div>
            </div>
            <a href="https://www.nytimes.com/2020/01/18/technology/clearview-privacy-facial-recognition.html" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
        </div>
      </div>
      <GoToTop/>

    </div>
  );
};

export default Identification;