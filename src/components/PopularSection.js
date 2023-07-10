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
        return <div>.......Loading</div>
    }
    
    return (
        <Wrapper>
        <div className="container1">
            <div className="heading">Trending on Medium</div>
                <div className="blogs-trending">
                {
                    blogs?.map((curElement) => {
                        // console.log("Hello", blogs)
                    return <Blog key={curElement.id} {...curElement}/>
                    })
                }
                </div>
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.container1 {
    width: 80%;
    margin: 50px auto;
}
.sc-bdDrbm.fPexyz a {
    text-decoration: none;
    color: black;
}

.heading {
    // background-color: whitesmoke;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 600;
}

.blogs-trending {
    display: flex;
    align-items: center;
    justify-content: center;
}
.blogs-trending .sc-bdDrbm.krfISP {
    width: 33.33333%;
    padding: 20px;
}
`;

export default PopularBlog;