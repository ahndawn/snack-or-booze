import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items }) {
  const { id } = useParams();

  let snack = items.find(snack => snack.id === id);
  
  if (!snack) {
    return (
      <section>
        <h1>Snack Not Found</h1>
        <p>The requested snack could not be found. Please try again.</p>
        <p>
          <Link to="/add-item">Add Snack</Link> |{" "}
          <Link to="/snacks">Return to Snacks Menu</Link>
        </p>
      </section>
    );
  }
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
