import React from 'react';
import Navbar from '../navbar';
import Sidebar from './sidebar'; // Import the Sidebar component
import '../App.css';
import '../individual_taxonomy.css';
import { useEffect } from 'react';



// Assuming you have imported necessary images for the cards
import CardImage1 from '../images/intrusion-img-1.avif';
import CardImage2 from '../images/intrusion-img-2.jpg';
import CardImage3 from '../images/intrusion-img-3.jpg';
import CardImage4 from '../images/intrusion-img-4.jpg';


import GoToTop from '../GoToTop'


const Intrusion = () => {
    useEffect(() => {
        document.title = 'AI Privacy Risk | Intrusion';
      }, []);
  return (
    <div className="App">
      <Navbar />
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="bottom-padding main-individual-padding"> {/* Added padding */}
        <h1 className="main-title">Intrusion</h1>
        <h2 className="subtitle">actions that disturb one’s solitude in physical space</h2> {/* Adjusted margin */}
        <h1 className="subtitle bold top-padding-small">How does AI influence the risk?</h1>
        <div className="blue-line"></div> {/* Blue line */}
        <p className="info-paragraph3">
        AI exacerbates the scale and ubiquity of intrusion risks via enabling centralized and/or ubiquitous surveillance infrastructures.
        </p>

        {/* Two new cards */}
        <div className="card-container-news">
          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage1} alt="Card 1" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Ring: a Smart Doorbell  </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>Ring, a smart doorbell that enables homeowners to monitor activities and conversations near where the doorbell is installed has raised concern due to "the devices' excessive ability" to capture data of an individual's neighbors. </p>
              </div>
            </div>
            <a href="https://www.theguardian.com/uk-news/2021/oct/14/amazon-asks-ring-owners-to-respect-privacy-after-court-rules-usage-broke-law" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage2} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Cooler Screens: Personalized Real-Time Advertisements on Retailer's Refrigerated Doors</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>Walgreens uses digital screens in stores with front-facing sensors to show customers personalized adevertisement. </p>
              </div>
            </div>
            <a href="https://www.cnn.com/2022/03/12/business/walgreens-freezer-screens/index.html" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>

          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage3} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Amazon's Halo Fitness Tracker: Discover More About Yourself</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>Amazon's Halo fitness tracker uses AI to analyze a user's conversations to highlight when and how often that user spoke in a manner that was indicative of their being "happy, discouraged, or skeptical." </p>
              </div>
            </div>
            <a href="https://appleinsider.com/articles/20/12/02/review-amazon-halo-is-incredibly-invasive-but-helps-you-learn-about-yourself" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>

          {/* <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage4} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Camera Above the Classroom in Nanjing </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>Pharmaceutical University in Nanjing, China, implemented a recognition system at various locations on campus to closely monitor students’ attendance and learning behaviors.  </p>
              </div>
            </div>
            <a href="https://www.sixthtone.com/news/1003759" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div> */}
        </div>
      </div>
      <GoToTop/>
    </div>
  );
};

export default Intrusion;