import React from 'react';
import Navbar from '../navbar';
import Sidebar from './sidebar'; // Import the Sidebar component
import '../App.css';
import '../individual_taxonomy.css';


// Assuming you have imported necessary images for the cards
import CardImage1 from '../images/secondary-img-1.webp';
import CardImage2 from '../images/secondary-img-2.avif';
import CardImage3 from '../images/secondary-img-3.webp';


import GoToTop from '../GoToTop'


const SecondaryUse = () => {
  return (
    <div className="App">
      <Navbar />
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="bottom-padding main-individual-padding"> {/* Added padding */}
        <h1 className="main-title">Secondary Use</h1>
        <h2 className="subtitle">Secondary use refers to the use of personal data collected for one purpose for a different purpose without end-user consent.</h2> {/* Adjusted margin */}
        <h1 className="subtitle bold top-padding-small">How is it Related to AI?</h1>
        <div className="blue-line"></div> {/* Blue line */}
        <p className="info-paragraph3">
        AI exacerbates secondary use risks by creating new AI capabilities with collected personal data, and (re)creating models from a public dataset.
        </p>

        {/* Two new cards */}
        <div className="card-container-news">
          <div className="news-card">
            <div className="news-card-top">
              <div className="news-image">
                <img src={CardImage1} alt="Card 1" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">IBM Diversity in Faces (DiF) dataset </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '50px' }}>The Diversity in Faces (DiF) dataset was created to improve the research on fairness and accuracy of artificial intelligence face recognition systems across genders and skin colors, and should not be used for commercial purposes. Nevertheless, Amazon and Microsoft were accused of using the dataset to “improve the accuracy of their facial recognition software”.</p>
              </div>
            </div>
            <a href="https://www.theverge.com/2019/3/12/18262646/ibm-didnt-inform-people-when-it-used-their-flickr-photos-for-facial-recognition-training" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage2} alt="Card 2" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">Police illeagly using data from a COVID-19 tracking app </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>Luca, an app that was used for contact tracing during the COVID-19 pandemic in Germany, was found to re-purpose personal data, such as location data, to support law enforcement by “tracking down wit- nesses to a potential crime” </p>
              </div>
            </div>
            <a href="https://www.dailymail.co.uk/news/article-10391567/German-police-use-Covid-tracking-data-track-witnesses-investigation.html" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>

          <div className="news-card">
            <div className="news-card-top">

              <div className="news-image">
                <img src={CardImage3} alt="Card 3" />
              </div>
              <div className="card-content" style={{ paddingTop: '15px' }}>
                <h2 className="medium-card-text">OkCupid dataset sharing with Clarifai </h2>
                <p className="tiny-card-text" style={{ paddingBottom: '20px' }}>OkCupid, a dating site that matches users using an “one-of-a-kind algorithm”, was found to provide an AI startup, Clarifai, to build its facial recognition technology that could identify the age, sex and race of detected faces.</p>
              </div>
            </div>
            <a href="https://www.nytimes.com/2019/07/13/technology/databases-faces-facial-recognition-technology.html" target="_blank" rel="noopener noreferrer" className="learn-more-button news-button">Learn More</a>
          </div>
        </div>
      </div>
      <GoToTop/>
    </div>
  );
};

export default SecondaryUse;