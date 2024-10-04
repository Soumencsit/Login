import React from 'react'
import './NavBar.css'
import ubuy from '../images/ubuy.jpg'
function NavBar() {

    return (
        <div className="header">
          <div className="logo">
            <img src={ubuy} alt='ubuyindia'/>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search our global search engine for products, deals, and more" />
          </div>
          <div className="navigation">
            <ul>
              <li>All</li>
              {/* Other navigation links */}
            </ul>
          </div>
          <div className="language-and-account">
            <div className="language">
              <img src="usa-flag.png" alt="US Flag" />
              <span>US</span>
            </div>
            <div className="delivery">
              <span>Delivery: India</span>
            </div>
            <div className="language-selector">
              <span>English</span>
              <img src="dropdown-arrow.png" alt="Dropdown Arrow" />
            </div>
            <div className="account">
              <span>Account</span>
              <img src="account-icon.png" alt="Account Icon" />
            </div>
          </div>
        </div>
      );
  
}

export default NavBar

