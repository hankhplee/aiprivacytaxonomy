import React, { useState } from 'react';
import './publication.css';
import './App.css';
import { useEffect, useRef } from 'react';
import { IconButton } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PublicationPdfImg from './images/publication-pdf-img.png'

function Publication() {
  const pdfUrl = "https://arxiv.org/pdf/2310.07879.pdf";
  useEffect(() => {
    document.title = 'AI Privacy Taxonomy | Publication';
  }, []);

  const bibtexRef = useRef(null);

  const copyBibTeX = () => {
    const textToCopy = bibtexRef.current.innerText;
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("BibTeX text copied to clipboard!");
  };

  return (
    <div className="App">
      <div className="header-container-3">
        <div className="gradient-overlay"></div>
        <div className="header-text">
          <div className="content">
            <h1 className="main-title">Publication</h1>
          </div>
        </div>
      </div>

      <div className="publication-info-paragraph">
        <div className="image-container">
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            <img
              className="publication-image"
              src={PublicationPdfImg}
              alt="Publication Image"
            />
            <div className="image-overlay">
              <span className="image-overlay-text">Click to read</span>
            </div>
          </a>
        </div>
        <div className = "publication-content">
          <div>
            To learn more about the AI Privacy Taxonomy, please read our CHI'24 paper. If you find our AI Privacy Taxonomy useful for your work, please consider citing our paper. Thanks!
          </div>
          <br/>
          <p><b><a href='https://arxiv.org/abs/2310.07879'>Deepfakes, Phrenology, Surveillance, and More! A Taxonomy of AI Privacy Risks</a></b></p>
          <p><i><a href='https://chi2024.acm.org/'>CHI Conference on Human Factors in Computing Systems (CHI) 2024</a></i></p>
          <p><a href='https://hankhplee.com/'>Hao-Ping (Hank) Lee</a>, <a href='https://www.marisayang.com/'>Yu-Ju Yang</a>, <a href='https://www.linkedin.com/in/thomas-serban-von-davier/'>Thomas Serban von Davier</a>, <a href='https://jodiforlizzi.com/'>Jodi Forlizzi</a>, 
              and <a href='http://sauvik.me/'>Sauvik Das</a></p>
          <div className="bibtex-block">
            <div className="bibtex" ref={bibtexRef}>
              <IconButton onClick={copyBibTeX} aria-label="copy" style={{ color: 'black', padding: '10px' }}>
                <FileCopyIcon />
                <span className="small-publication-text">Copy</span>
              </IconButton>
              <br/>
              {"@inproceedings{lee2024aiprivacytaxonomy, title={Deepfakes, Phrenology, Surveillance, and More! A Taxonomy of AI Privacy Risks}, author={Lee, Hao-Ping (Hank) and Yang, Yu-Ju and von Davier, Thomas Serban and Forlizzi, Jodi and Das, Sauvik}, booktitle = {{{CHI Conference}} on {{Human Factors}} in {{Computing Systems}}}, year={2024} }"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publication;