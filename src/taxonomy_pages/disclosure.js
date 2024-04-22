import React from 'react';
import Navbar from '../navbar';
import Sidebar from './sidebar'; // Import the Sidebar component
import '../App.css';
import '../individual_taxonomy.css';
import { useEffect } from 'react';



// Assuming you have imported necessary images for the cards
import CardImage1 from '../images/disclosure-img-1.jpg';
import CardImage2 from '../images/disclosure-img-2.webp';
import CardImage3 from '../images/disclosure-img-3.avif';
import CardImage4 from '../images/disclosure-img-4.webp';
import CardImage5 from '../images/disclosure-img-5.webp';
import CardImage6 from '../images/disclosure-img-6.jpg';


import GoToTop from '../GoToTop'


const Disclosure = () => {
    useEffect(() => {
        document.title = 'AI Privacy Risk | Disclosure';
      }, []);
  return (
    <div className="App">
      <Navbar />
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="bottom-padding main-individual-padding"> {/* Added padding */}
        <h1 className="main-title">Disclosure</h1>
        <h2 className="subtitle">revealing and improperly sharing data of individuals</h2> {/* Adjusted margin */}
        <h1 className="subtitle bold top-padding-small">How does AI influence the exacerbation risk?</h1>
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
                <h2 className="medium-card-text">Google's access to millions of NHS patients' information </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>The UK’s National Health Service partnered with Google to share mental health records and HIV diagnoses of 1.6 million patients to develop a model for detecting acute kidney injury. </p>
              </div>
            </div>
            <a href="https://www.newscientist.com/article/2086454-revealed-google-ai-has-access-to-huge-haul-of-nhs-patient-data/" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage2} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Tamoco data sharing</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>Tamoco, a location information provider in the U.K has been found to selling large volumes of personally identifiable data to clients.  </p>
              </div>
            </div>
            <a href="https://www.bbc.com/news/technology-59063766" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          
          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage3} alt="Card 3" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Bucheon footage sharing</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>South Korean city Bucheon is found to share footage of more than 10,820 CCTV cameras to train and develop biometric algorithms and build tracking system/ </p>
              </div>
            </div>
            <a href="https://www.reuters.com/world/asia-pacific/skorea-test-ai-powered-facial-recognition-track-covid-19-cases-2021-12-13/" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>

        </div>

        <p className="info-paragraph3 top-padding-small">
        AI also creates new types of disclosure risks by inferring additional information beyond what is explicitly captured in the raw data.
        </p>

        {/* Two new cards */}
        <div className="card-container-news">
          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage4} alt="Card 4" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Myanmar Safe City facial recognition </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>The “Safe City” initiative in Myanmar used AI-infused cameras to identify faces and vehicle license plates in public places and alert authorities to individuals with criminal histories.  </p>
              </div>
            </div>
            <a href="https://www.hrw.org/news/2021/03/12/myanmar-facial-recognition-system-threatens-rights" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage5} alt="Card 5" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Apple child sexual abuse material (CSAM) scanning</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>Apple used a system to detect child sexual abuse material (CSAM) by scanning through images before they are uploaded to iCloud Photos, with matches being reviewed by humans and reported to law enforcement. </p>
              </div>
            </div>
            <a href="https://www.bbc.com/news/technology-58109748" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>

          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage6} alt="Card 6" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Beijing Subway passenger credit system</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>In Beijing, passengers with poor social credit scores will be prohibited from using the facial recognition security check service at subway stations. </p>
              </div>
            </div>
            <a href="https://www.bloomberg.com/news/articles/2019-11-25/mass-surveillance-reaches-down-into-beijing-s-subway-network" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
        </div>
      </div>
      <GoToTop/>
    </div>
  );
};

export default Disclosure;