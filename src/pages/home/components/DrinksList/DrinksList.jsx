import { Link } from "react-router-dom";
import "./DrinksList.scss";
import { useContext } from "react";
import { DrinksContext } from "../../../../DrinksContext";
import { ButtonAdd } from "../../../../shared/UI/ButtonAdd/ButtonAdd";

export const DrinksList = () => {
  const drinks = useContext(DrinksContext);

  return (
    <div className="coffee-drinks">
      {drinks.map(drink => (
        <div key={drink.id}>
          <Link to={`/drinks/${drink.id}`} className="item-container coffee-drinks__item">
            <div className="coffee-drinks__img">
              <img src={drink.imgUrl} alt={drink.title} />
              <div className="coffee-drinks__rating">
                <span className="icon-star"></span>
                <p className="rating_value">{ drink.rating }</p>
              </div>
            </div>
            <h3 className="item-title coffee-drinks__title">{drink.title}</h3>
            <p className="coffee-drinks__desc">{drink.comment}</p>
            <div className="coffee-drinks__bye-info">
              <p className="price-value"><span>$ </span>{drink.price}</p>
              <ButtonAdd />
            </div>
            </Link>
        </div>
      ))}
    </div>
  )
}


