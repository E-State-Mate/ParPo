import { useEffect, useState } from 'react'
import { Card, CardActionArea, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import { getStorage, ref, getDownloadURL} from 'firebase/storage'

const FeaturedCard = ({data}) => {

    const [fileURL, setFileURL] = useState(null);

    const getPics = async () => {
      const storage = getStorage();
      setFileURL(await getDownloadURL(ref(storage, data.fileURL)))
      .catch((error) => console.log(error))
    }
  
    useEffect(() => {
      getPics();
      console.log(fileURL)
    }, [])

  return (
    <Card className='featured-card'>
        <CardActionArea component={Link} to={`/property/${data._id}`} replace className='relative'>
        <CardMedia component='img' image={fileURL} height='250px' />
            <div className='feat-card-top'>
                <p>{data.propertyType} Building</p>
                <p>{data.sqft.toLocaleString()} Sq Ft.</p>
                <p>{data.creditRating}</p>
            </div>
            <div className='feat-card-banner'>
                <div>
                    <p style={{fontSize: '0.75rem'}}>{data.street}</p>
                    <p style={{fontSize: '0.75rem'}}>{data.city}, {data.state} {data.zipCode}</p>
                    <p style={{fontSize: '0.5rem'}}>Managed by: <i>{data.manager[0]}</i></p>
                </div>
                <>
                    <p>${data.estimatedValue.toLocaleString()}</p>
                </>
            </div>
        </CardActionArea>
    </Card>
  )
}

export default FeaturedCard