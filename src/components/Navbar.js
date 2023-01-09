import React from 'react';
import {navbar} from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={navbar}>
        <div>Logo</div>
        <ul>
            <li>Home</li>
            <li>Recipes</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar
