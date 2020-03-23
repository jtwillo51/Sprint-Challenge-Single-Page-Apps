import React from "react";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";

export default function CharacterCard({ name, status, species, image}) {
  
  
  return (
    <div >
      <Card >
        <CardImg src={image} alt={name} />
        <CardTitle>Name: {name}</CardTitle>
        <CardSubtitle>Species: {species}</CardSubtitle>
        <CardSubtitle>Status: {status}</CardSubtitle>
      </Card>
    </div>
  );
}
