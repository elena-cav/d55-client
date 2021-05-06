import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavBar } from '../styled/styledNavBar';
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
      </nav>
    </StyledNavBar>
  );
}

export default Navbar;
