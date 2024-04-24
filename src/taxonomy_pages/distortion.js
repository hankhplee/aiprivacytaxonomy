import React from 'react';
import Navbar from '../navbar';
import Sidebar from './sidebar'; // Import the Sidebar component
import '../App.css';
import '../individual_taxonomy.css';
import { useEffect } from 'react';



// Assuming you have imported necessary images for the cards
import CardImage1 from '../images/distortion-img-1.webp';
import CardImage2 from '../images/distortion-img-2.webp';
import CardImage3 from '../images/distortion-img-3.png';


import GoToTop from '../GoToTop'


const Distortion = () => {
  useEffect(() => {
    document.title = 'AI Privacy Taxonomy | Distortion';
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="bottom-padding main-individual-padding"> {/* Added padding */}
        <h1 className="main-title">Distortion</h1>
        <h2 className="subtitle">disseminating false or misleading information about people</h2> {/* Adjusted margin */}
        <h1 className="subtitle bold top-padding-small">How does AI influence the risk?</h1>
        <div className="blue-line"></div> {/* Blue line */}
        <p className="info-paragraph3">
        AI creates new types of distortion risks through the generation of realistic fake images and audio that humans have difficulty discerning as fake.
        </p>

        {/* Two new cards */}
        <div className="card-container-news">
          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage1} alt="Card 1" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Misuse of Prime Voice AI</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>Prime Voice AI, a text-to-voice generator, was misused to create the voices of celebrities to "make racist remarks about the US House representative”, and that the AI-generated clips “run the gamut from harmless, to violent, to transphobic, to homophobic, to racist."</p>
              </div>
            </div>
            <a href="https://vice.com/en/article/dy7mww/ai-voice-firm-4chan-celebrity-voices-emma-watson-joe-rogan-elevenlabs" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage2} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Unauthorized Use of AI to Recreate Anthony Bourdain's Voice</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>Roadrunner, a documentary was revealed to be using deepfake technology to create voice, with the likeness of an actor who had passed away, for lines "he wanted [Anthony] Bourdain’s (the main character of the documentary) voice for but had no recordings of."</p>
              </div>
            </div>
            <a href="https://www.newyorker.com/culture/annals-of-gastronomy/the-haunting-afterlife-of-anthony-bourdain" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>

          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage3} alt="Card 3" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Scammers Used AI-Generated Hologram to Impersonate</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>Patrick Hillmann, a chief communications officer of Binance (a crpyocurrenct exchange), found a team used manipulated video from his TV appearances to create an AI hologram to fool representatives of various cryptocurrency projects on Zoom into believing they were being considered for listing on the exchange.</p>
              </div>
            </div>
            <a href="https://www.binance.com/en/blog/community/scammers-created-an-ai-hologram-of-me-to-scam-unsuspecting-projects-6406050849026267209" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
        </div>
        
      </div>
      <GoToTop/>

    </div>
  );
};

export default Distortion;