import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://127.0.0.1:8000/articles/4/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Data fetched from the backend:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetcher;
