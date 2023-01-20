import React from "react";
import { directors } from "../data";


const allDirs = directors.map((m,index) => {
  return <div key={index}>{m.name}</div>
})
const dirsList = directors.map((m,index )=> {
  return <li key={index}>{m.movies}</li>
})




function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <div>{allDirs}</div>
      <ul>{dirsList}</ul>
    </div>);
}

export default Directors;
