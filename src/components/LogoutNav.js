import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from './medium.png'
import { styled } from 'styled-components';

const LogoutNav = () => {
    const [menuIcon, setMenuIcon] = useState();
    const handleLogout = () => {
            localStorage.removeItem('authTokens');
            window.location.href = '/'; 
    }
    return (
        <Wrapper>
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
                            <NavLink to = "/Logout" className = "signup" onClick={handleLogout}>
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.navber-active, .navbar {
    background-color: rgb(255, 192, 23);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 0.1px solid black;
}
.logo {
    cursor: pointer;
    width: 215px;
    height: 55px;
}
.menu-list {
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu-list li {
    list-style: none;
    padding: 0 20px 0 20px;
    align-items: center;
    font-size: 15px;
    margin-top: 6px;
    cursor: pointer;
}
.menu-list li a {
    color: inherit;
    text-decoration: none;
}
.menu-list li:last-child {
    background-color: black;
    color: white;
    padding: 10px 35px;
    border-radius: 20px;
}
`;

export default LogoutNav