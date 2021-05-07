import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavBar } from '../styled/styledNavBar';
import logo from '../images/d55 teal.png';
function Navbar() {
  return (
    <StyledNavBar>
      <nav className="Nav">
        <Link to="/" className="text nav-link">
          Meter Uploader
        </Link>
        <Link to="/accounts" className="text nav-link">
          Accounts
        </Link>
        <Link to="/readings" className="text nav-link">
          Readings
        </Link>
        <img alt="d55 logo" src={logo}></img>
      </nav>
    </StyledNavBar>
  );
}

export default Navbar;
