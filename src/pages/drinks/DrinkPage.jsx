import { DrinksProvider } from "../../DrinksContext";
import { Drink } from "./Drink";

export const DrinkPage = () => {
  
  return (
    <div>
      Test
      <DrinksProvider>
        <Drink />
      </DrinksProvider>
      Test2
    </div> 
  )
}



