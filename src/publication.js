import React, { useState } from 'react';
import './publication.css';
import './App.css';


function Publication() {
  const pdfUrl = "https://arxiv.org/pdf/2310.07879.pdf";

  return (
    <div className="App">
      <div className="header-container-3">
        <div className="gradient-overlay"></div> {/* Gradient overlay */}
        <div className="header-text">
          <div className="content">
            <h1 className="main-title">Publication</h1>
            <h2 className="subtitle">The official paper behind this website, <br/>along with the people who made this possible</h2> {/* Removed bold */}

          </div>
        </div>
      </div>

      <div className="info-paragraph">
        <h1 className="paragraph-title">Reference Info</h1> {/* Increased font size and made bold */}
        <div className="blue-line"></div> {/* Blue line */}
        <p>Hao-Ping (Hank) Lee, Yu-Ju Yang, Thomas Serban von Davier, Jodi Forlizzi, 
            and Sauvik Das. 2024. Deepfakes, Phrenology, Surveillance, and More! 
            A Taxonomy of AI Privacy Risks. In Proceedings of the CHI Conference on Human 
            Factors in Computing Systems (CHI ’24), May 11–16, 2024, Honolulu, HI, USA. ACM, 
            New York, NY, USA, 30 pages.</p>
        <div>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="pdf-link">{pdfUrl}</a>
        </div>
        <div className = "pdf-container">
          {pdfUrl && (
            <iframe
              title="PDF Viewer"
              src={pdfUrl}
              width="100%"
              height="1000"
              style={{ border: '1px solid black' }}
            ></iframe>
          )}
        </div>
    </div>
  </div>
  );
}

export default Publication;