import React from 'react';
import { NavLink } from 'react-router-dom';


const NavLinks = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item"><NavLink to="/bubbles" className="nav-link">Products</NavLink></li>
            <li><a href="#">Bundles</a></li>
            <li className="nav-item"><NavLink to="/about" className="nav-link">About us</NavLink></li>
            <li className="nav-item"><NavLink to="/cart" className="nav-link">Cart</NavLink></li>
            <li className="nav-item"><NavLink to="/bubbles" className="nav-link"><img src="../../../resources/bubbles.jpg" alt="bubbles"></img></NavLink> </li>
        </ul>
    );
};

export default NavLinks;