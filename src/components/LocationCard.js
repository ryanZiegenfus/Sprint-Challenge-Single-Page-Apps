import React from "react";
import {Card} from "semantic-ui-react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card
      header={`${type}: ${name}`}
      description={`Dimension: ${dimension}`}
      extra={`${residents.length} residents`}
    />
  );
}
