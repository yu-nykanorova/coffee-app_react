import React, { createContext, useState } from "react";

export const DrinksContext = createContext();

export const DrinksProvider = ({children}) => {
    const [drinks, setDrinks] = useState([
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
    ]);

    return (
        <DrinksContext.Provider value={drinks}>
            {children}
        </DrinksContext.Provider>
    );
}

