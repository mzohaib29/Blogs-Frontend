import React from 'react'
import Banner from './Banner';
import PopularBlog from './PopularSection';
import AllBlogs from './All_Blogs';


const Home = () => {
    const data = {
        name: "Home page",
    }
    return (
        <>
        <Banner myData = {data}/>
        <PopularBlog />
        <AllBlogs />
        </>
    );
}

export default Home;