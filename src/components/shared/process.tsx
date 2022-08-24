import { FC } from 'react';
import {CircularProgress, Box} from '@mui/material';

interface IComp {
  size?: string;
  height?: number;
}

export const Progress: FC<IComp> = ({size, height}) => {

  const sz = size || '15rem';
  let ht = '60vh';
  if(height) {
    ht = `${height}vh`
  }

  return (
    <Box sx={{ display: 'flex', height: ht, width: '100%',
      justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress size={sz} thickness={2} color="primary" />
    </Box>
  );
};