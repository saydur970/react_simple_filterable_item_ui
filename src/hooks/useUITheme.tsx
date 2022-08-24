import { useTheme } from '@mui/material';

export const useUITheme = () => {

  const theme = useTheme();

  return {
    theme,
    isDark: theme.palette.mode === 'dark'
  }

};