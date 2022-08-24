import { FC, ChangeEvent } from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';

interface IComp {
  value: string;
  optionList: string[];
  changeHandler: (val: string) => void;
  isDisable?: boolean;
}

export const InputRadio: FC<IComp> =
  ({ value, optionList, changeHandler, isDisable }) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      changeHandler((event.target as HTMLInputElement).value);
    };
  

    return (
      <Box sx={{ minWidth: 120, marginBottom: '2rem' }}>
        <FormControl fullWidth>

          <RadioGroup
            row
            value={value}
            onChange={handleChange}
          >

            {
              optionList.map(el => (
                <FormControlLabel key={el} value={el}
                  control={<Radio />} label={el} />
              ))
            }

          </RadioGroup>

        </FormControl>
      </Box>
    );
  }
