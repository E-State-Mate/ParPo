import React, {useEffect, useState} from 'react'
import { Card, CardActionArea, CardMedia } from '@mui/material'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { Link } from 'react-router-dom';

const TeamCard = ({data}) => {

  const [fileURL, setFileURL] = useState(null);

  const getPics = async () => {
    const storage = getStorage();
    setFileURL(await getDownloadURL(ref(storage, data.pic)))
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    getPics();
    console.log(fileURL)
  }, [,fileURL])

  return (
    <Card className='team-card'> 
      <CardActionArea href={data.linkedin}>
        <CardMedia component='img' image={fileURL} height='250px' />
        <div className='team-card-center'>
          <p>{data.name}</p>
          <p>{data.job}</p>
        </div>
      </CardActionArea>
    </Card>
  )
}

export default TeamCard