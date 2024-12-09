// PosterToggle.js
import React, { useState } from 'react';
import { Button } from '@mui/material';

const PosterToggle = ({ apiPoster, staticPoster }) => {
  const [showApiPoster, setShowApiPoster] = useState(false);

  return (
    <div style={{ marginTop: '20px' }}>
      {/*Toggles between the APIposter that was fetched or the staticPoster that was given from the movies list*/}
      <img 
        src={showApiPoster ? apiPoster : staticPoster} 
        alt={showApiPoster ? "API Poster" : "Static Poster"} 
        style={{ width: '100%', height: 'auto', marginTop: '10px' }} 
      />
      {/*Allows for toggling between the two differenet poster types*/}
       <Button 
        variant="outlined" 
        color="secondary" 
        onClick={() => setShowApiPoster(!showApiPoster)}
      >
        {showApiPoster ? "Change Poster" : "Change Poster"}
      </Button>
    </div>
  );
};

export default PosterToggle;