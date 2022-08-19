import { createTheme } from '@mui/material';

interface ITheme {
  mode: 'dark'| 'light'
}

export const muiTheme = ({ mode }: ITheme) => {

  return createTheme({
    palette: {

      mode: mode,

      primary: {
        main: '#9c27b0',
        light: '#ba68c8',
        dark: '#7b1fa2'
      }
    }
  })

}