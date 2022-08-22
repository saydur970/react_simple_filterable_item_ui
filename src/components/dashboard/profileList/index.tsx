// module
import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import classes from './profileItem.module.css';
// comp
import { ty_dataItem } from '../../../dataset/dataList';
import { ProfileItem } from './profileItem';
// types
import { ty_Fetch_StatusT } from '../../../types/general.types';

interface IComp {
  list: ty_dataItem[];
  status: ty_Fetch_StatusT
}

export const ProfileList: FC<IComp> = ({ list, status }) => {

  if(status === 'error') {
    return (
      <h1> error </h1>
    )
  }

  if(status === 'loading') {
    return <h1> loading.... </h1>
  }

  if(list.length === 0) {
    return <h1> not data </h1>
  }

  return (
    <div className={classes.mainParent}>

      {
        list.map(el => <ProfileItem key={el.id} item={el} />)
      }

    </div>
  )

};