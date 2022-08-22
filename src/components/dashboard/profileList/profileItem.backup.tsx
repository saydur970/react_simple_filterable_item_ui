import { FC } from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

interface IComp {
  item: {
    id: string;
    name: string;
    image: string;
    location: {
      country: string;
      city: string;
    };
    joined: string;
    totalFollower: number;
    industry: {
      name: string;
      category: string;
    };
    gender: 'Male' | 'Female';
    socialMedia: {
      facebook?: string;
      instagram?: string;
      linkedin?: string;
      twitter?: string;
    }
  }
}

export const ProfileItem: FC<IComp> = ({ item }) => {

  return (
    <Grid item xs={12} sm={12} md={6} lg={4} 
      sx={{marginTop: '2rem'}} container justifyContent="center"
    >

      <Grid item xs={12} >
        <Card sx={{ minWidth: 275, maxWidth: 400}}>
        {/* <Card sx={{ minWidth: 275,  maxWidth: 450, marginRight: '2rem' }}> */}
        {/* <Card sx={{ minWidth: 275,  maxWidth: 350, margin: '0 auto' }}> */}
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              benevolent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>


    </Grid>
  )

};