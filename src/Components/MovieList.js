import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID} style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          marginBottom: '20px',
          width: '100%'
        }}>
          <div style={{ flexBasis: '30%', marginRight: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div style={{ flexBasis: '70%' }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<span>▼</span>}
                aria-controls={`panel-${movie.imdbID}-content`}
                id={`panel-${movie.imdbID}-header`}
              >
                <Typography>{movie.Title} Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>Year: {movie.Year}</p>
                  <p>Type: {movie.Type}</p>
                  <p>IMDb ID: {movie.imdbID}</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<span>▼</span>}
                aria-controls={`panel-${movie.imdbID}-content`}
                id={`panel-${movie.imdbID}-header`}
              >
                <Typography>{movie.Title} Creator Biography</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>Year: {movie.Year}</p>
                  <p>Type: {movie.Type}</p>
                  <p>IMDb ID: {movie.imdbID}</p>
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
                  <p>Year: {movie.Year}</p>
                  <p>Type: {movie.Type}</p>
                  <p>IMDb ID: {movie.imdbID}</p>
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
      ))}
    </div>
  );
};

export default MovieList;