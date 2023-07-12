import React, { useState } from "react";
import './Nav.css'
import { NavLink } from "react-router-dom";
import Logo from './medium.png'
// import CreateBlog from "./CreateBlog";

// const API_1 = "http://127.0.0.1:8000/accounts/login/";

const Nav = () => {
    const [menuIcon, setMenuIcon] = useState();

    return(
        <div className={menuIcon ? "navber-active" : "navbar"}>
            <div className="logo">
                <NavLink to = "/">
                    <img className="logo" src={Logo} alt="MEDIUM" />
                </NavLink>
            </div>
            <div className="menu">
                <ul className="menu-list">
                    <li>
                        <NavLink to = "/" className = "home-link" onClick={() => setMenuIcon(false)}>
                            Our Story
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/CreateBlog" className = "create-link" onClick={() => setMenuIcon(false)}>
                            Write
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/AllBlogs" className = "allblogs-link" onClick={() => setMenuIcon(false)}>
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/" className = "login" onClick={() => setMenuIcon(false)}>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/" className = "signup" onClick={() => setMenuIcon(false)}>
                            Signup
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav