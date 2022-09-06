import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [oneRescip, setOneRescip] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getoneRecipe = async () => {
      try {
        const { data } =
          await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=01903511&app_key=586dab1ccb1f25cc9e26ddc82ac993d5%09
            `);
        setOneRescip(data.recipe);
        setLoading(false);
      } catch (error) {}
    };
    getoneRecipe();
  }, [id]);

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <div>
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={oneRescip.image} />
            <Card.Body>
              <Card.Title>{oneRescip.label}</Card.Title>
              {oneRescip.mealType.map((el, i) => (
                <li>{el}</li>
              ))}

              <Link to={`/`}>
                {" "}
                <Button variant="primary">list</Button>
              </Link>
            </Card.Body>
          </Card>
          {oneRescip.ingredients.map((el) => (
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <li>{el.food}</li>
              foodCategory: <li>{el.foodCategory}</li>
              <li>measure: {el.measure}</li>
              quantity: <li>{el.quantity}</li>
              <li>{el.text} </li>
              weight: <li>{el.weight} </li>
              <img src={el.image} alt="" />
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
