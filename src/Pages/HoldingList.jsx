import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { Grid } from "@mui/material";
import { FilterDropdown, HoldingCard, MobHoldingCard, PropertyType } from "../Components/components";
import { propertyTypes } from "../Lib/data/propertyTypeData";
import { fetchHoldings, setListCount } from "../_features/holdingListSlice";
import {BounceLoader} from 'react-spinners';
import { css } from '@emotion/react'

const override = css`
  display: block;
  margin: 2rem auto;
  border-color: red
  `;

const HoldingList = () => {

    const dispatch = useDispatch()
    let slug = useParams();
    const { filterList, holdings, listCount, status } = useSelector(state => state.holdingList)

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
            const filteredHoldings = holdings.filter(holding => filterList.includes(holding.propertyType))
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

    return (
        <div className="outlet-container">
            {/* Desktop implementation */}
            <Grid container width="80%" sx={{ margin: "auto", display: 'flex' }}>
                <Grid item xs={6} md={4} lg={3}>
                    <p style={{ margin: "1rem" }}>Property Type</p>
                    {propertyTypes.map((property, i) => (
                        <PropertyType key={i} property={property} />
                    ))}
                </Grid>
                <Grid item xs={6} md={8} lg={9}>
                    <p style={{ margin: "1rem" }}>{listCount} Properties</p>
                    { status === 'succeeded' ? 
                        visibleHoldings.map((holding, i) => ( <HoldingCard key={i} holding={holding} />))
                        :
                        <BounceLoader loading={true} color={'#5ca8b2'} style={{margin: '2rem auto'}} css={override}/> 
                    }
                </Grid>
            </Grid>
        </div>
    );
};

export default HoldingList;
