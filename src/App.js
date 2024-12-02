import React, { useState } from 'react';
import MovieList from '/workspaces/si579/src/Components/MovieList.js'; 
import {movieChoices} from '/workspaces/si579/src/util/MovieSelection.js';
import FunFacts from '/workspaces/si579/src/Components/FunFacts.js';
import './App.css';

function App() {
  const [movies, setMovies] = useState(movieChoices)
  return (
    <div className="container-fluid movie-app">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-4">
          <h1>Studio Ghibli Movies</h1>
        </div>
      </div>
      <div className="row justify-content-center mx-3">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;