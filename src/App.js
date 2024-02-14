import React, { useState } from 'react';
import './App.css';

function App() {
  const pdfUrl = "https://arxiv.org/pdf/2310.07879.pdf";

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Taxonomy Project</h1>
        <p>Full Website Coming Soon...</p>
        <div>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="pdf-link">{pdfUrl}</a>
        </div>
        <div className = "pdf-container">
          {/* You can display the PDF using an iframe */}
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

export default App;