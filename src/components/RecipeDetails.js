import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getonereciep } from "../js/actions/recipeActions";
import styled from "styled-components";

const RecipeDetails = () => {
  const [activeTab, setActiveTab] = useState("instructions");
  const { id } = useParams();
  const dispatch=useDispatch()
  const {oneRescip,loading}=useSelector(state=>state.receipReducer)
// console.log(onerescip)
  // const [oneRescip, setOneRescip] = useState({});
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    // const getoneRecipe = async () => {
    //   try {
    //     const { data } =
    //       await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=01903511&app_key=586dab1ccb1f25cc9e26ddc82ac993d5%09
    //         `);
    //     setOneRescip(data.recipe);
    //     setLoading(false);
    //   } catch (error) {}
    // };
    // getoneRecipe();
    dispatch(getonereciep(id))
  }, [id]);

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
    //     <div>
    //       {" "}
    //       <Card style={{ width: "18rem" }}>
    //         <Card.Img variant="top" src={oneRescip.image} />
    //         <Card.Body>
    //           <Card.Title>{oneRescip.label}</Card.Title>
    //           {oneRescip.mealType.map((el, i) => (
    //             <li>{el}</li>
    //           ))}

    //           <Link to={`/`}>
    //             {" "}
    //             <Button variant="primary">list</Button>
    //           </Link>
    //         </Card.Body>
    //       </Card>
    //       {oneRescip.ingredients.map((el) => (
    //         <ul
    //           style={{
    //             listStyle: "none",
    //             display: "flex",
    //             justifyContent: "space-around",
    //             flexWrap: "wrap",
    //           }}
    //         >
    //           <li>{el.food}</li>
    //           foodCategory: <li>{el.foodCategory}</li>
    //           <li>measure: {el.measure}</li>
    //           quantity: <li>{el.quantity}</li>
    //           <li>{el.text} </li>
    //           weight: <li>{el.weight} </li>
    //           <img src={el.image} alt="" />
    //         </ul>
    //       ))}
    //     </div>
    //   )}
    // </div>
    <DetailWrapper>
    <div>
      <h2>{oneRescip.label}</h2>
      <img src={oneRescip.image} alt="" />
    </div>
    <Info>
      <Button
        className={activeTab === "instructions" ? "active" : ""}
        onClick={() => {
          setActiveTab("instructions");
        }}
      >
        Instructions
      </Button>
      <Button
        className={activeTab === "ingredients" ? "active" : ""}
        onClick={() => {
          setActiveTab("ingredients");
        }}
      >
        Ingredients
      </Button>
      {activeTab === "instructions" && (
        <div>
          {oneRescip.ingredientLines.map((el,i) => <ul>
                   {el}
                   
                      </ul>
                      )}
        </div>
      )}
      {activeTab === "ingredients" && 
         
            oneRescip.ingredients.map((el,i) => <ul>
                   <li>{el.food}</li>
                   foodCategory: <li>{el.foodCategory}</li>
                      <li>measure: {el.measure}</li>
                      quantity: <li>{el.quantity}</li>
                      <li>{el.text} </li>
                      weight: <li>{el.weight} </li>
                      <img src={el.image} alt="" />
                      </ul>
                      )
        
      }
      {activeTab === "ingredients" && 
         
            oneRescip.ingredients.map((el,i) => <ul>
                   <li>{el.food}</li>
                   foodCategory: <li>{el.foodCategory}</li>
                      <li>measure: {el.measure}</li>
                      quantity: <li>{el.quantity}</li>
                      <li>{el.text} </li>
                      weight: <li>{el.weight} </li>
                      <img src={el.image} alt="" />
                      </ul>
                      )
        
      }
                   
    </Info>
  </DetailWrapper>
  )
}</div>)
}
const DetailWrapper = styled.div`
  marin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  backrground: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;
export default RecipeDetails;
