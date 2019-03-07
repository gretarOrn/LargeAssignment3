import React from 'react';
import { NavLink } from 'react-router-dom';


const NavLinks = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item"><NavLink to="/bubbles">Products</NavLink></li>
            <li><a href="#">Bundles</a></li>
            <li className="nav-item"><NavLink to="/about" className="nav-link">About us</NavLink></li>
            <li><a href="#">cart</a></li>
        </ul>
    );
};

export default NavLinks;