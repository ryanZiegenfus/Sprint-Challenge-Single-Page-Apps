import React from "react";
import {Card} from "semantic-ui-react";

export default function CharacterCard({image, name, species, status, location, origin}) {
  return (
    <Card
      image={image}
      header={name}
      meta={`${species}: ${status}`}
      description={<div><p>{`Location: ${location}`}</p> <p>{`Origin: ${origin}`}</p></div>}
      extra="Episodes"
      className="Card"
    />
  )
}
