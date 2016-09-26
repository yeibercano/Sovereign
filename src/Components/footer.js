import React, { Component } from 'react'

const Footer = () => {
	const date = new Date().getFullYear();

  return (
    <footer className="footerBackground"> 
      <h3 className='footerText'>Sovereign &copy; { date } &nbsp; | &nbsp;</h3>
      <h3 className='footerText'><a href="https://github.com/yeibercano/Sovereign"> github project</a></h3>
    </footer>
  );
}

export default Footer;