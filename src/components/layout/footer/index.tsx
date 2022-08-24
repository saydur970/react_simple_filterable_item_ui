import { Grid, useTheme } from '@mui/material';
import { CopyRight } from './copyRight';
import { Intro } from './intro';
import { AdditionalLinks } from './links';

export const Footer = () => {

  const theme = useTheme();

  return (
    <Grid container justifyContent="center"
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

      {/* =============== copyright ================ */}
      <CopyRight />




    </Grid>
  )
};