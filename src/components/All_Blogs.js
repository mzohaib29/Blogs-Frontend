import React from "react";
import { styled } from "styled-components";
import { useBlogContext } from "../context/blogsContext";
import BlogsList from "./BlogsList";


const AllBlogs = (curElm) => {

    const {isLoading, blogs} = useBlogContext();

    if(isLoading) {
        return <div>.......All blogs Loading</div>
    }
    
    return (
        <Wrapper>
        <div className="container1">
            <div className="heading">
                <svg width="35" height="43" viewBox="0 0 28 29" fill="none" class="jh ah"><path fill="#fff" d="M0 .8h28v28H0z"></path><g opacity="0.8" clip-path="url(#trending_svg__clip0)"><path fill="#fff" d="M4 4.8h20v20H4z"></path><circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle><path d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3" stroke="#000" stroke-linecap="round"></path></g><defs><clipPath id="trending_svg__clip0"><path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                <p className="head">All Blogs</p>
            </div>
                <div className="blogs-trending">
                {
                    blogs.map((curElm, index) => {
                    return (
                        <>
                            <BlogsList key={curElm.id} {...curElm}/>
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
    width: 100%;
    margin: 0px auto;
    padding: 50px;
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
    width: 50%;
    justify-content: center;
    // padding-left: 30px;
}
.head {
    margin-left: 15px;    
}

.blogs-trending {
    margin-top: 1
    0px;
}
.blogs-trending section {
    padding: 20px;
}
`;

export default AllBlogs;