import React, { useState } from "react";
import './Nav.css'
import { NavLink } from "react-router-dom";
import Logo from './medium.png'
// import CreateBlog from "./CreateBlog";

// const API_1 = "http://127.0.0.1:8000/accounts/login/";

const Nav = () => {
    const [menuIcon, setMenuIcon] = useState();
    const handleLogout = () => {
        localStorage.removeItem('authTokens');
        window.location.href = '/login'; 
    }

    const isLoggedIn = !!localStorage.getItem('authTokens');

    const showBlogs = () => {
        if(!isLoggedIn){
            alert("Login first to see Blogs page")
        }
        else {
            window.location.href = '/AllBlogs';
        }
    }
    const showCreateBlog = () => {
        if(!isLoggedIn){
            alert("Login first to see the Write page")
        }
        else {
            window.location.href = '/CreateBlog';
        }
    }
    const showOurStory = () => {
        if(!isLoggedIn){
            alert("Login first to see Our Story page")
        }
        else {
            window.location.href = '/OurStory';
        }
    }
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
                        <NavLink to = "/OurStory" className = "home-link" onClick={showOurStory}>
                            Our Story
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/CreateBlog" className = "create-link" onClick={showCreateBlog}>
                            Write
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/AllBlogs" className = "allblogs-link" onClick={showBlogs}>
                            Blogs
                        </NavLink>
                    </li>
                    {!isLoggedIn && (
                        <>
                            <li>
                                <NavLink to = "/Login" className = "login" onClick={() => setMenuIcon(false)}>
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to = "/Signup" className = "signup" onClick={() => setMenuIcon(false)}>
                                    Signup
                                </NavLink>
                            </li>
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            <li>
                                <NavLink to = "/Logout" className = "signup" onClick={handleLogout}>
                                    Logout
                                </NavLink>
                            </li>
                        
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Nav