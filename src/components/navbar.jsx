import React from 'react';
import {Route,Routes} from "react-router-dom"
import './NavBar.css';

const NavBar =() =>{

  return (
           
    <nav className="nav-bar w-full">
      <ul className='py-2 text-center'>
        <li><a href="/"> Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      
      </ul>
    </nav>
  );
}

export default NavBar;