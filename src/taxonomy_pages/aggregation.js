import React from 'react';
import Navbar from '../navbar';
import Sidebar from './sidebar'; // Import the Sidebar component
import '../App.css';
import '../individual_taxonomy.css';
import { useEffect } from 'react';



// Assuming you have imported necessary images for the cards
import CardImage1 from '../images/aggregation-img-1.webp';
import CardImage2 from '../images/aggregation-img-2.avif';
import CardImage3 from '../images/aggregation-img-3.webp';
import CardImage4 from '../images/aggregation-img-4.webp';

import GoToTop from '../GoToTop'


const Aggregation = () => {
    useEffect(() => {
        document.title = 'AI Privacy Risk | Aggregation';
      }, []);
  return (
    <div className="App">
      <Navbar />
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="bottom-padding main-individual-padding"> {/* Added padding */}
        <h1 className="main-title">Aggregation</h1>
        <h2 className="subtitle">combining various pieces of data about a person to make inferences beyond what is explicitly captured in those data</h2> {/* Adjusted margin */}
        <h1 className="subtitle bold top-padding-small">How does AI influence the risk?</h1>
        <div className="blue-line"></div> {/* Blue line */}
        <p className="info-paragraph3">
        AI creates new types of aggregation risks owing to their scale, latency, ubiquity, and their ability to forecast enduser behavior and infer end-user attributes.
        </p>

        {/* Two new cards */}
        <div className="card-container-news">
          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage1} alt="Card 1" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">UK Police: AI to Predict and Prevent Violent Crime </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>National Data Analytics Solution (NDAS), a system built by the UK law enforcement, uses a combination of AI and statistics to try to assess the risk of someone committing or becoming a victim of gun or knife crime. </p>
              </div>
            </div>
            <a href="https://www.newscientist.com/article/2186512-exclusive-uk-police-wants-ai-to-stop-violent-crime-before-it-happens/" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage2} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Predictim: Scanning for the Perfect Babysitter</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>Predictim, an AI start-up created a service that assesses a prospective babysitter's likelihood to engage in risky behaviors such as drug abuse and bullying by "scan[ning] ... thousands of Facebook, Twitter and Instagram posts."  </p>
              </div>
            </div>
            <a href="https://www.washingtonpost.com/technology/2018/11/16/wanted-perfect-babysitter-must-pass-ai-scan-respect-attitude/" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage3} alt="Card 3" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Apple Cycle Tracking Fertility Predictions </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>Apple utilizes the Apple Watch to monitor fluctuations of data such as temperature, and correlate it with a user's logged ovulation cycle to predict user's ovulation periods. </p>
              </div>
            </div>
            <a href="https://www.theverge.com/2022/9/7/23341259/apple-watch-series-8-ovulation-period-tracking-temperature-sensor" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          {/* <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage4} alt="Card 4" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Amazon voice-sniffing algorithm </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>Amazon Alexa, activated by wake words like "Alexa" has faced accusations of eavesdropping on customers' conversations, and could infer who is present in a room, who is speaking, and other information that can be algorithmically inferred from voice data  </p>
              </div>
            </div>
            <a href="https://www.bbc.com/news/technology-43725708" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div> */}
          
        </div>
      </div>
      <GoToTop/>
    </div>
  );
};

export default Aggregation;