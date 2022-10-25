import React, { createContext, useState } from "react";

export const HoldingContext = createContext({});

type HoldingProviderProps = {
    children: any;
}

const HoldingProvider: React.FunctionComponent<HoldingProviderProps> = ({ children }) => {
    const [Holdings, setHoldings] = useState<any>([]);
    const [Holding, setHolding] = useState<any>({});

    const getAllHoldings = async () => {
        const response = await fetch("https://us-central1-auth-development-92670.cloudfunctions.net/getHoldings", {
            mode: "cors",
        });
        setHoldings(await response.json());

        return response;
    };

    return (
        <HoldingContext.Provider value={{ Holdings, setHoldings, Holding, setHolding, getAllHoldings }}>
            {children}
        </HoldingContext.Provider>
    );
};

export default HoldingProvider;
