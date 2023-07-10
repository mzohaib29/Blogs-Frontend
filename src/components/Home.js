import React from 'react'
import Banner from './Banner';
import PopularBlog from './PopularSection';


const Home = () => {
    const data = {
        name: "Home page",
    }
    return (
        <>
        <Banner myData = {data}/>
        <PopularBlog />
        </>
    );
}

export default Home;