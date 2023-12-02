import React from "react";
import { NavLink } from 'react-router-dom';
import "../App.css";

const Navbar=()=>{

    return(
        <div>
            <div className="navbar">
            <div className="navbarContainer">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/cart">Cart</NavLink> 
            </div>
            </div>
        </div>
    )
}

export default Navbar;