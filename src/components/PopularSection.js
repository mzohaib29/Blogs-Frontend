import React from "react";
import { useBlogContext } from "../context/blogsContext";
// import './PopularSection.css'
// import Stars from "../Images/1.png"
import Blog from "./Blogs";
import { styled } from "styled-components";

const PopularBlog = () => {
    const {isLoading, blogs} = useBlogContext();
    // console.log(useBlogContext())
    // console.log(blogs, isLoading)

    if(isLoading) {
        return <div>.......Trending Section Loading</div>
    }
    
    return (
        <Wrapper>
            <div className="container1">
                <div className="heading">
                    <svg width="35" height="43" viewBox="0 0 28 29" fill="none" class="jh ah"><path fill="#fff" d="M0 .8h28v28H0z"></path><g opacity="0.8" clip-path="url(#trending_svg__clip0)"><path fill="#fff" d="M4 4.8h20v20H4z"></path><circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle><path d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3" stroke="#000" stroke-linecap="round"></path></g><defs><clipPath id="trending_svg__clip0"><path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                    <p className="head">Trending on Medium</p>
                </div>
                <div className="blogs-trending">
                    {
                        blogs.map((curElement, index) => {
                        return (
                            <>
                                <Blog key={curElement.id} count={index} {...curElement}/>
                            </>
                        )})
                    }
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.container1 {
    width: 80%;
    margin: 0px auto;
    padding: 50px;
    border-bottom: 1px solid black;
}
.sc-bdDrbm.fPexyz a {
    text-decoration: none;
    color: black;
}

.heading {
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding-left: 30px;
}
.head {
    margin-left: 15px;    
}

.blogs-trending {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;
    margin-top: 1
    max-height: 300px;
    overflow: hidden;    
    0px;
}
.blogs-trending section {
    width: 29.33333%;
    padding: 20px;
}
.blogs-trending section:nth-child(n+7){
    display: none;
}
`;

export default PopularBlog;