import { createTheme } from '@mui/material/styles';
import { ty_UI_Mode } from '../../types/ui.types';

interface ITheme {
  mode: ty_UI_Mode
}

declare module '@mui/material/styles' {

  interface Palette {
    custom: Palette['primary'];
  }
  interface PaletteOptions {
    custom: PaletteOptions['primary'];
  }

  interface Palette {
    txt: Palette['primary'];
  }
  interface PaletteOptions {
    txt: PaletteOptions['primary'];
  }


}


export const muiTheme = ({ mode }: ITheme) => {

  // const currentColor = mode === 'dark' ? '#17181B': '#F7F7F7';

  return createTheme({

    palette: {

      // mode of the theme
      mode: mode,

      // backgrouond 
      background: {
        // default: mode === 'dark'? '#050405': '#C4C4C4'
        default: mode === 'dark'? '#000': '#fff'
      },

      // primary color
      primary: {
        main: '#564FB1',
        light: '#887be4',
        dark: '#504a91'
        // main: '#9c27b0',
        // light: '#ba68c8',
        // dark: '#7b1fa2'
      },

      custom: {
        main: mode === 'dark' ? '#17181B': '#F7F7F7'
      },

      txt: {
        main: mode === 'dark' ? '#fff': '#000'
      }

    },

    components: {

      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? '#17181B': '#F7F7F7'
          }
        }
      },

      MuiInput: {
        styleOverrides: {
          root: {
            fontSize: '1.3rem'
          }
        }
      }

    }



  })

}