import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import snackOrBoozeData from "./db.json"; // Import the JSON data
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Home() {
  // Get the number of snacks and drinks from the JSON data
  const numSnacks = snackOrBoozeData.snacks.length;
  const numDrinks = snackOrBoozeData.drinks.length;

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p>
            We have {numSnacks} food items (snacks) and {numDrinks} drink
            choices (drinks) available.
          </p>
          <p>
            <Link to="/add-item" className="btn btn-primary">
              Add Item
            </Link>
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
