import { FC, ReactNode } from 'react';
import { Grid } from '@mui/material';
import { Typo } from '../../../shared/typography';


interface IComp {
  title: string;
  children: ReactNode
}

export const ItemWrapper: FC<IComp> = ({ title, children }) => {
  return (
    <Grid item xs={12} container >

      <Grid item xs={12} >
        <Typo txt={title} size="1.3rem" />
      </Grid>

      <Grid item xs={12}>
        {children}
      </Grid>

    </Grid>
  )
};