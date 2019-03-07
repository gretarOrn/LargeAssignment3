import React from 'react';
import { NavLink } from 'react-router-dom';


const NavLinks = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-link"><NavLink to="/bubbles">Products</NavLink></li>
            <li className="nav-item nav-link"><NavLink to="/bundles">Bundles</NavLink></li>
            <li className="nav-item nav-link"><NavLink to="/about">About us</NavLink></li>
            <li className="nav-item nav-link"><a href="#">cart</a></li>
        </ul>
    );
};

export default NavLinks;