import { FC, Fragment } from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button, IconButton } 
from '@mui/material';
import classes from './profileItem.module.css';
import { Typo } from '../../shared/typography';
// icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

interface socialIconListParam {
  type: 'fb' | 'ins' | 'lin' | 'tw';
  link: string;
}

interface ItextWithKeyValueRender {
  // category: string;
  // gender: string;
  // follower: number;
  key: string;
  value: string;
}

const GENERAL_COLOR = '#637381';


export const ProfileItem: FC<IComp> = ({ item }) => {


  const socialIcon = ({ type, link }: socialIconListParam) => {
    return (
      <Grid item xs={2} >
        <IconButton>
          {
            type === 'fb' ?
              <FacebookIcon sx={{ color: GENERAL_COLOR, transform: 'scale(1.2)' }} /> :
              type === 'ins' ?
                <InstagramIcon sx={{ color: GENERAL_COLOR, transform: 'scale(1.2)' }} /> :
                type === 'tw' ?
                  <TwitterIcon sx={{ color: GENERAL_COLOR, transform: 'scale(1.2)' }} /> :
                  <LinkedInIcon sx={{ color: GENERAL_COLOR, transform: 'scale(1.2)' }} />
          }
        </IconButton>
      </Grid>
    )
  }

  // ===================== render follower, gender, category data =====================
  const textWithKeyValueRender = ({key, value}: ItextWithKeyValueRender) => {
    return (
      <Grid item xs={3} container 
        sx={{border: `0.1rem dashed ${GENERAL_COLOR}`, 
        padding: '0.5rem 1.5rem', margin: '0 0.5rem'
      }} 
      >
          <Grid item xs={12} >
            <Typography variant="h5" align="center"
              sx={{fontSize: '1.4rem', marginBottom: '0.5rem'}}
            >
              {value}
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Typo txt={key} align="center" size="1.2rem" color={GENERAL_COLOR} 
              margin="0rem" 
            />
          </Grid>
      </Grid>
    )
  }

  return (
    <div className={classes.container} >

      <Card sx={{ minWidth: 275, maxWidth: 500 }}>
        <CardContent>

          <Grid container >


            {/* ======================= profile image ======================= */}
            <Grid item xs={12} container justifyContent="center" alignContent="center"
              sx={{ margin: '3rem 0'}} >
              <img src="/images/users/1.jpg" alt={item.name} 
                className={classes.profileImage} 
              />
            </Grid>

            {/* ======================= profile name ======================= */}
            <Grid item xs={12} sx={{ marginBottom: '0.5rem' }} >
              <Typo txt={item.name} variant="h3" align="center" dotted={true} />
            </Grid>

            {/* ======================= location ======================= */}
            <Grid item xs={12} container alignItems="center" justifyContent="center" >
              <IconButton
                sx={{ transform: 'scale(1.2) translateY(-0.4rem)' }}
              >
                <LocationOnIcon sx={{ color: GENERAL_COLOR }} />
              </IconButton>
              <Typo size="1.4rem" txt={`${item.location.city} ${item.location.country}`}
                align="center" color="#637381" dotted={true}
              />
            </Grid>


            {/* ======================= join date ======================= */}
            <Grid item xs={12} container alignItems="center" justifyContent="center" >
              <IconButton
                sx={{ transform: 'scale(1.2) translateY(-0.4rem)' }}
              >
                <AccessTimeIcon sx={{ color: GENERAL_COLOR }} />
              </IconButton>
              <Typo size="1.4rem" txt={`Joined On: ${item.joined}`}
                align="center" color="#637381" dotted={true}
              />
            </Grid>


            {/* ======================= render social icons ======================= */}
            <Grid item xs={12} container justifyContent="center">

              <Grid xs={6} container justifyContent="center" >
                {
                  item.socialMedia.facebook &&
                  socialIcon({ type: 'fb', link: item.socialMedia.facebook })
                }
                {
                  item.socialMedia.instagram &&
                  socialIcon({ type: 'ins', link: item.socialMedia.instagram })
                }
                {
                  item.socialMedia.linkedin &&
                  socialIcon({ type: 'lin', link: item.socialMedia.linkedin })
                }
                {
                  item.socialMedia.twitter &&
                  socialIcon({ type: 'tw', link: item.socialMedia.twitter })
                }
              </Grid>

            </Grid>

            {/* =================== follower, gender, category =================== */}
            <Grid item xs={12} container justifyContent="center" sx={{ marginTop: '1.5rem' }} >
              {textWithKeyValueRender({
                key: 'Followers',
                value: item.totalFollower.toString()
              })}
              {textWithKeyValueRender({
                key: 'Categories',
                value: item.industry.category
              })}
              {textWithKeyValueRender({
                key: 'Gender',
                value: item.gender
              })}
            </Grid>


          </Grid>

        </CardContent>
      </Card>

    </div>
  )

};