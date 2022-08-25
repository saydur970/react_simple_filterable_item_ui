import { FC } from 'react';
import { Box, Slider } from '@mui/material';


interface IComp {
  value: number;
  changeHandler: (val: number) => void;
}

const marks = [
  {
    value: 1,
    label: '1k',
  },
  {
    value: 10,
    label: '100k',
  },
  {
    value: 25,
    label: '250k',
  },
  {
    value: 50,
    label: '500k',
  },
  {
    value: 80,
    label: '800k',
  },
  {
    value: 100,
    label: '1000k',
  }
];

const valueLabelFormat = (value: number) => {
  return `${value * 10}K`;
}

export const InputRange: FC<IComp> = ({ value, changeHandler }) => {

  // console.log(value)

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      changeHandler(newValue)
    }
  };

  return (
    <Box sx={{ minWidth: 120, width: '95%', margin: '2rem auto' }}>
      <Slider
        aria-label="Always visible"
        value={value}
        onChange={handleChange}
        valueLabelFormat={valueLabelFormat}
        step={1}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  );
}
