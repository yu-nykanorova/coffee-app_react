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
            rating: 4.5,
            votes: 6.879,
            imgUrl: "/src/assets/img/cappuccino_1.png",
            milk: true,
        },
        {
            id: 2,
            title: "Cappuccino",
            roast: "Medium Roasted",
            comment: "With Foam",
            desc: "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.",
            price: 4.20,
            rating: 4.2,
            votes: 6.879,
            imgUrl: "/src/assets/img/cappuccino_2.png",
            milk: true,
        },
        {
            id: 3,
            title: "Americano",
            roast: "Medium Roasted",
            comment: "Without Milk",
            desc: "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.",
            price: 4.20,
            rating: 4.5,
            votes: 6.879,
            imgUrl: "/src/assets/img/americano.jpg",
            milk: false,
        },
        {
            id: 4,
            title: "Espresso",
            roast: "Medium Roasted",
            comment: "Without Milk",
            desc: "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.",
            price: 4.20,
            rating: 4.5,
            votes: 6.879,
            imgUrl: "/src/assets/img/espresso.jpg",
            milk: false,
        },
    ]);

    return (
        <DrinksContext.Provider value={drinks}>
            {children}
        </DrinksContext.Provider>
    );
}

