import React from 'react';
import { Link, useLocation } from "react-router-dom";
import myLogo from './assets/myLogoName.png';

function NavBar( props ) {
    const location = useLocation();

    return(
        <div className="container-fluid navParent ">
        <nav className="navBar">
            <ul class="d-flex justify-content-around">
                <li className="">
                    <Link to="/" className="navbar-brand"><img src={myLogo} style={{width: "50px", height: '50px'}}alt="my Logo"/> </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    About </Link>
                </li>
                <li className="nav-item">
                    <Link to="/ProjectPage" className={location.pathname === "/ProjectPage" ? "nav-link active" : "nav-link"}>
                    Projects </Link>
                </li>
                <li className="nav-item">
                    <Link to="/ContactPage" className={location.pathname === "/ContactPage" ? "nav-link active" : "nav-link"}>
                    Contact </Link>
                </li>
            </ul>
        </nav>
    </div>

    )
}

export default NavBar