import React from 'react';

const MovieCrew = ({ cast, crew }) => {
  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor, index) => (
          <li key={index}>{actor.name} as {actor.role}</li>
        ))}
      </ul>
      <h2>Crew</h2>
      <ul>
        {crew.map((member, index) => (
          <li key={index}>{member.role}: {member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCrew;