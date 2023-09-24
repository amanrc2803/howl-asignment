import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import '../Css/FooterStyle.css'


const SocialMediaFooter = () => {

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: ' 0',
  };

  const ulStyle = {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
  };

  const liStyle = {
    margin: '0 10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    //color: '#000', 
  };


const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  maxWidth: '300px', 
  margin: '0 auto', 
  background: '#fff',
  borderRadius: '10px',
  overflow: 'hidden',
};

const inputStyle = {
  flex: '1',
  padding: '8px',
  border: 'none',
  fontSize: '14px', 
};






  return (

    
    <footer className="bg-dark text-white">
     

    <div className="container container-flex">

      <div className="icons insta"  >
        
        <InstagramIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      </div>
      <div>

      <nav style={navStyle}>
        <ul style={ulStyle} className="elementor-nav-menu" data-smartmenus-id="16954827651108677">
          <li style={liStyle}><a href="https://howl.in/work" className="elementor-item" style={linkStyle}>Work</a></li>
          <li style={liStyle}><a href="https://howl.in/about" className="elementor-item" style={linkStyle}>About</a></li>
          <li style={liStyle}><a href="https://howl.in/careers" className="elementor-item" style={linkStyle}>Join The Pack</a></li>
        </ul>
      </nav>

</div>




<div style={containerStyle}>


  <input
    type="email"
    name="form_fields[email]"
    id="form-field-email"
    className="elementor-field elementor-size-sm elementor-field-textual"
    placeholder="Sign up to our newsletter"
    required
    aria-required="true"
    style={inputStyle}
  />
  <ArrowForwardIcon style={{ color: '#333', cursor: 'pointer', fontSize: '24px' }} /></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;




<div>
<p>All rights reserved Designed, developed &amp; powered by HOWL Digital Agency.</p> </div>
    </div>
          </footer>
  );
};

export default SocialMediaFooter;
