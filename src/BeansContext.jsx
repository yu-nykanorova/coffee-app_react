import React, { createContext, useState } from "react";

export const BeansContext = createContext();

export const BeansProvider = ({children}) => {
   
    const [beans, setBeans] = useState([
        {
            id: 1,
            title: "Robusta Beans",
            roast: "Medium Roasted",
            price: 10.50,
            desc: "Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed!",
            region: "Africa",
            size: 250,
            raiting: 4.5,
            votes: 6.879,
        },
        {
            id: 2,
            title: "Arabica Beans",
            roast: "Light Roast",
            price: 10.50,
            desc: "Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed!",
            region: "Africa",
            size: 500,
            raiting: 4.5,
            votes: 6.879,
        },
        {
            id: 3,
            title: "Robusta Beans",
            roast: "Medium Roasted",
            price: 10.50,
            desc: "Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed!",
            region: "Africa",
            size: 1000,
            raiting: 4.5,
            votes: 6.879,
        },
    ]);

    return (
        <BeansContext.Provider value={beans}>
            {children}
        </BeansContext.Provider>
    );
}

