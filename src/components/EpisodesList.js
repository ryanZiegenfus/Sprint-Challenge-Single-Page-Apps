import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [epState, setEpState] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        setEpState(response.data.results);
        console.log(response.data.results);
      });
  }, []);

 if (!epState){
   return <h1>Loading...</h1>
 } 

  return (
    <section className="episode-list grid-view">
      {epState.map(element => {
          return <EpisodeCard episode={element.episode} name={element.name} air_date={element.air_date}/>
        })
      }
    </section>
  );
}