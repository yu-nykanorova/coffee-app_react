import { DrinksProvider } from "../../DrinksContext";
import { Drink } from "./Drink";

export const DrinkPage = () => {
  
  return (
    <div>
      <DrinksProvider>
        <Drink />
      </DrinksProvider>
    </div> 
  )
}



