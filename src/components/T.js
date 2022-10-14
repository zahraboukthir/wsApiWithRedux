
import styled from "styled-components";
import { useState } from 'react';

export default function Recipe() {

  const [activeTab, setActiveTab] = useState("instructions");


  return (
    <DetailWrapper>
      <div>
        <h2>title</h2>
        <img src=""alt="" />
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
            <h3 dangerouslySetInnerHTML={{ __html: "samm" }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: "instructions" }}></h3>
          </div>
        )}
        {/* {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredients) => {
              return <li key={ingredients.id}>{ingredients.original}</li>;
            })}
          </ul>
        )} */}
      </Info>
    </DetailWrapper>
  );
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


