import React from 'react';
import {Link} from 'gatsby';
import {navbar, navliactive} from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={navbar}>
        <div>Logo</div>
        <ul>
            <li>
              <Link to="/" activeClassName={navliactive}>Home</Link>
            </li>
            <li>
              <Link to="/recipe" activeClassName={navliactive}>Recipes</Link>
            </li>
            <li>
              <Link to="/about" activeClassName={navliactive}>About</Link>
            </li>
            <li>
              <Link to="/contact" activeClassName={navliactive}>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
