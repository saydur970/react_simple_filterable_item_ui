import { useMemo } from 'react';
import { Typography, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { muiTheme } from '../lib/mui/theme';

export const App = () => {

  const theme = useMemo(() => {
    return muiTheme({ mode: 'dark' })
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          width: '100%',
          bgcolor: 'background.default',
          borderRadius: 0
        }}
      >

        <Typography>
          card
        </Typography>
        <Typography>
          card
        </Typography>

      </Paper>
    </ThemeProvider>
  );
}
