import { Fragment, useState } from 'react';
import { AppBar, Grid, Box, IconButton, Typography, Menu, Container, 
  Button, Tooltip, MenuItem} from '@mui/material';
import { getURLPath } from '../../../utils/getUrlPath';
import { themeColor } from '../../../lib/mui/color';
// context
// import { useUICtx } from '../../../context/ui.context';
// comp
import { Typo } from '../../shared/typography';
// hooks
import { useUITheme } from '../../../hooks/useUITheme';
// icons
import MenuIcon from '@mui/icons-material/Menu';
// import AdbIcon from '@mui/icons-material/Adb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import { UIModeToggle } from './uiModeToggle';


type TPageItem = {name: string; url: string};

const PAGES: TPageItem[] = [
  { name: 'Dashboard', url: '/' },
  { name: 'Campaign', url: '/campaign' },
  { name: 'Hypesocial', url: '/hypesocial' },
  { name: 'Insights', url: '/insights' }
];

const isPathActive = ({url}: TPageItem): boolean => {
  const currentPath = getURLPath();
  return url === currentPath;
}

export const Header = () => {

  const [isUIModeMenuOpen, setIsUIModeMenuOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  // const { setUICtx } = useUICtx();
  const { theme, isDark } = useUITheme();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const bgModeHandler = () => {
    // setUICtx({
    //   key: 'mode', value: true
    // })
    setIsUIModeMenuOpen(true);
  }

  return (
    <Fragment>

    <AppBar position="static"
      sx={{ backgroundColor: theme.palette.custom.main, marginBottom: '2rem' }}
    >

      <Container maxWidth="xl">

        <Grid container>

          {/* ====================== icon with company name ====================== */}
          <Grid item xs={5} sm={3} md={3} container alignItems="center"
            sx={{justifyContent: { xs: 'flex-start', sm: 'center' }}}
          >

            <AlignHorizontalCenterIcon sx={{ 
              display: { xs: 'flex', color: theme.palette.txt.main }, mr: 1 
              }} 
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: theme.palette.txt.main,
                textDecoration: 'none',
              }}
            >
              HYPERSCOUT
            </Typography>
            
          </Grid>


          {/* ====================== pages names ====================== */}
          <Grid item sm={5} md={6} container 
            justifyContent="center" alignItems="center"
            sx={{display: { xs: 'none', sm: 'flex' }}}
          >
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, marginLeft: '5rem' }}>
              {PAGES.map((page) => (
                <Button
                  size="large"
                  key={page.url}
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    my: 2, display: 'block',
                    backgroundColor: isPathActive(page) ? '#202124' : 'inherit',
                    color: isPathActive(page) ? themeColor.white: 
                    theme.palette.txt.light
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Grid>

          {/* ====================== menu items ====================== */}
          <Grid item xs={7} sm={4} md={3}  container alignItems="center"
            sx={{justifyContent: { xs: 'flex-end', sm: 'flex-end', md: 'center' }}}
          >

            <Box>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <NotificationsIcon />
              </IconButton>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={bgModeHandler}
              // color="inherit"
              >
                {
                  isDark ?
                  <DarkModeIcon /> :
                  <WbSunnyIcon />
                }
              </IconButton>

              <Typo txt="Hi, Rakib" size="1.2rem" 
                Sx={{
                  display: { xs: 'none', sm: 'inline-block' },
                  paddingRight: { xs: 0, sm: '1rem' },
                }} 
              />

              <Tooltip title="user menu">
                <IconButton
                  sx={{ padding: { xs: '1rem 0', sm: 0 } }}
                >
                  <img alt="Remy Sharp" src="/images/users/1.jpg"
                    style={{
                      width: '4rem',
                      height: '4rem',
                      borderRadius: '0.2rem'
                    }}
                  />
                </IconButton>
              </Tooltip>

            </Box>

            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                }}
              >
                {PAGES.map((page) => (
                  <MenuItem key={page.url} onClick={handleCloseNavMenu}
                    sx={{backgroundColor: isPathActive(page) ? 
                    '#202124' : 'inherit'}}
                  >

                    <Typography textAlign="center"
                      sx={{
                        color: isPathActive(page) ? 
                        themeColor.white: theme.palette.txt.light
                      }}
                    >
                      {page.name}
                    </Typography>

                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>


        </Grid>

      </Container>

    </AppBar>

      <UIModeToggle isOpen={isUIModeMenuOpen} setIsOpen={setIsUIModeMenuOpen}  />

    </Fragment>

  );
};