import React, { createContext, useState } from "react";

export const PropertyTypeContext = createContext({});

type PropertyTypeProviderProps = {
    children: any;
}

const PropertyTypeProvider: React.FunctionComponent<PropertyTypeProviderProps> = ({ children }) => {
    const [ActivePropertyTypes, setActivePropertyTypes] = useState({
        Residential: true,
        Office: true,
        Industrial: true,
        Retail: true,
        Restaurant: true,
        "Shopping Center": true,
        "Health Care": true,
        Hospitality: true,
        Entertainment: true,
        Land: true,
    });

    return (
        <PropertyTypeContext.Provider value={{ ActivePropertyTypes, setActivePropertyTypes }}>
            {children}
        </PropertyTypeContext.Provider>
    );
}

export default PropertyTypeProvider;
