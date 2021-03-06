import React from 'react';
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return(
        <div className="nav__links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
};

export default Navigation;