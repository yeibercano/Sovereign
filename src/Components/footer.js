import React, { Component } from 'react'

const Footer = () => {
	const date = new Date().getFullYear();

  return (
    <footer className="footerBackground"> 
      <h3>Sovereign &copy; { date }</h3>
    </footer>
  );
}

export default Footer;