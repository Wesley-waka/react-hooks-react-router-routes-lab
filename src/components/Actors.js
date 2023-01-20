import React from "react";
import { actors } from "../data";


const allActors = actors.map((m, index) => {
  return <div key={index}>{m.name}</div>
})
const actorsList = actors.map((m, index) => {
  return <li key={index}>{m.movies}</li>
})




function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <div>{allActors}</div>
      <ul>{actorsList}</ul>
    </div>)
}

export default Actors;
