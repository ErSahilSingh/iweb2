import React from 'react';
import './App.css';
import logoiamge from './image/ar-glasses.png'

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={logoiamge} width="30px" height="30px"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-black" aria-current="page" href="#">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Other</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
            
        </>
    )
}

export default Navbar;
