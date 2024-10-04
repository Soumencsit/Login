import React from 'react';
import './Achivement.css';
import qr from '../images/Untitled 1.png'
import d2c from '../images/d2c.png'
function Header() {
  return (
    <header>
      <div className="logo">
        <img src={d2c} alt="d2clogo"/>
      </div>
      <div className="statistics">
        <ul>
          <li>Delivering in 10000+ Cities</li>
          <li>Presence in 6 Continents</li>
          <li>300 Million Products</li>
          <li>10 Million Happy Customers & Counting</li>
          <li>Ubuy Wins Best Cross Border Brand Award in 2023</li>
        </ul>
      </div>
      <div className="app-download">
        <img src={qr} alt="QR Code" />
        <a href="google-play-link">GET IT ON</a>
        <a href="app-store-link">Download on the</a>
      </div>
    </header>
  );
}

export default Header;
