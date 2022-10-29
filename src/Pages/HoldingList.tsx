import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { Grid } from "@mui/material";
import { FilterDropdown, HoldingCard, PropertyType } from "../Components/components";
import { propertyTypes } from "../Lib/data/propertyTypeData";
import { fetchHoldings, setListCount } from "../_features/holdingListSlice";
import { BounceLoader } from 'react-spinners';
import { css } from '@emotion/react'
import type { AppDispatch } from '../_app/store'

const override = css`
  display: block;
  margin: 2rem auto;
  border-color: red
  `;

const HoldingList = () => {

    const dispatch = useDispatch<AppDispatch>()
    let slug = useParams();
    const { filterList, holdings, listCount, status } = useSelector((state: any) => state.holdingList)

    const [ visibleHoldings, setVisibleHoldings ] = useState([''])
    
    const getHoldings = async() => {
        await dispatch(fetchHoldings())
    }

    useEffect(() => {
        getHoldings();
    }, [slug]);

    useEffect(() => {
        if(filterList.length < 1){
            setVisibleHoldings(holdings)
        } else {
            const filteredHoldings = holdings.filter((holding: any) => filterList.includes(holding.propertyType))
            setVisibleHoldings(filteredHoldings)
        }
    }, [filterList])

    useEffect(() => { 
        setVisibleHoldings(holdings)
        dispatch(setListCount(holdings.length))
    }, [holdings])

    useEffect(() => {
        dispatch(setListCount(visibleHoldings.length))
    }, [visibleHoldings])

    const filterPropTypes = () => {
        console.log('test')
    }

    return (
        <div className="outlet-container">
            {/* Desktop implementation */}
            <Grid container width="80%" sx={{ margin: "auto", display: 'flex' }}>
                <Grid item xs={12} md={3} lg={2}>
                    <p style={{ margin: "1rem" }}>Property Type</p>
                    <Grid container sx={{display: {xs: 'block', md: 'none'}}}>
                        <FilterDropdown propertyTypes={propertyTypes} filterPropTypes={filterPropTypes}/>
                    </Grid>
                    <Grid container sx={{display: {xs: 'none', md: 'block'}}}>
                        {propertyTypes.map((property, i) => (
                           <Grid item xs={12} sm={4} md={12}>
                               <PropertyType key={i} property={property} />
                            </Grid>
                        ))}
                    </Grid>
                    
                </Grid>
                <Grid item xs={12} md={9} lg={10}>
                    <p style={{ margin: "1rem" }}>{listCount} Properties</p>
                    { status === 'succeeded' ? 
                        visibleHoldings.map((holding, i) => ( <HoldingCard key={i} holding={holding} />))
                        :
                        <BounceLoader loading={true} color={'#5ca8b2'} css={override}/> 
                    }
                </Grid>
            </Grid>
        </div>
    );
};

export default HoldingList;
