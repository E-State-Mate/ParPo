import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import propertyType from './propertyTypeData.json'


export default function PropertyType({property}) {
  return (
    <div>
        <ButtonGroup orientation= "vertical">
          {propertyType.map(property => (
            <Button key={property} variant= "default">

              {property.propertyType}

            </Button>
        ))}
        </ButtonGroup>
    </div>
  )
}
