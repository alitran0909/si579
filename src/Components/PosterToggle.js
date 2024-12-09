// PosterToggle.js
import React, { useState } from 'react';
import { Button } from '@mui/material';

/**
 * PosterToggle component for switching between API and static movie posters.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.apiPoster - URL of the poster fetched from the API.
 * @param {string} props.staticPoster - URL of the static poster from the movies list.
 * @returns {JSX.Element} The rendered PosterToggle component.
 */
const PosterToggle = ({ apiPoster, staticPoster }) => {
  const [showApiPoster, setShowApiPoster] = useState(false);

  return (
    <div style={{ marginTop: '20px' }}>
      {/* Displays either the API poster or the static poster based on the toggle state. Static poster is from the 
      written movies list, while API is fetched. */}
      <img 
        src={showApiPoster ? apiPoster : staticPoster} 
        alt={showApiPoster ? "API Poster" : "Static Poster"} 
        style={{ width: '100%', height: 'auto', marginTop: '10px' }} 
      />
      {/* Button to toggle between the two poster types */}
      <Button 
        variant="outlined" 
        color="secondary" 
        onClick={() => setShowApiPoster(!showApiPoster)}
      >
        Change Poster
      </Button>
    </div>
  );
};

export default PosterToggle;