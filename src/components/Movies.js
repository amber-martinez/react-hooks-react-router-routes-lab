import React from "react";
import { movies } from "../data";

function Movies() {

  const movieGroup = movies.map(movie => (
    <div>
      {movie.title}
      {movie.time}
      {movie.genres.map(genre => (
        <li>{genre}</li>
      ))}
    </div>
  ))

  return (
    <div>
      <h1>Movies Page</h1>
      {movieGroup}
    </div>
  )
}

export default Movies;
