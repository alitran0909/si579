import MovieList from '/workspaces/si579/src/Components/MovieList.js'; 
import {movieChoices} from '/workspaces/si579/src/util/MovieSelection.js';
import MovieTitle from '/workspaces/si579/src/Components/MovieTitle.js';
import './App.css';
function App() {
  {/*Hook state of containing the movie information*/}

  return (
    <div className="container-fluid movie-app">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-4">
          {/*showcases the header of various moving images of different films and overarching website name*/}
          <MovieTitle />
        </div>
      </div>
      <div className="row justify-content-center mx-3">
        {/*showcases each specific film with it's information by going through the given movie list created*/}
        <MovieList movies={movieChoices} />
      </div>
    </div>
  );
}

export default App;