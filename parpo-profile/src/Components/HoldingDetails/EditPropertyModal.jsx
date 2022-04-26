import { Button, Divider, TextField } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const EditPropertyModal = ({handleCancel, handleClose}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const execSummary = e.target[0].value;
        const fullAddress = e.target[2].value;
        const subAddress = e.target[4].value;
        const purchasePrice = e.target[6].value;
        const irr = e.target[8].value;
        const grm = e.target[10].value;
        const cnoi = e.target[12].value;
        const pfnoi = e.target[14].value;
        const ccr = e.target[16].value;
        const pfcr = e.target[18].value;
        const zone = e.target[20].value;
        const yearBuilt = e.target[22].value;
        const plotSize = e.target[24].value;
        const numberOfFloors = e.target[26].value;
        const floorPlate = e.target[28].value;
        const opportunityZone = e.target[30].value;
        const parkingSpaces = e.target[32].value;
        const parkingRatio = e.target[34].value;
        const propertyRatio = e.target[36].value;
        const amenities = e.target[38].value;
        const occupancyPercentage = e.target[40].value;
        const unitType = e.target[42].value;
        const numberOfTenants = e.target[44].value;
        const leaseType = e.target[46].value;
        const leaseRenewal = e.target[48].value;
        const renewalYear = e.target[50].value;
        const yearsLeftOnLease = e.target[52].value;
        const leaseEndDate = e.target[54].value;

        console.log(numberOfFloors, floorPlate, opportunityZone, parkingSpaces, parkingRatio, propertyRatio, amenities)
    }
  return (
    <div id='property-edit-modal-container'>
        <form onSubmit={handleSubmit} id='property-edit-modal'>
            <CloseIcon className='close-btn' onClick={() => handleCancel()}/>
            <h3>Overview</h3>
            <p>Executive Summary</p>
            <TextField fullWidth variant='outlined' label='Enter summary'/>
                <Divider sx={{m: 8, pt: 1, color: '#5ca8b2'}}/>
            
            <h3>Location</h3>
            <p>Full Address</p>
            <TextField fullWidth variant='outlined' label='Enter address' />
            <p>Sub Market</p>
            <TextField fullWidth variant='outlined' label='Enter address' />
                <Divider sx={{m: 8, pt: 1, color: '#5ca8b2'}}/>

            <h3>Financial</h3>
            <p>Purchase Price</p>
            <TextField fullWidth variant='outlined' label='Enter purchase price' />
            <p>Internal Rate of Return (IRR)</p>
            <TextField fullWidth variant='outlined' label='Enter IRR' />
            <p>Gross Rent Multiplier (GRM)</p>
            <TextField fullWidth variant='outlined' label='Enter Gross Rent Multiplier' />
            <p>Current Net Operating Income (CNOI)</p>
            <TextField fullWidth variant='outlined' label='Enter GNOI' />
            <p>Pro Forma Net Operating Income (PFNOI)</p>
            <TextField fullWidth variant='outlined' label='Enter PFNOI' />
            <p>Current Cap Rate (CCR)</p>
            <TextField fullWidth variant='outlined' label='Enter CCR' />
            <p>Pro Forma Cap Rate (PFCR)</p>
            <TextField fullWidth variant='outlined' label='Enter PFCR' />
                <Divider sx={{m: 8, pt: 1, color: '#5ca8b2'}}/>

            <h3>Property</h3>
            {/* Two dropdowns then... */}
            <p>Zone</p>
            <TextField fullWidth variant='outlined' label='Enter Zone' />
            <p>Year Built</p>
            <TextField fullWidth variant='outlined' label='Enter year built' />
            <p>Plot Size (in sqft)</p>
            <TextField fullWidth variant='outlined' label='Enter Plot Size' />
            <p>Number of Floors</p>
            <TextField fullWidth variant='outlined' label='Enter Number of Floors' />
            <p>Floor Plate (in sqft)</p>
            <TextField fullWidth variant='outlined' label='Enter Floor Plate' />
            {/* DROPDOWN FOR OPP ZONE */}
            <p>Opportunity Zone</p>
            <TextField fullWidth variant='outlined' label='Enter Number of Floors' />
            <p>Parking Info</p>
            <TextField fullWidth variant='outlined' label='Enter Parking Info' />
            <p>Parking Ratio</p>
            <TextField fullWidth variant='outlined' label='Enter Parking Ratio' />
            <p>Property Ratio</p>
            <TextField fullWidth variant='outlined' label='Enter Property Ratio' />
            {/* AMENITIES LIST */}
            <p>Amenities</p>
            <TextField fullWidth variant='outlined' label='Enter Amenities (list)' />
                <Divider sx={{m: 8, pt: 1, color: '#5ca8b2'}}/>

            <h3>Tenant</h3>
            <p>Occupancy Percentage</p>
            <TextField fullWidth variant='outlined' label='Enter Occupancy Percentage' />
            {/* DROPDOWN */}
            <p>Unit Type</p>
            <TextField fullWidth variant='outlined' label='Enter Unit Type' />
            {/* Make conditional if ^^ */}
            <p># of Tenants (if multi)</p>
            <TextField fullWidth variant='outlined' label='Enter # of Tenants' />
            {/* DROPDOWN */}
            <p>Lease Type</p>
            <TextField fullWidth variant='outlined' label='Select Lease Type' />
            {/* YES/NO DROPDOWN */}
            <p>Lease Renewal</p>
            <TextField fullWidth variant='outlined' label='Select Lease Renewal' />
            {/* CONDITIONAL IF ^^ */}
            <p>Renewal Year (if yes)</p>
            <TextField fullWidth variant='outlined' label='Select Renewal Year' />
            <p>Years Left on Lease</p>
            <TextField fullWidth variant='outlined' label='Enter years left on lease' />
            {/* Date Selecter */}
            <p>Lease End Date</p>
            <TextField fullWidth variant='outlined' label='Enter lease end date' />
            
            <Button variant='contained' type='submit'>Save Changes</Button>
        </form>
    </div>
  )
}

export default EditPropertyModal