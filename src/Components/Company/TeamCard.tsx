import React, {useEffect, useState} from 'react'
import { Card, CardActionArea, CardMedia } from '@mui/material'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'

type TeamCardProps = {
  data: any;
}

const TeamCard: React.FunctionComponent<TeamCardProps> = ({data}) => {

  const [fileURL, setFileURL] = useState('');

  const getPics = async () => {
    const storage = getStorage();
    setFileURL(await getDownloadURL(ref(storage, data.pic)))
  }

  useEffect(() => { getPics() }, [])

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