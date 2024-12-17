import React, { createContext, useMemo, useState } from "react";
import { drinksData } from "./database/drinksData";

export const DrinksContext = createContext();

export const DrinksProvider = ({ children }) => {
    const [drinks, setDrinks] = useState(drinksData);

    const value = useMemo(() => ({ drinks, setDrinks }), [drinks]);

    return (
        <DrinksContext.Provider value={value}>
            {children}
        </DrinksContext.Provider>
    );
}

