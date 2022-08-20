// modules
import { useMemo } from 'react';
import { Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from '../lib/mui/theme';
// context
import { useUICtx } from '../context/ui.context';
// comp
import { Layout } from './layout';
import { Dashboard } from './dashboard';

export const App = () => {

  const { uiCtx } = useUICtx();

  const theme = useMemo(() => {
    return muiTheme({ mode: uiCtx.mode })
  }, [uiCtx.mode])


  return (
      <ThemeProvider theme={theme}>

        <Paper sx={{
          width: '100%', borderRadius: 0,
          bgcolor: theme.palette.background.default,
        }} >

          <Layout>
            
            <Dashboard />

          </Layout>



        </Paper>

      </ThemeProvider>
  );

}
