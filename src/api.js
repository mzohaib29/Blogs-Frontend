import React, { useState, useEffect } from 'react';
// import Stars from "./Images/1.png"
import './api.css'


function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://127.0.0.1:8000/articles/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    console.log("debug data in useEffect", data, typeof data)
  }, [data]);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className='popular-section'>
      <h1>Data fetched from API:</h1>
      <div className='popular-blogs'>
        {data.map((content) => {
          return(
            <ul className='blogs-list' key={content.id}>
              <li className='title'>
                {content.title}
              </li> 
              <li className='body'>
                {content.body}
              </li>
              <li className='thumb'>
                {content.thumb}
              </li>
              <li className='date'>
                {content.date}
              </li>
            </ul>
          )
        })}
      </div>
      {/* <img src={Stars} alt="Stars" /> */}
    </div>
  );
}



export default DataFetcher;