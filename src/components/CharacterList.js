import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charState, setCharState] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharState(response.data.results);
        console.log(response.data.results);
      });
  }, []);

 if (!charState){
   return <h1>Loading...</h1>
 } 

  return (
    <section className="character-list grid-view">
      {charState.map(element => {
          return <h2><CharacterCard image={element.image} name={element.name} species={element.species} status={element.status} location={element.location.name} origin={element.origin.name}/></h2>
        })
      }
    </section>
  );
}
