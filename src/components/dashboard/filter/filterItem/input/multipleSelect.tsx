import { FC } from 'react';
import {Box, InputLabel} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface IComp {
  value: string[];
  optionList: string[];
  changeHandler: (val: string) => void;
  isDisable?: boolean;
  disableTxt?: string;
}

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };


// const getStyles = (name: string, personName: string[], theme: Theme) => {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }



export const InputSelectMultiple: FC<IComp> =
  ({ value, optionList, changeHandler, isDisable, disableTxt }) => {


    const handleChange = (itemValue: string) => {
      changeHandler(itemValue);
    };


    return (
      <Box sx={{ minWidth: 120, marginBottom: '2rem' }}>
        <FormControl fullWidth>

          {
            isDisable &&
            <InputLabel id="demo-simple-select-label">
              {disableTxt || 'disabled'}
            </InputLabel>
          }


          <Select
            multiple
            value={value}
            // onChange={handleChange}
            displayEmpty
            label="Age"
            inputProps={{ 'aria-label': 'Without label' }}
            MenuProps={{ keepMounted: true, disablePortal: true }}
            disabled={isDisable? true: false}
          >

            {
              optionList.map(el => (
                <MenuItem key={el} value={el}
                  onClick={() => handleChange(el)}
                // style={getStyles(name, personName, theme)}
                >
                  {el}
                </MenuItem>
              ))
            }

          </Select>
        </FormControl>
      </Box>
    );
  }
