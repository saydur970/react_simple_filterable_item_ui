import { Grid, Typography, Link } from '@mui/material';
import { themeColor } from '../../../lib/mui/color';
import { Typo } from '../../shared/typography';

export const CopyRight = () => {
  return (
    <Grid item xs={11} container alignItems="center"
      sx={{ 
        marginTop: '3rem',
        justifyContent: { xs: 'center', sm: 'space-between' }
      }}
    >

      <Grid item xs={12} sm={6} container justifyContent="flex-start"
        sx={{display: { xs: 'none', sm: 'flex' }}}
      >
        <Typography sx={{ fontSize: '1.3rem' }} >
          &copy; Hyperscout 2022. &nbsp;
        </Typography>
        <Typo txt="All rights reserved" color={themeColor.txt_gray_light} />
      </Grid>

      <Grid item xs={12} sm={6} container
        sx={{ justifyContent: { xs: 'center', sm: 'flex-end' } }}
      >

        {
          ['Tearms & Condition', 'Privacy', 'Sitemap']
            .map(el => (
              <Link key={el} href="" underline="hover"
                sx={{
                  color: themeColor.txt_gray_light, fontSize: '1.3rem',
                  marginRight: '1rem'
                }}
              >
                {el}
              </Link>
            ))
        }

      </Grid>

      <Grid item xs={12} sm={6} container justifyContent="center"
        sx={{display: { xs: 'flex', sm: 'none' }, marginTop: '1.8rem' }}
      >
        <Typography sx={{ fontSize: '1.3rem' }} >
          &copy; Hyperscout 2022. &nbsp;
        </Typography>
        <Typo txt="All rights reserved" color={themeColor.txt_gray_light} />
      </Grid>


    </Grid>
  )
}