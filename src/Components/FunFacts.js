import React, { useState, useEffect } from 'react';

const FunFacts = ({ url }) => {
    const [factList, setFactList] = useState([]);
    const [error, setError] = useState(null);

    const getList = () => {
        console.log("Fetching URL:", url);
        setError(null);
        fetch(url)
          .then((res) => res.json())
          .then((list) => {
            setFactList(list.data);
          })
          .catch((err) => {
            console.log("List ERROR ", err);
            setError("Failed to fetch fun facts. Please try again.");
          });
    };

    useEffect(() => {
        getList();
    }, [url]);

    return (
        <div className='App'>
            <h1>FUN FACTS</h1>
            {error && <p className="error">{error}</p>}
            <button onClick={getList}>Refresh Facts
            </button>
            <ul>
                {factList.map((item, index) => (
                    <li key={index}>{item.fact}</li>
                ))}
            </ul>
        </div>
    );    
}

export default FunFacts;