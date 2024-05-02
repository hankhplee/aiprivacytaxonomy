import React from 'react';
import Navbar from '../navbar';
import Sidebar from './sidebar'; // Import the Sidebar component
import '../App.css';
import '../individual_taxonomy.css';
import { useEffect } from 'react';



// Assuming you have imported necessary images for the cards
import CardImage1 from '../images/insecurity-img-1.avif';
import CardImage2 from '../images/insecurity-img-2.avif';
import CardImage3 from '../images/insecurity-img-3.jpg';


import GoToTop from '../GoToTop'


const Insecurity = () => {
    useEffect(() => {
        document.title = 'AI Privacy Taxonomy | Insecurity';
      }, []);
  return (
    <div className="App">
      <Navbar />
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="main-individual-padding"> {/* Added padding */}
        <h1 className="main-title">Insecurity</h1>
        <h2 className="subtitle">carelessness in protecting collected personal data from leaks and improper access due to faulty data storage and data practices</h2> {/* Adjusted margin */}
        <h1 className="subtitle bold top-padding-small">How does AI influence the risk?</h1>
        <div className="blue-line"></div> {/* Blue line */}
        <p className="info-paragraph3">
        AI exacerbates insecurity risks by introducing new vulnerabilities when incorporating AI and its associated data pipeline in the products.
        </p>

        {/* Two new cards */}
        <div className="card-container-news">
          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage1} alt="Card 1" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Lee Luda: a Chatbot Trained on Real-World Text Conversations </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>Lee Luda, a conversational AI chatbot trained on user data, was found to inadvertently expose names, nicknames, and home addresses of the individuals whose data it was trained on.</p>
              </div>
            </div>
            <a href="https://slate.com/technology/2021/04/scatterlab-lee-luda-chatbot-kakaotalk-ai-privacy.html" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage2} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Leaked Photos Taken by Roomba Robot Vacuums</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>Gig workers, hired by iRobot to annotate audio, photo, and video data from their household Roomba robot vacuums for AI training, were found to have leaked raw and sensitive photos online. </p>
              </div>
            </div>
            <a href="https://www.standard.co.uk/news/tech/photo-woman-toilet-robot-vacuum-cleaner-facebook-b1048446.html" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>

          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage3} alt="Card 3" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Google Allo Read Users' Chat Content</h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>Allo, a messaging app that Google first launched in 2017, included an AI virtual assistant and automatic replies. The messenger was not end-to-end encrypted, allowing for AI models developed by Google to "read" users' chat content and personalize services for them.</p>
              </div>
            </div>
            <a href="https://money.cnn.com/2017/10/25/technology/business/google-allo-facebook-m-offensive-responses/index.html" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
        </div>
      </div>
      <GoToTop/>
    </div>
  );
};

export default Insecurity;