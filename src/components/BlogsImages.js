import React, { useState } from 'react'
import Styled from 'styled-components';

const BlogsImages = ({ imgs = [{ url: " " }] }) => {

    const [blogImage, setBlogImage] = useState(imgs[0]);
    console.log("Hello main",blogImage)

    const origin = "http://127.0.0.1:8000"
    return (
        <Wrapper>
            <div className='grid'>
                {
                imgs.map((curElm, index) => {
                    return (
                        <figure>
                            <img
                            className='box-image--style'
                            key={index}
                            src={origin + curElm.url}
                            alt={curElm.filename} 
                            onClick = {() => setBlogImage(curElm)}
                            />
                            {/* {console.log("Images", ))} */}
                        </figure>
                    );
                })
                }
            </div>
        </Wrapper>
    )
}
const Wrapper = Styled.section`
.grid img {
    width: 200px;
}

`;
export default BlogsImages;