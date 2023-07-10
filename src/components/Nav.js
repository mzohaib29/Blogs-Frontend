import React from "react";
import './Nav.css'
import Logo from './medium.png'

const API_1 = "http://127.0.0.1:8000/accounts/login/";

const Nav = () => {
    return(
        <div className="nav">
            <img className="logo" src={Logo} alt="MEDIUM" />
            {/* <p className="logo">Medium</p> */}
            <div className="menu">
                <ul className="menu-list">
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Membership</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href={API_1}>Sign In</a></li>
                    <li><a href="#">Get Started</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Nav