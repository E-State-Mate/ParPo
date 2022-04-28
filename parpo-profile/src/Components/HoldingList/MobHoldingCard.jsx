import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Paper, Typography } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { getStorage, ref, getDownloadURL} from 'firebase/storage'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  image: {
    position: "relative left"
  }
})

const rightCol = ['occupancy', 'sqft', 'revenue', 'rating']

const HoldingCard = ({holding}) => {
  const classes = useStyles()

  const [fileURL, setFileURL] = useState(null);
  const [ sqft, setSqft ] = useState(holding.sqft);
  const [ loading, setLoading ] = useState(true)

  const getPics = async () => {
    const storage = getStorage();
    setFileURL(await getDownloadURL(ref(storage, holding.fileURL)))
    .catch((error) => console.log(error))
  }
  
  useEffect(() => {
    console.log(holding)
    getPics();
    console.log(fileURL)
  }, [,fileURL])

  useEffect(() => {
    if(holding !== null){
      setLoading(false);
    }
  }, [holding])

  return (
    <Card className='prop-list-card'>
      
      <CardActionArea component={Link} to={`/property/${holding._id}`} replace>
      
      <Grid container align='left' style={{height: '100%'}}>
        
        <Grid item xs={12} sm={4}>
          <CardMedia
            className= {classes.image}
            display= "flex !important"
            component="img"
            image={fileURL}
            height='200px'
            alt="Property header photo"
          />
        </Grid>

        <Grid item xs={12} sm={4} mt={2}>
          <div className='prop-list-card-title'>
            <Typography variant='h6'>{holding.buildingName}</Typography>
            <Typography variant='body1' style={{textTransform: 'uppercase'}}>{holding.propertyType}</Typography>
          </div>
          <div className='prop-list-card-address'>
            <Typography variant='body2'>{holding.address}</Typography>
            <Typography variant='body2'>{holding.city}, {holding.state} {holding.zipCode}</Typography>
          </div>
          <div className='prop-list-card-list'>
            <Typography variant='body2'>{holding.price}</Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} className='prop-list-card-right' ml={6}>
          <div className='prop-list-mob-info'>
            <PeopleIcon sx={{marginRight: '4rem'}}/>
            <Typography variant='body2'>{holding.occupancyPercentage*100}% occupancy</Typography>
          </div>
          <div className='prop-list-mob-info'>
            <LayersIcon sx={{marginRight: '4rem'}}/>
            <Typography variant='body2'>{loading ? sqft : sqft.toLocaleString()} Sq Ft</Typography>
          </div>
          <div className='prop-list-mob-info'>
            <AccountBalanceIcon sx={{marginRight: '4rem'}}/>
            <Typography variant='body2'>{holding.revenue} in 2021 Revenue</Typography>
          </div>
          <div className='prop-list-mob-info'>
            <StarOutlineIcon sx={{marginRight: '4rem'}}/>
            <Typography variant='body2'>{holding.rating} Rating</Typography>
          </div>
        </Grid>
      </Grid>
      </CardActionArea>
    </Card>
  )
}

export default HoldingCard