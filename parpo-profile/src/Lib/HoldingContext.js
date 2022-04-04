import { createContext, useState } from "react";
import axios from "axios";

export const HoldingContext = createContext({});

const HoldingProvider = ({ children }) => {
  const [Holdings, setHoldings] = useState([]);
  const [Holding, setHolding] = useState({});

  // GET/holdings
  const getAllHoldings = async () => {
    const response = await axios.get("http://localhost:5000/auth-development-92670/us-central1/getHoldings");
    setHoldings(response.data);

    return response;
  };

  return <HoldingContext.Provider value={{ getAllHoldings }}>{children}</HoldingContext.Provider>;
};

export default HoldingProvider;
