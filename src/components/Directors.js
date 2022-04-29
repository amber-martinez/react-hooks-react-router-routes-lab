import React from "react";
import { directors } from "../data";

function Directors() {

  const directorList = directors.map(director => (
    <div>
      {director.name}
      <ul>
        {director.movies.map(movie => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors;
