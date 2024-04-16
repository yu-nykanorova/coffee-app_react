import { Link } from "react-router-dom";
import "./DrinksList.scss";
import { useContext } from "react";
import { DrinksContext } from "../../../../DrinksContext";

export const DrinksList = () => {
  const drinks = useContext(DrinksContext);

  return (
    <div>
      {drinks.map(drink => (
        <div key={drink.id}>
          <Link to={`/drinks/${drink.id}`}>{drink.title}</Link>
        </div>
      ))}
    </div>
  )
}

/* <div class="coffee-drinks">
  <a [routerLink]="'/product/' + item.id" class="item-container coffee-drinks__item" *ngFor="let item of coffeeDrinksData">
    <div class="coffee-drinks__img">
      <img src="{{item.img}}" alt="coffee-drink">
      <div class="coffee-drinks__raiting">
        <span class="icon-star"></span>
        <p class="raiting_value">{{ item.raiting }}</p>
      </div>
    </div>
    <h3 class="item-title coffee-drinks__title">{{item.title}}</h3>
    <p class="coffee-drinks__desc">{{item.desc}}</p>
    <div class="coffee-drinks__bye-info">
      <p class="price-value"><span>$ </span>{{item.price}}</p>
      <button class="btn add-btn"><span class="icon-plus"></span></button>
    </div>
  </a>
</div> */
