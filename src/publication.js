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
            {/* <h2 className="subtitle">The official paper behind this website, <br/>along with the people who made this possible</h2> Removed bold */}

          </div>
        </div>
      </div>

      <div className="info-paragraph">
        {/* <h1 className="paragraph-title">Reference Info</h1> */}
        {/* <div className="blue-line"></div> */}
        <p><a href='https://arxiv.org/abs/2310.07879'>Deepfakes, Phrenology, Surveillance, and More! A Taxonomy of AI Privacy Risks</a></p>
        <p><i><a href='https://chi2024.acm.org/'>CHI Conference on Human Factors in Computing Systems (CHI) 2024</a></i></p>
        <p><a href='https://hankhplee.com/'>Hao-Ping (Hank) Lee</a>, Yu-Ju Yang, Thomas Serban von Davier, Jodi Forlizzi, 
            and <a href='http://sauvik.me/'>Sauvik Das</a></p>
        {/* <div>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="pdf-link">{pdfUrl}</a>
        </div> */}
        <div>
          <p>
          {"@inproceedings{lee2024aiprivacytaxonomy, title={Deepfakes, Phrenology, Surveillance, and More! A Taxonomy of AI Privacy Risks}, author={Lee, Hao-Ping (Hank) and Yang, Yu-Ju and von Davier, Thomas Serban and Forlizzi, Jodi and Das, Sauvik}, booktitle = {{{CHI Conference}} on {{Human Factors}} in {{Computing Systems}}}, year={2024} }"}
          </p>
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