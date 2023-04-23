import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function DrinkItem({ items }) {
    const { id } = useParams();
  
    let drink = items.find(drink => drink.id === id);
  
  if (!drink) {
    return (
      <section>
        <h1>Drink Not Found</h1>
        <p>The requested drink could not be found. Please try again.</p>
        <p>
          <Link to="/add-item">Add Drink</Link> |{" "}
          <Link to="/drinks">Return to Drinks Menu</Link>
        </p>
      </section>
    );
  }

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {drink.name}
          </CardTitle>
          <CardText className="font-italic">{drink.description}</CardText>
          <p>
            <b>Recipe:</b> {drink.recipe}
          </p>
          <p>
            <b>Serve:</b> {drink.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default DrinkItem;