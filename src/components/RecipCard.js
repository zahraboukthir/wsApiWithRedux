import "./t.css";
import { Link } from "react-router-dom";

function RecipCard({ el }) {

  return (

    <div
      id="card-wrapper"
      style={{ backgroundImage: `url(${el.recipe.image})` }}
    >
      <div className="inner-card">
        {/*top right btn*/}
        <div className="more-info-btn">
          <div className="btn-background">
            <i className="fas fa-ellipsis-h" />
          </div>
        </div>
        {/*title*/}
        <div id="title">
          <header>
            {el.recipe.label}
            <br />
          </header>
        </div>
        {/*details*/}
        <div id="details">
          {/* <div className="Details">
              <h3>Level</h3>
              <p>Beginner</p>
            </div> */}
          <div className="Details">
            <div className="Details">
              <h3>Cuisine Type</h3>
              {el.recipe.cuisineType.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </div>
            <h3>Time</h3>
            <p>{el.recipe.totalTime} </p>
          </div>

          <div className="Details">
            <h3>Meal Type</h3>
            {el.recipe.mealType.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </div>
        </div>
      </div>
      {/*start btn*/}
      <div className="start-btn">
        <Link to={`/${el.recipe.uri.slice(51)}`}>
          Start Cooking <i className="fas fa-long-arrow-alt-right" />
        </Link>
      </div>
    </div>
  );
}

export default RecipCard;
