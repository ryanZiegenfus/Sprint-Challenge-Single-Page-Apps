import React from "react";
import {Card} from "semantic-ui-react";

export default function EpisodeCard({episode, name, air_date}) {
  return (
    <Card
      header={name}
      description={`${episode}: ${air_date}`}
    />
  )
}