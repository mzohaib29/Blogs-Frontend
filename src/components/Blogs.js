import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const baseURL = 'http://127.0.0.1:8000'; // Replace this with the base URL of your backend

const Blog = (curElement) => {

    const { id, title, date, author_name, author_image} = curElement;
    console.log("Debug Image" ,author_image, curElement)
    const formattedDate = new Date(date).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
    });
    const formattedTime = new Date(date).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
    });
    
    const imageSrc = baseURL + author_image;

return (
    <Wrapper>
    <NavLink to={`/SingleBlog/${id}`}>
                <div className='main'>
                    <div className='number'>0{id}</div>
                    <div className='card'>
                        <div className='card-inner'>
                            <div className='card-thumnail'>
                                <img className='card-image' src={imageSrc} alt='hello' />
                                {console.log(imageSrc)}
                                <h3 className='title'>{author_name}</h3>
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
const Wrapper = styled.section`
.main {
    display: flex;
}
.number {
    padding: 10px;
    font-size: 32px;
    margin-right: 10px;
    text-decoration: none;
    line-height: 38px;
    font-weight: 600;
    color: rgba(230, 230, 230, 1);
    letter-spacing: -0.014em;
}
// .title {
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     max-width: 100%; /* Optional, adjust as needed */
// }

.card-thumnail {
    display: flex;
    align-items: center;
}
.card-image {
  width: 25px;
  height: 25px;
  border-radius: 10px;
  margin: 0px 17px 0px 0px;
}
.body {
    text-decoration: none;
    color: black;
    font-size: 25px;
    margin: 0px;
}
`;

export default Blog;