import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { generateApiUrl } from '/workspaces/si579/src/Components/FetchApi.js';

{/*Utilizes styling of toggle bar from MUI kit*/}
function CustomTabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Reviews({ movieTitle }) {
  const [value, setValue] = useState(0);
  const [movieData, setMovieData] = useState(null);

  {/*Fetches API information for reviews*/}
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const url = generateApiUrl(movieTitle);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [movieTitle]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  {/*Handles the specific Rotten Tomatoes review fetch as it is nested*/}
  const getRatingValue = (source) => {
    return movieData?.Ratings.find(rating => rating.Source === source)?.Value || "N/A";
  };


  {/*Creates toggle bar utilizing the movie review information that was fetched*/}
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="movie ratings">
          <Tab label="IMDb" />
          <Tab label="Rotten Tomatoes" />
          <Tab label="Metacritic" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {movieData ? (
          <div>
            <h3>IMDb Rating</h3>
            <p>Rating: {movieData.imdbRating}/10</p>
            <p>Votes: {movieData.imdbVotes}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {movieData ? (
          <div>
            <h3>Rotten Tomatoes</h3>
            <p>Rating: {getRatingValue("Rotten Tomatoes")}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {movieData ? (
          <div>
            <h3>Metacritic</h3>
            <p>Score: {movieData.Metascore}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </CustomTabPanel>
    </Box>
  );
}