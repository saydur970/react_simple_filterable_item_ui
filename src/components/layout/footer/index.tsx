import { Grid, useTheme } from '@mui/material';
import { Intro } from './intro';
import { AdditionalLinks } from './links';

export const Footer = () => {

  const theme = useTheme();

  return (
    <Grid container
      sx={{
        backgroundColor: theme.palette.custom.main,
        padding: '4rem',
        paddingTop: '6rem',
        marginTop: '2rem' 
      }}
    >

      <Grid item xs={12} container>

        {/* =========================== hyperscout =========================== */}
        <Intro />

        {/* ================ company, influncer, advertiser ================ */}
        <AdditionalLinks />

      </Grid>

      <Grid item xs={12} container justifyContent="space-between">

        

      </Grid>




    </Grid>
  )
};