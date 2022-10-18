import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, SvgIcon, Typography } from "@mui/material";
import { Check } from "@mui/icons-material";
import { setFilterList } from '../../_features/holdingListSlice'

import { PropertyTypeContext } from "../../Context/PropertyTypeContext";

const PropertyType = ({ property }) => {

    const dispatch = useDispatch();

    const [selected, isSelected] = useState(false);
    // console.log(property);

    const { ActivePropertyTypes, setActivePropertyTypes } = useContext(PropertyTypeContext);

    // Can add selection logic here
    const handleSelect = () => {
        isSelected(!selected)
        dispatch(setFilterList(property.propertyType))
    };

    return (
        <Card className="prop-type-card" onClick={handleSelect}>
            <CardContent>
                <Check
                    className="prop-type-check"
                    color={selected ? "primary" : "action"}
                />
                <Typography align="center" sx={{ fontSize: "1rem" }}>
                    {property.propertyType}
                </Typography>
                <SvgIcon
                    component={property.image}
                    inheritViewBox
                    sx={{ width: "100%", fontSize: 50, marginTop: "1rem" }}
                />
            </CardContent>
        </Card>
    );
};

export default PropertyType;
