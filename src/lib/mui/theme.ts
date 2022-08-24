import { createTheme } from '@mui/material/styles';
import { ty_UI_Mode } from '../../types/ui.types';
import { themeColor } from './color';

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

  // interface Palette {
  //   highlight: Palette['primary'];
  // }
  // interface PaletteOptions {
  //   highlight: PaletteOptions['primary'];
  // }


}


export const muiTheme = ({ mode }: ITheme) => {

  const customColor = mode === 'dark' ? '#17181B': '#F7F7F7';

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
        main: themeColor.primary,
        light: '#887be4',
        dark: '#504a91'
        // main: '#9c27b0',
        // light: '#ba68c8',
        // dark: '#7b1fa2'
      },

      custom: {
        // main: mode === 'dark' ? '#17181B': '#F7F7F7',
        main: customColor,
      },

      txt: {
        main : mode === 'dark' ? themeColor.txt_gray_light: themeColor.black,
        dark: mode === 'dark' ? '#fff': '#000',
        light: mode === 'dark' ? '#C4C4C4': '#637381'
      },

      // highlight: {
      //   main: mode === 'dark' ? '#202124': '#202124',
      // }

    },

    components: {

      MuiCard: {
        styleOverrides: {
          root: {
            // backgroundColor: mode === 'dark' ? '#17181B': '#F7F7F7'
            backgroundColor: customColor
          }
        }
      },

      MuiInput: {
        styleOverrides: {
          root: {
            fontSize: '1.3rem'
          }
        }
      },

      MuiTypography: {
        styleOverrides: {
          root: {
            color: mode === 'dark' ? themeColor.txt_gray_light: themeColor.black
          }
        }
      }

    }



  })

}