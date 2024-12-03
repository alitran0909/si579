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
          marginLeft: '20px',
          width: '70%'
        }}>
          <div style={{ flexBasis: '30%', marginRight: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', height: 'auto' }} />
          </div>
      
          <div style={{ flexBasis: '70%', marginTop: '90px' }}>
          <div className="totoro-metadata">
            <h2>Film Information</h2>
            <p><strong>Release Year:</strong> {movie.Year}</p>
            <p><strong>Creator:</strong> {movie.Creator}</p>
             </div>
            <Accordion>
              <AccordionSummary
                expandIcon={<span>▼</span>}
                aria-controls={`panel-${movie.imdbID}-content`}
                id={`panel-${movie.imdbID}-header`}
              >
                <Typography>{movie.Title} Description</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>{movie.Description}</p>
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
                  <p>{movie.Biography}</p>
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
      ))}
    </div>
  );
};

export default MovieList;