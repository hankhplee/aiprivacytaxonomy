import React from 'react';
import Navbar from '../navbar';
import Sidebar from './sidebar'; // Import the Sidebar component
import '../App.css';
import '../individual_taxonomy.css';
import { useEffect } from 'react';



// Assuming you have imported necessary images for the cards
import CardImage1 from '../images/china_police.jpg';
import CardImage2 from '../images/surveillance-img-2.avif';
import CardImage3 from '../images/surveillance-img-3.webp';


import GoToTop from '../GoToTop'


const Surveillance = () => {
  useEffect(() => {
    document.title = 'AI Privacy Taxonomy | Surveillance';
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="main-individual-padding"> {/* Added padding */}
        <h1 className="main-title">Surveillance</h1>
        <h2 className="subtitle">watching, listening to, or recording of an individual’s activities</h2> {/* Adjusted margin */}
        <h1 className="subtitle bold top-padding-small">How does AI influence the risk?</h1>
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
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>A predictive policing platform deployed in Xinjiang, China,"collects [individual’s] information from a variety of sources including CCTV cameras and Wi-Fi sniffers, as well as existing databases of health information, banking records, and family planning history." </p>
              </div>
            </div>
            <a href="https://www.hrw.org/news/2018/02/27/china-big-data-fuels-crackdown-minority-region" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage2} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Gaggle Monitors Students' Data in the Cyber World</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>Gaggle, a student safety management tool, monitors students' digital footprints such as email accounts, online documents, internet usage, and social media accounts to assess and prevent violence and suicides.  </p>
              </div>
            </div>
            <a href="https://www.theguardian.com/world/2019/oct/22/school-student-surveillance-bark-gaggle" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>

          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage3} alt="Card 3" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Travelers Screening and Identification System</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>The South Korean Ministry of Justice attempted to build a government system for screening and identifying travelers based on photos of over 100 million foreign nationals who entered the country through its airports. </p>
              </div>
            </div>
            <a href="https://www.vice.com/en/article/xgdxqd/south-korea-is-selling-millions-of-photos-to-facial-recognition-researchers" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
        </div>
      </div>
      <GoToTop/>
    </div>
  );
};

export default Surveillance;