import { createContext, useState } from "react";

export const PropertyTypeContext = createContext({});

function PropertyTypeProvider({ children }) {
    const [ActivePropertyTypes, setActivePropertyTypes] = useState({
        Residential: false,
        Office: false,
        Industrial: false,
        Retail: false,
        Restaurant: false,
        "Shopping Center": false,
        "Health Care": false,
        Hospitality: false,
        Entertainment: false,
        Land: false,
    });

    return (
        <PropertyTypeContext.Provider value={{ ActivePropertyTypes, setActivePropertyTypes }}>
            {children}
        </PropertyTypeContext.Provider>
    );
}

export default PropertyTypeProvider;
