import { FC } from 'react';
import { SxProps, Theme, Typography } from '@mui/material';

interface ITypo {
  txt: string | number;
  color?: string;
  size?: string;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  margin?: string;
  dotted?: boolean,
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1',
  weight?: number;
  Sx?: SxProps<Theme> 
}

export const Typo: FC<ITypo> = ({ txt, size, align, margin, variant, color,
  dotted, weight, Sx }) => {

  const al = align || 'left';
  const mg = '0 0 1rem 0';
  let isWrap = false;
  if (dotted === true) {
    isWrap = true;
  }

  let additionalStyle = {
    ...(size && { fontSize: size }),
    ...(weight && { fontWeight: weight }),
    margin: margin ? margin : mg,
  }

  if (!variant || variant === 'body1') {

    return (
      <Typography variant="body1" align={al}
        noWrap={isWrap} sx={{fontSize: '1.4rem', ...additionalStyle, ...Sx}}
      >
        {txt}
      </Typography>
    )

  }

  return (
    <Typography variant={variant} align={al}
      noWrap={isWrap} sx={{...additionalStyle, ...Sx}}
      >
      {txt}
    </Typography>
  )
}



  // // define sizes
  // if (size) {
  //   sz = size
  // } else {
  //   switch (variant) {
  //     case 'body1':
  //       sz = '1.4rem';
  //       break;
  //     case 'h1':
  //       sz = '6rem';
  //       break;
  //     case 'h2':
  //       sz = '3.75rem'
  //       break;
  //     case 'h3':
  //       sz = '3rem'
  //       break;
  //     case 'h4':
  //       sz = '1.5rem'
  //       break;
  //     case 'h5':
  //       sz = '1.2rem'
  //       break;
  //     default:
  //       sz = '1.5rem'
  //   }

  // }