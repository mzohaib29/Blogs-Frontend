import React from 'react'
import { styled } from 'styled-components'
import logo from './components/medium.png'

const OurStory = () => {
    return (
        <Wrapper>
            <div className='main'>
                <div className='header'>
                    <h1>Every idea needs a</h1>
                    <img src={logo} alt="Medium logo" />
                    <h2>.</h2>
                </div>
                <div className='sub-section'>
                    <div className='sub-section-body'>
                        <h1>Create the space for your thinking to take off.</h1>
                        <p>A blank page is also a door. At Medium you can walk through it. It's easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for your work.</p>
                        <button><a href="/CreateBlog">Write on Medium</a></button>
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}
const Wrapper = styled.section`
.main {
    width: 100%;
}
.header {
    width: 90%;
    display: flex;
    margin: 73px auto;

}
.header img {
    width: 26vw;
}
.header h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-right: 0px;
    padding-left: 0px;
    font-family: 'Gt super text book', Georgia, sans-serif;
    color: #000;
    font-size: 7.3vw;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: -0.35vw;
}
.sub-section {
    // width: 20ch;
    text-align: center;
    background-color: black;
    color: white;
    width: 100%;
}
.sub-section-body {
    padding: 100px 0px;
}
.sub-section-body h1{
    margin: 0px auto;
    width: 80%;
    padding-right: 0px;
    padding-left: 0px;
    font-family: 'Gt super text book', Georgia, sans-serif;
    font-size: 7.3vw;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: -0.35vw;
    box-sizing: border-box;
}
// .sub-section-body p {

// }


`;

export default OurStory