import React from 'react';
import './navbar.css'; // Assuming you have a separate CSS file for styling the navbar
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/aiprivacytaxonomy" className="title-link">
          <div className="brand">AI Privacy Taxonomy</div>
        </Link>
      </div>
      <div className="right">
        <Link to="/aiprivacytaxonomy" className="link">Home</Link>
        <Link to="/methods" className="link">Methods</Link>
        <Link to="/publication" className="link">Publication</Link>
      </div>
    </div>
  );
}

export default Navbar;