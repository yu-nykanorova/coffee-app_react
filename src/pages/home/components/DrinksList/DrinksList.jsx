import { Link } from "react-router-dom";
import "./DrinksList.scss";

export const DrinksList = () => {
  const drinks = [
    {
        id: 1,
        title: "Cappuccino",
        desc: "With Steamed Milk",
        price: 4.20,
        raiting: 4.5,
    },
    {
        id: 2,
        title: "Cappuccino",
        desc: "With Foam",
        price: 4.20,
        raiting: 4.2,
    },
    {
        id: 3,
        title: "Cappuccino",
        desc: "With Steamed Milk",
        price: 4.20,
        raiting: 4.5,
    },
  ]
  
    return (
    <div className="coffee-drinks">
      {drinks.map(drink => (
        <div key={drink.id}>
            <Link to={`/drinks/${drink.id}`} className="item-container coffee-drinks__item">
                <h3 className="item-title coffee-drinks__title">{drink.title}</h3>
                <p className="coffee-drinks__desc">{drink.desc}</p>
                <div className="coffee-drinks__bye-info">
                    <p className="price-value"><span>$ </span>{drink.price}</p>
                    <button className="btn add-btn"><span class="icon-plus"></span></button>
                </div>
            </Link>
        </div>
      ))}
    </div>
  );
}

{/* <div class="coffee-drinks">
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
</div> */}
