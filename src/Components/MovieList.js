import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { generateApiUrl } from '/workspaces/si579/src/Components/FetchApi.js';
import Reviews from '/workspaces/si579/src/Components/Reviews.js';
import PosterToggle from '/workspaces/si579/src/Components/PosterToggle.js'
import FunFacts from '/workspaces/si579/src/Components/FunFacts.js'

/**
 * MovieList component that displays a list of movies with their details.
 * @param {Object} props - The component props.
 * @param {Array} props.movies - An array of movie objects to display.
 * @returns {JSX.Element} The rendered MovieList component.
 */
const MovieList = ({ movies }) => {
  // Hook state in order to update movie data information
  const [movieData, setMovieData] = useState({});

  // Fetches the API
  useEffect(() => {
    /**
     * Fetches movie data for each movie in the list.
     * @async
     */
    const fetchMovieData = async () => {
      // Storing the fetch data for each movie
      const newMovieData = {};
      // Iterates through the given movies list imported from util to fetch the data
      for (const movie of movies) {
        try {
          const url = generateApiUrl(movie.Title);
          console.log(url);
          const response = await fetch(url);
          const data = await response.json();
          // Stores the movie data utilizing the imdbID as a unique key
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
        // Safety check to ensure that the movie being fetched is valid and has the data
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
            {/* Styling of information display for each film */}
          <div style={{ flexBasis: '30%', marginRight: '20px' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>{movie.Title}</h2>
              {/* Utilizes PosterToggle component to allow user to switch movie posters */}
              <PosterToggle 
                apiPoster={apiData.Poster}
                staticPoster={movie.Poster}
            />
          </div>
      
          {/* Displays general film information from the fetched data source */}
          <div style={{ flexBasis: '70%', marginTop: '10px' }}>
            <div className="metadata">
              <h2>Film Information</h2>
              <p><strong>Release Year:</strong> {apiData.Year}</p>
              <p><strong>Director:</strong> {apiData.Director}</p>
              <p><strong>Actors:</strong> {apiData.Actors}</p>
          </div>

          {/* Utilizes Reviews component to allow user to toggle between various film review ratings */}
          <Reviews movieTitle={movie.Title} />
          
          {/* Utilizes MUI kit for the Accordion component to display different information relating to the film */}
          <Accordion>
            <AccordionSummary
              expandIcon={<span>▼</span>}
              aria-controls={`panel-${movie.imdbID}-content`}
              id={`panel-${movie.imdbID}-header`}
            >
              {/* Accordion snippet Title */}
              <Typography>{movie.Title} Plot</Typography>
            </AccordionSummary>
            {/* Actual information being stored in the Accordion Tab */}
            <AccordionDetails>
              <Typography>
                  <p>{apiData.Plot}</p>
                </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Information sourced for film inspiration is documented within the final project deliverable */}
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

          {/* Utilizes FunFacts component to allow user to click the button various amounts of time to switch between facts */}
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
              <FunFacts url={generateApiUrl(movie.Title)} />
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