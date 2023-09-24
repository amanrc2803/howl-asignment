import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        
        <img src={logo} alt="logo"  className='logo navbar-brand'/>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">HOW Digital</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body list">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link listItem" activeClassName="active activeItem" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle listItem" activeClassName="active activeItem" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item listItem" activeClassName="active activeItem" to="/services">Services</NavLink></li>
                  <li><NavLink className="dropdown-item listItem" activeClassName="active activeItem" to="/contact">Contact Us</NavLink></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><NavLink className="dropdown-item listItem" activeClassName="active activeItem" to="/policy">Policy</NavLink></li>
                </ul>
              </li>
            </ul>




            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
