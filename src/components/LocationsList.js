import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [locationState, setLocationState] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        setLocationState(response.data.results);
        console.log(response.data.results);
      });
  }, []);

 if (!locationState){
   return <h1>Loading...</h1>
 } 

  return (
    <section className="location-list grid-view">
      {locationState.map(element => {
          return <LocationCard name={element.name} type={element.type} dimension={element.dimension} residents={element.residents}/>
        })
      }
    </section>
  );
}