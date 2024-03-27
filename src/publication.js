import React, { useState } from 'react';
import './publication.css';

function Publication() {
  const pdfUrl = "https://arxiv.org/pdf/2310.07879.pdf";

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Privacy Taxonomy</h1>
        <div>
          <h3>Reference Info:</h3>
          <p>Hao-Ping (Hank) Lee, Yu-Ju Yang, Thomas Serban von Davier, Jodi Forlizzi, 
            and Sauvik Das. 2024. Deepfakes, Phrenology, Surveillance, and More! 
            A Taxonomy of AI Privacy Risks. In Proceedings of the CHI Conference on Human 
            Factors in Computing Systems (CHI ’24), May 11–16, 2024, Honolulu, HI, USA. ACM, 
            New York, NY, USA, 30 pages.</p>
        </div>
        <p>Full Website Coming Soon...</p>
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
      </header>
    </div>
  );
}

export default Publication;