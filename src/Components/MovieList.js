import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { generateApiUrl } from '/workspaces/si579/src/Components/FetchApi.js';
import Reviews from '/workspaces/si579/src/Components/Reviews.js';
import PosterToggle from '/workspaces/si579/src/Components/PosterToggle.js'

const MovieList = ({ movies }) => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const fetchMovieData = async () => {
      const newMovieData = {};
      for (const movie of movies) {
        try {
          const url = generateApiUrl(movie.Title);
          console.log(url);
          const response = await fetch(url);
          const data = await response.json();
          newMovieData[movie.imdbID] = data;
        } catch (error) {
          console.error("Error fetching movie data:", error);
        }
      }
      setMovieData(newMovieData);
    };

    fetchMovieData();
  }, [movies]);

  return (
    <div>
      {movies.map((movie) => {
        const apiData = movieData[movie.imdbID] || {};
        return (
          <div key={movie.imdbID} style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginBottom: '20px',
            marginLeft: '20px',
            width: '70%'
          }}>
          <div style={{ flexBasis: '30%', marginRight: '20px' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>{movie.Title}</h2>
              <PosterToggle 
                apiPoster={apiData.Poster} // Assuming this is fetched from the API
                staticPoster={movie.Poster} // Static poster link from your movie object
            />
          </div>
        
          <div style={{ flexBasis: '70%', marginTop: '10px' }}>
            <div className="metadata">
              <h2>Film Information</h2>
              <p><strong>Release Year:</strong> {apiData.Year}</p>
              <p><strong>Director:</strong> {apiData.Director}</p>
              <p><strong>Actors:</strong> {apiData.Actors}</p>
          </div>

          <Reviews movieTitle={movie.Title} />

          <Accordion>
            <AccordionSummary
              expandIcon={<span>▼</span>}
              aria-controls={`panel-${movie.imdbID}-content`}
              id={`panel-${movie.imdbID}-header`}
            >
              <Typography>{movie.Title} Plot</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                  <p>{apiData.Plot}</p>
                </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<span>▼</span>}
              aria-controls={`panel-${movie.imdbID}-content`}
              id={`panel-${movie.imdbID}-header`}
            >
              <Typography>{movie.Title} Film Inspiration</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>{movie.Inspiration}</p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<span>▼</span>}
              aria-controls={`panel-${movie.imdbID}-content`}
              id={`panel-${movie.imdbID}-header`}
            >
              <Typography>{movie.Title} Fun Facts</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>{movie.location}</p>
              </Typography>
            </AccordionDetails>
          </Accordion>

            </div>
      </div>
        );
      })}
    </div>
  );
};

export default MovieList;