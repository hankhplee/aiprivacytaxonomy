import React from 'react';
import './App.css';
import Navbar from './navbar.js';
import { Route, Routes } from 'react-router-dom';
import Publication from './publication';
import Methods from './methods';
import BookIcon from './images/book-check.png';
import DataFlow from './images/data-flow-img.png';




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
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

    </div>
  );
}

export default Home;
