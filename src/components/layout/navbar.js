import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <div className="nav-wrapper blue-grey z-depth-0">
          <div className="container">
          <Link to="/" className="brand-logo hide-on-med-and-down"> <i className="material-icons home-icon">home</i> </Link>
          <ul id="nav" className="right">
            <li><Link to='/'>My listings</Link></li>
            <li><Link to='/create'>Create listing</Link></li>
            <li><Link to='/manage'>Manage</Link></li>
          </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar;
