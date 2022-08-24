import { FC } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IComp {
  value: string|null;
  optionList: string[];
  changeHandler: (val: string) => void;
  isDisable?: boolean;
}

export const InputSelect: FC<IComp> = 
({ value, optionList, changeHandler, isDisable }) => {

  const handleChange = (event: SelectChangeEvent) => {
    changeHandler(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, marginBottom: '2rem' }}>
      <FormControl fullWidth>
        <Select
          displayEmpty
          value={value||''}
          label="Age"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={{ keepMounted: true, disablePortal: true }}
          disabled={isDisable? true: false}
        >
            
          <MenuItem value="">
            <em>Select Options</em>
          </MenuItem>

          {
            optionList.map(el => (
              <MenuItem key={el} value={el}> {el} </MenuItem>
            ))
          }

        </Select>
      </FormControl>
    </Box>
  );
}
