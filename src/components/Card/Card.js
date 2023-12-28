import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Cards = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {props.img && (
          <Card.Img variant="top" src={props.img} style={{ height: "15rem" }} />
        )}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          {props.btnValue && (
            <Button variant="primary" onClick={() => props.btnOnCick()}>
              {props.btnValue}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
