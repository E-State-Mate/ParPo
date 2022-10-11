import { useState, useContext } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import { PropertyTypeContext } from "../../Context/PropertyTypeContext";

const PropertyType = ({ property, filterListHandler }) => {
    const [selected, isSelected] = useState(false);
    // console.log(property);

    const { ActivePropertyTypes, setActivePropertyTypes } = useContext(PropertyTypeContext);

    // Can add selection logic here
    const handleSelect = () => {
        isSelected(!selected)
        filterListHandler(property.propertyType)
    };

    return (
        <Card className="prop-type-card" onClick={handleSelect}>
            <CardContent>
                <CheckIcon
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
