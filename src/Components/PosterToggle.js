// PosterToggle.js
import React, { useState } from 'react';
import { Button } from '@mui/material';

const PosterToggle = ({ apiPoster, staticPoster }) => {
  const [showApiPoster, setShowApiPoster] = useState(false);

  return (
    <div style={{ marginTop: '20px' }}>
      <img 
        src={showApiPoster ? apiPoster : staticPoster} 
        alt={showApiPoster ? "API Poster" : "Static Poster"} 
        style={{ width: '100%', height: 'auto', marginTop: '10px' }} 
      />
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