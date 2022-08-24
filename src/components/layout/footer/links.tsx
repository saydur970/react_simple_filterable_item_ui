import { FC } from 'react';
import { Grid, Link } from '@mui/material';
import { Typo } from '../../shared/typography';
import { themeColor } from '../../../lib/mui/color';
import { useUITheme } from '../../../hooks/useUITheme';

interface IComp {
  list: string[];
  title: string;
}

const ButtonListRender: FC<IComp> = ({ list, title }) => {

  const { theme } = useUITheme();

  return (
    <Grid item xs={12} container justifyContent="center" >

      <Grid item xs={8} sm={6} lg={8} container>

        <Grid item xs={12}>
          <Typo variant="h4" txt={title} color={theme.palette.txt.dark} />
        </Grid>

        <Grid item xs={12} container>
          {
            list.map(el => (
              <Grid key={el} item xs={12} sx={{margin: '0.5rem 0'}} >
                <Link href="" underline="hover"
                   sx={{ color: themeColor.txt_gray_light, fontSize: '1.3rem'}}
                >
                  {el}
                </Link>
              </Grid>
            ))
          }
        </Grid>


      </Grid>

    </Grid>
  )

}


export const AdditionalLinks = () => {

  const companyList = [
    'About Us', 'Carrers', 'Case Study', 'Blog', 'Contact Us'
  ];

  const influncerItemList = [
   'Join as Influencer', 'HypeSocial'
  ]

  const advertiserItemList = [
    'Join as Advertiser', 'Hypelink'
   ]

  return (
    <Grid item xs={12} lg={9} container
      sx={{ marginTop: '4rem' }}
    >

      {/* --------- company --------- */}
      <Grid item xs={6} sm={4}>
        <ButtonListRender title="Company" list={companyList} />
      </Grid>

      {/* ---------------------- influncer, advertiser ---------------------- */}
      <Grid item xs={6} sm={8} container >

        {/* --------- influncer --------- */}
        <Grid item xs={12} sm={6} >
          <ButtonListRender title="influncer" list={influncerItemList} />
        </Grid>

        {/* --------- advertiser --------- */}
        <Grid item xs={12} sm={6}
          sx={{marginTop: { xs: '2rem', sm: 0 }}}
        >
        <ButtonListRender title="advertiser" list={advertiserItemList} />
        </Grid>

      </Grid>

    </Grid>
  )
};