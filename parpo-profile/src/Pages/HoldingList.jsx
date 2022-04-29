import React, { useContext, useEffect, useState } from "react";
import { ButtonBase, Card, CardHeader, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropertyType from "../Components/HoldingList/PropertyType";
import HoldingCard from "../Components/HoldingList/HoldingCard.js";
import MobHoldingCard from '../Components/HoldingList/MobHoldingCard'
import FilterDropdown from "../Components/HoldingList/FilterDropdown";
import holdingData from "../Lib/data/holdingData.json";
import { propertyTypes } from "../Lib/data/propertyTypeData";
import { getHoldings } from "../Lib/utils/holdingsFetcher";
import { HoldingContext } from "../Context/HoldingContext";
import { PropertyTypeContext } from "../Context/PropertyTypeContext";
// When you make components (Filter Type card, Holding card, etc), put them in Components/HoldingList to help keep things organized

const HoldingList = () => {
    const [ holdings, setHoldings ] = useState([])
    const [ visibleHoldings, setVisibleHoldings ] = useState([''])
    const [ listCount, setListCount ] = useState(0)
    const [ filterList, setFilterList ] = useState([])
    const [ mobFilter, setMobFilter ] = useState([])

    // console.log("holdings:", holdings);
    // TODO: Make dynamic Holdings count based on how many are rendered w/ HoldingCount

    const fetchHoldings = async() => {
        setHoldings(await getHoldings());
    }

    const filterListHandler = (propType) => {
        if(filterList.includes(propType)){
            const index = filterList.indexOf(propType);
            setFilterList(filterList.filter(item => item !== propType)) // 2nd parameter means remove one item only
        } else {
            setFilterList([...filterList, propType])
        }
    }

    const mobFilterListHandler = (propTypes) => {
        setFilterList(propTypes);
    }

    useEffect(() => {
        if(filterList.length < 1){
            setVisibleHoldings(holdings)
        } else {
            console.log(filterList)
            setVisibleHoldings(holdings.filter(holding => filterList.includes(holding.propertyType)))
        }
    }, [filterList])

    useEffect(() => {
        fetchHoldings();
    }, []);

    useEffect(() => { 
        setVisibleHoldings(holdings)
        setListCount(holdings.length)
    }, [holdings])

    useEffect(() => {
        setListCount(visibleHoldings.length)
    }, [visibleHoldings])

    return (
        <div id="holding-list-container">
            {/* Desktop implementation */}
            <Grid container width="80%" sx={{ margin: "auto", display: {xs: 'none !important', sm: 'flex !important'} }}>
                <Grid item md={4} lg={3}>
                    <p style={{ margin: "1rem" }}>Property Type</p>
                    {propertyTypes.map((property, i) => (
                        <PropertyType key={i} property={property} filterListHandler={filterListHandler} />
                    ))}
                </Grid>
                <Grid item md={8} lg={9}>
                    <p style={{ margin: "1rem" }}>{listCount} Properties</p>
                    {visibleHoldings.map((holding, i) => (
                        <HoldingCard key={i} holding={holding} />
                    ))}
                </Grid>
            </Grid>
            {/* Mobile implementation */}
            <Grid container sx={{margin: 'auto', display: {xs: 'flex !important', sm: 'none !important'}}}>
                <Grid item xs={6}>
                    <p style={{ margin: "1rem" }}>{listCount} Properties</p>
                </Grid>
                <Grid item xs={6}>
                    <FilterDropdown propertyTypes={propertyTypes} mobFilterListHandler={mobFilterListHandler}/>
                </Grid>
                <Grid item xs={12}>
                    {visibleHoldings.map((holding, i) => (
                        <MobHoldingCard key={i} holding={holding} />
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default HoldingList;
