import { Button, Divider, TextField } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const EditPropertyModal = ({handleCancel, handleClose}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const execSummary = e.target[0].value;
        const fullAddress = e.target[2].value;
        const subAddress = e.target[4].value;
        console.log(execSummary, fullAddress, subAddress);
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