import React from "react";
import './Banner.css'
// import AllBlogs from "./All_Blogs";
import { NavLink } from "react-router-dom";

const Banner = () => {
    return(
        <div className="banner-area">
            <div className="content">
                <h2>Stay curious.</h2>
                <p>Discover stories, thinking, and expertise <br /> from writers on any topic.</p>
                <NavLink to="AllBlogs"><button className="btn">Start reading</button></NavLink>
            </div>
        </div>
    )
}

export default Banner