import React, { useEffect, useState } from 'react'
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Paper, Typography } from '@mui/material'
import { AccountBalance, Layers, People, StarOutline } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core'
import { getStorage, ref, getDownloadURL} from 'firebase/storage'
import { BounceLoader } from 'react-spinners';
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  image: {
    position: "relative"
  }
})

const override = css`
  display: block;
  margin: 2rem auto;
  border-color: red
  `;

const rightCol = ['occupancy', 'sqft', 'revenue', 'rating']

type HoldingCardProps = {
  holding: any;
}

const HoldingCard: React.FunctionComponent<HoldingCardProps> = ({holding}) => {
  const classes = useStyles()

  const [fileURL, setFileURL] = useState('');
  const [ sqft, setSqft ] = useState(holding.sqft);
  const [ loading, setLoading ] = useState(true)
  const [ imgLoading, setImgLoading ] = useState(true)

  const getPics = async () => {
    const storage = getStorage();
    setFileURL(await getDownloadURL(ref(storage, holding.fileURL)))
  }

  useEffect(() => {
    getPics();
    if(fileURL !== null){
      setImgLoading(false)
    }
  }, [fileURL])

  useEffect(() => {
    if(holding !== null){
      setLoading(false);
    }
  }, [holding])

  return (
    <Card className='prop-list-card'>
      <CardActionArea component={Link} to={`/property/${holding._id}`} replace>
      <Grid container style={{height: '100%'}}>
        <Grid item xs={12} sm={4}>
          {imgLoading ? 
            <BounceLoader loading={true} color={'#5ca8b2'} css={override}/> 
            :
            <CardMedia
              className= {classes.image}
              component="img"
              image={fileURL}
              height='200px'
              alt="Property header photo"
            />
          }
          
        </Grid>

        {/* Center column -- includes building name, type, address and price */}
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

        {/* Right column -- features specific building data */}
        <Grid item xs={12} sm={4} className='prop-list-card-right' mt={2}>
          <div className='prop-list-card-right-info'>
            <People sx={{marginRight: '1rem'}}/>
            <Typography variant='body2'>{holding.occupancyPercentage*100}% occupancy</Typography>
          </div>
          <div className='prop-list-card-right-info'>
            <Layers sx={{marginRight: '1rem'}}/>
            <Typography variant='body2'>{loading ? sqft : sqft.toLocaleString()} Sq Ft</Typography>
          </div>
          <div className='prop-list-card-right-info'>
            <AccountBalance sx={{marginRight: '1rem'}}/>
            <Typography variant='body2'>{holding.revenue} in 2021 Revenue</Typography>
          </div>
          <div className='prop-list-card-right-info'>
            <StarOutline sx={{marginRight: '1rem'}}/>
            <Typography variant='body2'>{holding.rating} Rating</Typography>
          </div>
        </Grid>
      </Grid>
      </CardActionArea>
    </Card>
  )
}

export default HoldingCard