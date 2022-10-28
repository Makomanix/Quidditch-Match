import React from "react";
import { Card } from "react-bootstrap";

function Character({ id, character, onCharClick }) {
  const { name, house, ancestry, image } = character;

  const handleClick = () => {
    onCharClick(character);
  };

  return (
    <Card onClick={handleClick} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{name}</Card.Title>
        <Card.Title>{house}</Card.Title>
        <Card.Text>{ancestry}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Character;