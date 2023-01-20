import React from "react";
import { movies } from "../data";

const allMovies = movies.map((m, index) => {
  return <div key={index}>{m.title},{m.time}</div>
})
const moviesList = movies.map((m, index) => {
  return <li key={index}>{m.genres}</li>
})

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <div>{allMovies}</div>
      <ul>{moviesList}</ul>
    </div>);
}

export default Movies;
