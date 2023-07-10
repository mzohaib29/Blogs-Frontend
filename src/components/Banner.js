import React from "react";
import './Banner.css'

const Banner = () => {
    return(
        <div className="banner-area">
            <div className="content">
                <h2>Stay curious.</h2>
                <p>Discover stories, thinking, and expertise <br /> from writers on any topic.</p>
                <button className="btn"><a href="#">Start reading</a></button>
            </div>
        </div>
    )
}

export default Banner