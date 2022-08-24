// module
import { FC } from 'react';
import { Grid } from '@mui/material';
import classes from './profileItem.module.css';
// comp
import { ty_dataItem } from '../../../dataset/dataList';
import { ProfileItem } from './profileItem';
// types
import { ty_Fetch_StatusT } from '../../../types/general.types';
import { Typo } from '../../shared/typography';
import { Progress } from '../../shared/process';

interface IComp {
  list: ty_dataItem[];
  status: ty_Fetch_StatusT
}

export const ProfileList: FC<IComp> = ({ list, status }) => {




  if(status === 'error') {
    return (
      <Grid item xs={12} sx={{minHeight: '50vh'}} >
        <Typo variant="h4" txt="Error" align="center" Sx={{marginTop: '10rem'}} />
      </Grid>
    )
  }

  if(status === 'loading') {
    return <Progress />
  }

  if(list.length === 0) {
    return (
      <Grid item xs={12} sx={{minHeight: '50vh'}} >
        <Typo variant="h4" txt="No Data" align="center" Sx={{marginTop: '10rem'}} />
      </Grid>
    )
  }


  return (
    <div className={classes.mainParent}>

      {
        list.map(el => <ProfileItem key={el.id} item={el} />)
      }

    </div>
  )

};