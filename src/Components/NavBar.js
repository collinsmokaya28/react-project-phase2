import React from "react";
import { Link } from "react-router-dom";

const NavBar= () => {
    return (
        <nav className="hero">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/tourlist">TourList</Link>
        </nav>
    )
}

export default NavBar;
