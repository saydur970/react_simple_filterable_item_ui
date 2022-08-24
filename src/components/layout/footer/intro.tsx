import { ReactNode, FC } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import { themeColor } from '../../../lib/mui/color';
// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useUITheme } from '../../../hooks/useUITheme';

interface IComp {
  children: ReactNode;
}

const IconItem: FC<IComp> = ({children}) => {
  return (
    <IconButton sx={{marginRight: '0.5rem'}} >
      {children}
    </IconButton>
  )
}

const COMMON_LAYOUT = { justifyContent: { xs: 'center', lg: 'flex-start' } };
const COMMON_LAYOUT_TXT = { textAlign: { xs: 'center', lg: 'left' } };


export const Intro = () => {

  const { isDark, theme } = useUITheme();

  const SOCIAL_ICON_STYLE = {
    fill: isDark ? themeColor.txt_gray_light : '#212B36'
  }

  return (
    <Grid item xs={12} md={12} lg={3} container justifyContent="center"
      // sx={{padding: '0 2rem'}}
    >

      <Grid item container xs={6} lg={8}
        sx={COMMON_LAYOUT}
      >

      <Grid item xs={12} container sx={COMMON_LAYOUT} >

        <Typography variant="h4" 
          sx={{
            ...COMMON_LAYOUT_TXT, 
              color: theme.palette.txt.dark
            }}
          >
          hyperscout
        </Typography>

        <Typography
          sx={{
            color: themeColor.txt_gray_light, fontSize: '1.3rem', 
            marginTop: '2rem', ...COMMON_LAYOUT_TXT
          }} 
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fermentum sed ultricies volutpat rhoncus faucibus sit. 
        </Typography>

      </Grid>

      <Grid item xs={12} container sx={COMMON_LAYOUT} >

        <IconItem>
          <FacebookIcon sx={SOCIAL_ICON_STYLE} />
        </IconItem>

        <IconItem>
          <InstagramIcon sx={SOCIAL_ICON_STYLE} />
        </IconItem>

        <IconItem>
          <LinkedInIcon sx={SOCIAL_ICON_STYLE} />
        </IconItem>

        <IconItem>
          <TwitterIcon sx={SOCIAL_ICON_STYLE} />
        </IconItem>
        
      </Grid>

      </Grid>

    </Grid>
  )
}