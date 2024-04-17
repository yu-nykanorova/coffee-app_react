import React, { createContext, useState } from "react";

export const DrinksContext = createContext();

export const DrinksProvider = ({children}) => {
    const [drinks, setDrinks] = useState([
        {
            id: 1,
            title: "Cappuccino",
            roast: "Medium Roasted",
            comment: "With Steamed Milk",
            desc: "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.",
            price: 4.20,
            raiting: 4.5,
            votes: 6.879,
            imgUrl: "src/assets/img/cappuccino_1.png",
        },
        {
            id: 2,
            title: "Cappuccino",
            roast: "Medium Roasted",
            comment: "With Foam",
            desc: "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.",
            price: 4.20,
            raiting: 4.2,
            votes: 6.879,
            imgUrl: "src/assets/img/cappuccino_2.png",
        },
        {
            id: 3,
            title: "Cappuccino",
            roast: "Medium Roasted",
            comment: "With Steamed Milk",
            desc: "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.",
            price: 4.20,
            raiting: 4.5,
            votes: 6.879,
            imgUrl: "src/assets/img/cappuccino_1.png",
        },
    ]);

    return (
        <DrinksContext.Provider value={drinks}>
            {children}
        </DrinksContext.Provider>
    );
}

