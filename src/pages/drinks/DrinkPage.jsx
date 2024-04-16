import { useParams } from "react-router-dom"

export const DrinkPage = () => {
  const{id} = useParams();

  return (
    <div>
      <h1>Drink detail - {id}</h1>
    </div>
  );
}

