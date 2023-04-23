import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function AddItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState("");
  const [serve, setServe] = useState("");
  const [type, setType] = useState("snack"); // Default type is snack
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to add item based on selected type (snack or drink)
    if (type === "snack") {
      // Add snack using the provided data (name, description, recipe, serve)
      // You can customize this logic to add the snack to your specific data structure or API
      // Example: addSnack(name, description, recipe, serve);
      console.log("Adding snack:", name, description, recipe, serve);
    } else if (type === "drink") {
      // Add drink using the provided data (name, description, recipe, serve)
      // You can customize this logic to add the drink to your specific data structure or API
      // Example: addDrink(name, description, recipe, serve);
      console.log("Adding drink:", name, description, recipe, serve);
    }
    // Redirect to home page after adding the item
    history.push("/");
  };

  return (
    <section>
      <h2 className="text-center">Add Item</h2>
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label for="type">Type</Label>
          <Input
            type="select"
            name="type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="snack">Snack</option>
            <option value="drink">Drink</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="recipe">Recipe</Label>
          <Input
            type="textarea"
            name="recipe"
            id="recipe"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="serve">Serve</Label>
          <Input
            type="text"
            name="serve"
            id="serve"
            value={serve}
            onChange={(e) => setServe(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Add Item
        </Button>
      </Form>
    </section>
  );
}

export default AddItem;
