import React from 'react';
import { NavLink } from 'react-router-dom';


const NavLinks = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-link"><NavLink to="/" className="nav-link"><img src="../../../resources/bubbles.jpg" alt="bubbles"></img></NavLink> </li>
            <li className="nav-item nav-link"><NavLink to="/bubbles">Products</NavLink></li>
            <li className="nav-item nav-link"><NavLink to="/bundles">Bundles</NavLink></li>
            <li className="nav-item nav-link"><NavLink to="/about">About us</NavLink></li>
            <li className="nav-item nav-link"><NavLink to="/cart">Cart</NavLink></li>
        </ul>
    );
};

export default NavLinks;