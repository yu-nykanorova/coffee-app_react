import { useParams } from "react-router-dom"
import { useContext } from "react";
import { DrinksContext } from "../../DrinksContext";
import { Button } from "../../shared/UI/Button/Button";

export const Drink = () => {
    const { id } = useParams();
    const drinks = useContext(DrinksContext);
    const drink = drinks.find(item => item.id === parseInt(id));
  
    if (!drinks) return <h1>Drink not found!</h1>;
     
    return (
      <div>
        <h1>Drink detail - {id}</h1>
        <h2>Drink name - {drink.title}</h2>
      </div>
    );
}

