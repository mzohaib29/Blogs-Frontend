import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const baseURL = 'http://127.0.0.1:8000'; // Replace this with the base URL of your backend

const Blog = (curElement) => {

    console.log("index hello", curElement)

    const { id, title, date, author_name, author_image, count, trending} = curElement;


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

    if(trending){
        return (
            <Wrapper>
                <NavLink to={`/SingleBlog/${id}`}>
                    <div className='main'>
                        <div className='number'>0{count+1}</div>
                        <div className='card'>
                            <div className='card-inner'>
                                <div className='card-thumnail'>
                                    <img className='card-image' src={imageSrc} alt='hello' />
                                    <h3 className='author-name'>{author_name}</h3>
                                </div>
                                <div className='card-data'>
                                    <h3 className='title'>{title}</h3>
                                    <p className='date'>{formattedDate} . {formattedTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </Wrapper>
        )
    }
    }
const Wrapper = styled.section`
a {
    text-decoration: none;
    color: black;
}
.main {
    display: flex;
}
.number {
    padding: 10px;
    font-size: 34px;
    margin-top: -1.1rem;
    margin-right: 10px;
    text-decoration: none;
    line-height: 38px;
    font-weight: 700;
    color: rgb(207 207 207);
    letter-spacing: -0.014em;
}
.author-name {
    font-size: 15px;
    font-weight: 500;
    margin: auto 0;
    color: rgba(41, 41, 41, 1);
}

.card-thumnail {
    display: flex;
    align-items: center;
}
.card-image {
    width: 25px;
    height: 25px;
    border-radius: 15px;
    margin: 0px 17px 0px 0px;
}
.body {
    text-decoration: none;
    color: black;
    font-size: 25px;
    margin: 0px;
}
.title {
    margin: 10px 0px;
    font-weight: 600;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: rgba(41, 41, 41, 1);
    font-size: 18px;
    letter-spacing: -1px;
}
.date {
    font-size: 13px;
    color: rgba(117, 117, 117, 1);
    line-height: 20px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin: 0;
}
`;

export default Blog;