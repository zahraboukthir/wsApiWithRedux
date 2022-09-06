import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RecipCard({el}) {
    console.log(el.recipe)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.recipe.image} />
      <Card.Body>
        <Card.Title>{el.recipe.label}</Card.Title>
        {el.recipe.mealType.map((el,i)=> <li>{el}</li> )}
       
       <Link to={`/${el.recipe.uri.slice(51)}`}> <Button variant="primary">Details</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default RecipCard;