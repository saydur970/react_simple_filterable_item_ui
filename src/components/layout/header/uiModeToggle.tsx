import { FC, Dispatch, SetStateAction } from 'react';
import {Card, ListItemText, List, ListItem, ListItemButton, ListItemIcon }
from '@mui/material';
import { Backdrop } from '../../shared/model/backdrop'
// icons
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { themeColor } from '../../../lib/mui/color';
import { useUICtx } from '../../../context/ui.context';
import { useUITheme } from '../../../hooks/useUITheme';

interface IComp {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// const ITEM_STYLE = {marginBottom: '0.5rem', color: themeColor.txt_gray_light};
const ICON_BTN_STYLE = { minWidth: '3rem' };
const ICON_STYLE = { fill: themeColor.txt_gray_light };

export const UIModeToggle: FC<IComp> = ({ isOpen, setIsOpen }) => {


  const { setUICtx } = useUICtx();
  const { theme, isDark } = useUITheme();

  const closeHandler = () => {
    setIsOpen(false);
  }

  const lightHandler = () => {
    setUICtx({
      key: 'mode', value: 'light'
    })
    closeHandler();
  }

  const darkHandler = () => {
    setUICtx({
      key: 'mode', value: 'dark'
    })
    closeHandler();
  }

  if (!isOpen) return null;

  return (
    <Backdrop close={closeHandler}>

      <div style={{ position: 'absolute', top: '15%', right: '5%' }}>


        <Card sx={{ padding: '1rem', width: '20rem' }}>

          <List>

            <ListItem disablePadding
              sx={{ backgroundColor: isDark ? 'transparent' : 
              theme.palette.highlight.main }}
            >
              <ListItemButton onClick={lightHandler} >
                <ListItemIcon sx={ICON_BTN_STYLE} >
                  <WbSunnyIcon sx={ICON_STYLE} />
                </ListItemIcon>
                <ListItemText primary="Light" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding
              sx={{ backgroundColor: isDark ? theme.palette.highlight.main :
                'transparent'
              }}
            >
              <ListItemButton onClick={darkHandler}>
                <ListItemIcon sx={ICON_BTN_STYLE} >
                  <DarkModeIcon sx={ICON_STYLE} />
                </ListItemIcon>
                <ListItemText primary="Dark" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={ICON_BTN_STYLE} >
                  <DisplaySettingsIcon sx={ICON_STYLE} />
                </ListItemIcon>
                <ListItemText primary="System" />
              </ListItemButton>
            </ListItem>

          </List>



        </Card>

      </div>

    </Backdrop>
  )

};