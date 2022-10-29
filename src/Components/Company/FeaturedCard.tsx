import React, { useEffect, useState } from 'react'
import { Card, CardActionArea, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import { getStorage, ref, getDownloadURL} from 'firebase/storage'

type FeaturedCardProps = {
  data: any;
}

const FeaturedCard: React.FunctionComponent<FeaturedCardProps> = ({data}) => {

  const { 
    _id,
    propertyType,
    sqft,
    creditRating,
    street, city, state, zipCode,
    manager,
    estimatedValue 
  } = data;

    const [fileURL, setFileURL] = useState('');

    const getPics = async () => {
      const storage = getStorage();
      setFileURL(await getDownloadURL(ref(storage, data.fileURL)))
    }
  
    useEffect(() => {
      getPics();
    }, [])

  return (
    <Card className='featured-card'>
        <CardActionArea component={Link} to={`/property/${_id}`} replace className='relative'>
        <CardMedia component='img' image={fileURL} height='250px' />
          <div className='feat-card-top'>
            <p>{propertyType} Building</p>
            <p>{sqft.toLocaleString()} Sq Ft.</p>
            <p>{creditRating}</p>
          </div>
          <div className='feat-card-banner'>
            <div>
                <p>{street}</p>
                <p>{city}, {state} {zipCode}</p>
                <p>Managed by: <i>{manager[0]}</i></p>
            </div>
            <>
                <p>${estimatedValue.toLocaleString()}</p>
            </>
          </div>
        </CardActionArea>
    </Card>
  )
}

export default FeaturedCard