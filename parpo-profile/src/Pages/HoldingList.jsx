import React, { useContext, useEffect, useState } from "react";
import { ButtonBase, Card, CardHeader, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropertyType from "../Components/HoldingList/PropertyType";
import HoldingCard from "../Components/HoldingList/HoldingCard.js";
import holdingData from "../Lib/data/holdingData.json";
import { propertyTypes } from "../Lib/data/propertyTypeData";

import { HoldingContext } from "../Context/HoldingContext";
import { PropertyTypeContext } from "../Context/PropertyTypeContext";
// When you make components (Filter Type card, Holding card, etc), put them in Components/HoldingList to help keep things organized

const HoldingList = () => {
    const { Holdings, getAllHoldings } = useContext(HoldingContext);
    const { ActivePropertyTypes } = useContext(PropertyTypeContext);
    console.log("holdings:", Holdings);
    // TODO: Make dynamic Holdings count based on how many are rendered w/ HoldingCount
    const [HoldingCount, setHoldingCount] = useState(0);

    useEffect(() => {
        getAllHoldings();
    }, []);

    return (
        <div id="holding-list-container">
            <Grid container width="90%" style={{ margin: "auto" }}>
                <Grid item lg />
                <Grid item md={4} lg={2}>
                    <p style={{ margin: "1rem" }}>Property Type</p>
                    {propertyTypes.map((property, i) => (
                        <PropertyType key={i} property={property} />
                    ))}
                </Grid>
                <Grid item md={8} lg={5}>
                    <p style={{ margin: "1rem" }}>{Holdings.length} Properties</p>
                    {Holdings.filter((holding) => ActivePropertyTypes[holding.propertyType]).map((holding, i) => {
                        return <HoldingCard key={i} holding={holding} />;
                    })}
                </Grid>
                <Grid item lg />
            </Grid>
        </div>
    );
};

export default HoldingList;
