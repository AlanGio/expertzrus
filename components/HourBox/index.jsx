import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import styles from './HourBox.module.scss'

const HourBox = ({
  day,
  dayIndex,
  hour,
  hourIndex,
  price,
  clickHourBox,
  changeHourPrice,
}) => {

  const inheritEnabled = hour.enabled ?? day.enabled;
  const inheritPrice = hour.price ?? day.price ?? price;

  return (
    <li
      className={styles.hourItem}
      style={inheritEnabled ? {'backgroundColor': `rgba(90, 138, 170, ${(day.price || price) / 60})`} : {}}
    >
      <div className={styles.available} onClick={() => clickHourBox(dayIndex, hourIndex)}>
        <Checkbox
          checked={inheritEnabled}
        />
      </div>

      <div className={styles.price}>
        <FormControl fullWidth sx={{ m: 2 }}>
        <InputLabel htmlFor="hour-price">Hourly Rate</InputLabel>
        <OutlinedInput
          id="hour-price"
          onChange={(event) => changeHourPrice(dayIndex, hourIndex, event.target.value)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Hourly Rate"
          size="small"
          type="number"
          inputProps={{ min: 1, max: 1000 }}
          value={inheritPrice}
          disabled={!inheritEnabled}
        />
      </FormControl>
      </div>

    </li>
  )
};

export default HourBox;
