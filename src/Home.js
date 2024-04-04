import React from 'react';
import './App.css';
import Navbar from './navbar.js';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Publication from './publication';
import Methods from './methods';
import BookIcon from './images/book-check.png';
import DataFlow from './images/data-flow-img.png';
import DataDisseminationIcon from './images/data-dissemination-icon.png'; // Import circle images for each column
import DataCollectionIcon from './images/data-collection-icon.png';
import InvasionIcon from './images/invasion-icon.png';
import DataProcessingIcon from './images/data-processing-icon.png';

const columnData = [
    {
      circleImage: DataDisseminationIcon,
      cards: [
        { id: 1, title: 'Exposure', content: 'Content 1' },
        { id: 2, title: 'Distortion', content: 'Content 2' },
        { id: 3, title: 'Disclosure', content: 'Content 3' },
        { id: 4, title: 'Increased Accessibility', content: 'Content 4' }

      ]
    },
    {
      circleImage: DataCollectionIcon,
      cards: [
        { id: 5, title: 'Surveillance', content: 'Content 5' }
      ]
    },
    {
      circleImage: InvasionIcon,
      cards: [
        { id: 6, title: 'Intrusion', content: 'Content 6' }
      ]
    },
    {
      circleImage: DataProcessingIcon,
      cards: [
        { id: 7, title: 'Identification', content: 'Content 7' },
        { id: 8, title: 'Aggregation', content: 'Content 8' },
        { id: 9, title: 'Phrenology / Physiognomy', content: 'Content 9' },
        { id: 10, title: 'Secodnary Use', content: 'Content 10' },
        { id: 11, title: 'Exclusion', content: 'Content 10' },
        { id: 12, title: 'Insecurity', content: 'Content 10' }
      ]
    }
  ];


function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="header-container">
        <div className="gradient-overlay"></div> {/* Gradient overlay */}
        <div className="header-text">
          <div className="content">
            <h1 className="main-title">AI Privacy Taxonomy Project</h1> {/* Increased font size and made bold */}
            <h2 className="subtitle">An analysis of deepfakes, surveillance, phrenology, and more</h2> {/* Removed bold */}
            <button className="learn-more-button"> {/* Increased button size and made text bold */}
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* End of header-container */}

      {/* Separate content container */}
      <div className="info-paragraph">
        <h1 className="paragraph-title">The Problem</h1> {/* Increased font size and made bold */}
        <div className="blue-line"></div> {/* Blue line */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra sit amet sapien vel facilisis. Proin at turpis vel leo tincidunt luctus. Proin egestas erat at dui sagittis posuere. Sed id velit ac justo cursus maximus. Integer malesuada quis felis at vulputate. Morbi lobortis, diam vel lobortis mollis, dui ligula commodo tortor, nec tincidunt neque justo quis metus.</p> {/* Paragraph content */}

         {/* Card container */}
        <div className="card-container">
            {/* Card 1 */}
            <div className="card">
                <div className="left-content">
                <div className="large-card-text">321</div>
                <div className="small-card-text">Documents Analyzed</div>
                </div>
                <div className="right-content">
                    <img className="card-image-placeholder" src={BookIcon}></img>
                </div>
            </div>

            {/* Card 2 */}
            <div className="card">
                <div className="left-content">
                <div className="large-card-text">321</div>
                <div className="small-card-text">Documents Analyzed</div>
                </div>
                <div className="right-content">
                    <img className="card-image-placeholder" src={BookIcon}></img>
                </div>
            </div>

            {/* Card 3 */}
            <div className="card">
                <div className="left-content">
                <div className="large-card-text">321</div>
                <div className="small-card-text">Documents Analyzed</div>
                </div>
                <div className="right-content">
                <img className="card-image-placeholder" src={BookIcon}></img>
                </div>
            </div>
        </div>
      </div>

      <div className="info-paragraph">
        <h1 className="paragraph-title">Types of AI Privacy Risks</h1> {/* Increased font size and made bold */}
        <div className="blue-line"></div> {/* Blue line */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra sit amet sapien vel facilisis. Proin at turpis vel leo tincidunt luctus. Proin egestas erat at dui sagittis posuere. Sed id velit ac justo cursus maximus. Integer malesuada quis felis at vulputate. Morbi lobortis, diam vel lobortis mollis, dui ligula commodo tortor, nec tincidunt neque justo quis metus.</p> {/* Paragraph content */}


        <div className="img-container">
          {/* Card 1 */}
          <img src={DataFlow} alt="data flow"/>
        </div>
         {/* Card container */} 
      </div>
      {/* End of card container */}

      {/* Circle container */}
      <div className="circle-container">

      {columnData.map((column, index) => (
        <div key={index} className="column">
            <div className="circle-image">
                <img src={column.circleImage} alt={`circle${index + 1}`} className="circle" />
            </div>
          <div className="column-content">
            {/* Map through cards to create cards in each column */}
            {column.cards.map(card => (
                <Link to={`/${card.title.toLowerCase()}`} key={card.id} className="card-link">
                    <div key={card.id} className="card">
                        <div className="left-content">
                            <div className="medium-card-text">{card.title}</div>
                            <div className="tiny-card-text">{card.content}</div>
                        </div>
                        <div className="right-content">
                            <img className="card-image-placeholder" src={BookIcon} alt="book icon" />
                        </div>
                    </div>
                </Link>
            ))}
            </div>
          </div>
      ))}
    </div>
    </div>
  );
}

export default Home;
