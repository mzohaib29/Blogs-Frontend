import React from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import BlogsImages from "./BlogsImages";

const baseURL = 'https://zohaib-app-two-dot-cloud-work-314310.ew.r.appspot.com';

const BlogsList = (curElm) => {
    console.log("index hello", curElm)

    const { id, title, thumb , body, date, author_name, author_image, count} = curElm;

    console.log("index hello 2", count)
    // console.log("Debug Image" ,author_image, curElement)
    const formattedDate = new Date(date).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
    });
    const formattedTime = new Date(date).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
    });
    
    const imageSrc = baseURL + author_image;
    return(
        <Wrapper>
            <NavLink to={`/SingleBlog/${id}`}>
                <div className='main'>
                    <div className='card'>
                        <div className='card-inner'>
                            <div className='thumnail'>
                                <img className='author-image' src={imageSrc} alt='hello' />
                                {/* {console.log(imageSrc)} */}
                                <h3 className='author-name'>{author_name}</h3>
                            </div>
                            <div className='card-data'>
                                <h3 className='title'>{title}</h3>
                                <p className="body">{body}</p>
                                <p className='date'>{formattedDate} . {formattedTime}</p>
                            </div>
                        </div>
                        <div className="Blog-Image">
                            <BlogsImages imgs={[{url: thumb}]} />
                        </div>
                    </div>
                </div>
            </NavLink>
    </Wrapper>
    )
}
const Wrapper = styled.section`
a {
    text-decoration: none;
    color: black;
}
.main {
    display: flex;
}
.thumnail {
    display: flex;
    align-items: center;
}
.author-image {
    width: 25px;
    height: 25px;
    border-radius: 15px;
    margin: 0px 17px 0px 0px;
}
.author-name {
    font-size: 15px;
    font-weight: 500;
    margin: auto 0;
    color: rgba(41, 41, 41, 1);
}
.title {
    margin: 10px 0px;
    font-weight: 600;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: rgba(41, 41, 41, 1);
    font-size: 18px;
    letter-spacing: -1px;
}
.body {
    overflow: hidden;
    display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2; 
    -webkit-box-orient: vertical;
}
.date {
    font-size: 13px;
    color: rgba(117, 117, 117, 1);
    line-height: 20px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin: 0;
}
.card {
    display: flex;
    align-items: center;
    justify-content: center;
}
.card-inner {
    width: 40%;
}
`;
export default BlogsList;