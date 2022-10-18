import { Button, Divider, Grid, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { updateHolding } from '../../Lib/utils/holdingsFetcher';

const EditPropertyModal = ({handleCancel, handleClose, propertyID, data}) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            executiveSummary: e.target[0].value,
            address: e.target[2].value,
            submarket: e.target[4].value,
            purchasePrice: e.target[6].value,
            irr: e.target[8].value,
            irrYear: e.target[10].value,
            grm: e.target[12].value,
            grmYear: e.target[14].value,
            cnoi: e.target[16].value,
            cnoiYear: e.target[18].value,
            pfnoi: e.target[20].value,
            pfnoiYear: e.target[22].value,
            capRate: e.target[24].value,
            capRateYear: e.target[26].value,
            pfcr: e.target[28].value,
            pfcrYear: e.target[30].value,
            zone: e.target[32].value,
            yearBuilt: e.target[34].value,
            plotSize: e.target[36].value,
            numberOfFloors: e.target[38].value,
            floorPlate: e.target[40].value,
            opportunityZone: e.target[42].value,
            parkingSpaces: e.target[44].value,
            parkingRatio: e.target[46].value,
            propertyRatio: e.target[48].value,
            // amenities: e.target[38].value,
            occupancyPercentage: e.target[50].value,
            singleOrMultiTenant: e.target[52].value,
            numberOfTenants: e.target[54].value,
            leaseType: e.target[56].value,
            leaseRenewal: e.target[58].value,
            yearsLeftOnLease: e.target[60].value,
            leaseEndDate: e.target[62].value,
            // featured: e.target[56].value
        }
        await updateHolding(propertyID, data)
        .then(() => handleClose())
    }
  return (
    <div id='property-edit-modal-container'>
        <form onSubmit={handleSubmit} id='property-edit-modal'>
            <CloseIcon className='close-btn' onClick={() => handleCancel()}/>
            <h3>Overview</h3>
            <p>Executive Summary</p>
            <TextField fullWidth variant='outlined' label='Enter summary' defaultValue={data.executiveSummary}/>
                <Divider sx={{m: 8, pt: 1, color: '#5ca8b2'}}/>
            
            <h3>Location</h3>
            <p>Full Address</p>
            <TextField fullWidth variant='outlined' label='Enter address' defaultValue={data.address} />
            <p>Sub Market</p>
            <TextField fullWidth variant='outlined' label='Enter address' defaultValue={data.submarket}/>
                <Divider sx={{m: 8, pt: 1, color: '#5ca8b2'}}/>

            <h3>Financial</h3>
            <p>Purchase Price</p>
            <TextField fullWidth variant='outlined' label='Enter purchase price' defaultValue={data.purchasePrice}/>
            <Grid container>
                <Grid item md={5}>
                    <p className='form-prompt'>Internal Rate of Return (IRR)</p>
                    <TextField fullWidth variant='outlined' label='Enter IRR' defaultValue={data.irr}/>
                </Grid>
                <Grid item md={1} />
                <Grid item md={5}>
                    <p className='form-prompt'>Internal Rate of Return (IRR) Year</p>
                    <TextField fullWidth variant='outlined' label='Enter IRR Year' defaultValue={data.irrYear}/>
                </Grid>
                <Grid item md={1} />
            </Grid>
            <Grid container>
                <Grid item md={5}>
                    <p className='form-prompt'>Gross Rent Multiplier (GRM)</p>
                    <TextField fullWidth variant='outlined' label='Enter Gross Rent Multiplier' defaultValue={data.grm}/>
                </Grid>
                <Grid item md={1} />
                <Grid item md={5}>
                    <p className='form-prompt'>Gross Rent Multiplier (GRM)</p>
                    <TextField fullWidth variant='outlined' label='Enter GRM Year' defaultValue={data.grmYear}/>
                </Grid>
                <Grid item md={1} />
            </Grid>
            <Grid container>
                <Grid item md={5}>
                    <p className='form-prompt'>Current Net Operating Income (CNOI)</p>
                    <TextField fullWidth variant='outlined' label='Enter CNOI' defaultValue={data.cnoi}/>
                </Grid>
                <Grid item md={1} />
                <Grid item md={5}>
                    <p className='form-prompt'>Current Net Operating Income (CNOI) Reporting Year</p>
                    <TextField fullWidth variant='outlined' label='Enter CNOI Year' defaultValue={data.cnoiYear}/>
                </Grid>
                <Grid item md={1} />
            </Grid>
            <Grid container>
                <Grid item md={5}>
                    <p className='form-prompt'>Pro Forma Net Operating Income (PFNOI)</p>
                    <TextField fullWidth variant='outlined' label='Enter PFNOI' defaultValue={data.pfnoi}/>
                </Grid>
                <Grid item md={1} />
                <Grid item md={5}>
                    <p className='form-prompt'>Pro Forma Net Operating Income (PFNOI) Year</p>
                    <TextField fullWidth variant='outlined' label='Enter PFNOI Year' defaultValue={data.pfnoiYear}/>
                </Grid>
                <Grid item md={1} />
            </Grid>
            <Grid container>
                <Grid item md={5}>
                    <p className='form-prompt'>Current Cap Rate (CCR)</p>
                    <TextField fullWidth variant='outlined' label='Enter CCR' defaultValue={data.capRate}/>
                </Grid>
                <Grid item md={1} />
                <Grid item md={5}>
                    <p className='form-prompt'>Current Cap Rate (CCR) Year</p>
                    <TextField fullWidth variant='outlined' label='Enter CCR Year' defaultValue={data.capRateYear}/>
                </Grid>
                <Grid item md={1} />
            </Grid>
            <Grid container>
                <Grid item md={5}>
                    <p className='form-prompt'>Pro Forma Cap Rate (PFCR)</p>
                    <TextField fullWidth variant='outlined' label='Enter PFCR' defaultValue={data.pfcr}/>
                </Grid>
                <Grid item md={1} />
                <Grid item md={5}>
                    <p className='form-prompt'>Pro Forma Cap Rate (PFCR) Year</p>
                    <TextField fullWidth variant='outlined' label='Enter PFCR Year' defaultValue={data.pfcrYear}/>
                </Grid>
                <Grid item md={1} />
            </Grid>
                <Divider sx={{m: 8, pt: 1, color: '#5ca8b2'}}/>

            <h3>Property</h3>
            {/* Two dropdowns then... */}
            <p>Zone</p>
            <TextField fullWidth variant='outlined' label='Enter Zone' defaultValue={data.zone}/>
            <p>Year Built</p>
            <TextField fullWidth variant='outlined' label='Enter year built' defaultValue={data.yearBuilt}/>
            <p>Plot Size (in sqft)</p>
            <TextField fullWidth variant='outlined' label='Enter Plot Size' defaultValue={data.plotSize} />
            <p>Number of Floors</p>
            <TextField fullWidth variant='outlined' label='Enter Number of Floors' defaultValue={data.numberOfFloors}/>
            <p>Floor Plate (in sqft)</p>
            <TextField fullWidth variant='outlined' label='Enter Floor Plate' defaultValue={data.floorPlate}/>
            {/* DROPDOWN FOR OPP ZONE */}
            <p>Opportunity Zone</p>
            <TextField fullWidth variant='outlined' label='Enter Yes or No' defaultValue={data.opportunityZone}/>
            <p>Parking Info</p>
            <TextField fullWidth variant='outlined' label='Enter Parking Info' defaultValue={data.parkingRatio}/>
            <p>Parking Ratio</p>
            <TextField fullWidth variant='outlined' label='Enter Parking Ratio' defaultValue={data.parkingRatio}/>
            <p>Property Ratio</p>
            <TextField fullWidth variant='outlined' label='Enter Property Ratio' defaultValue={data.propertyRatio}/>
            {/* AMENITIES LIST */}
            <p>Amenities</p>
            <TextField fullWidth variant='outlined' label='Enter Amenities (list)' />
                <Divider sx={{m: 8, pt: 1, color: '#5ca8b2'}}/>

            <h3>Tenant</h3>
            <p>Occupancy Percentage</p>
            <TextField fullWidth variant='outlined' label='Enter Occupancy Percentage' defaultValue={data.occupancyPercentage}/>
            {/* DROPDOWN */}
            <p>Unit Type</p>
            <TextField fullWidth variant='outlined' label='Enter Unit Type' defaultValue={data.singleOrMultiTenant}/>
            {/* Make conditional if ^^ */}
            {/* DROPDOWN */}
            <p>Lease Type</p>
            <TextField fullWidth variant='outlined' label='Select Lease Type' defaultValue={data.leaseType}/>
            {/* YES/NO DROPDOWN */}
            <p>Lease Renewal</p>
            <TextField fullWidth variant='outlined' label='Select Lease Renewal' defaultValue={data.leaseRenewal} />
            {/* CONDITIONAL IF ^^ */}
            <p>Years Left on Lease</p>
            <TextField fullWidth variant='outlined' label='Enter years left on lease' defaultValue={data.yearsLeftOnLease}/>
            {/* Date Selecter */}
            <p>Lease End Date</p>
            <TextField fullWidth variant='outlined' label='Enter lease end date' defaultValue={data.leaseEndDate}/>
            
            <Button variant='contained' type='submit' 
                style={{
                    backgroundColor: '#5ca8b2',
                    borderRadius: 50,
                    margin: '2rem auto'
                }}
                fullWidth
                >
                    Save Changes
                </Button>
        </form>
    </div>
  )
}

export default EditPropertyModal