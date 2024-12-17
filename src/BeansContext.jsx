import React, { createContext, useMemo, useState } from "react";
import { beansData } from "./database/beansData";

export const BeansContext = createContext();

export const BeansProvider = ({ children }) => {
    const [beans, setBeans] = useState(beansData);

    const value = useMemo(() => ({ beans, setBeans }), [beans]);

    return (
        <BeansContext.Provider value={value}>
            {children}
        </BeansContext.Provider>
    );
}

