import React from 'react';

import Grid from '@mui/material/Grid';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import { daysOfTheWeek } from '../../default/initialState';

import styles from './Availability.module.scss'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Availability = ({
  checkDay,
  changeDayPrice,
  price,
}) => {
  return (
    <div className={styles.availability}>

      <Grid container spacing={2}>
        <Grid item sm={1} className={styles.numberContainer}>
          <LooksTwoIcon className={styles.itemNumber} />
        </Grid>
        <Grid item sm={11}>

          <Grid item sm={12}>
            <h2>Check your available days:</h2>
          </Grid>
          <Grid item sm={12} className={styles.daysOfTheWeek}>
            {daysOfTheWeek.map((day, index) => (
              <div className={styles.dayItem} key={day.name}>

                <div className={styles.checkName}>
                  <h4>{day.name}</h4>
                  <Checkbox
                    {...label}
                    
                    onChange={(event) => checkDay(index, event.target.checked)}
                    name={day.name}
                    checked={day.enabled}
                  />
                </div>
                <div className={styles.checkName}>
                  <FormControl fullWidth sx={{ m: 2 }}>
                    <InputLabel htmlFor="day-price">Hourly Rate for this day</InputLabel>
                    <OutlinedInput
                      id="day-price"
                      onChange={(event) => changeDayPrice(index, event.target.value)}
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      label="Hourly Rate for this day"
                      size="small"
                      type="number"
                      inputProps={{ min: 1, max: 1000 }}
                      value={day.price || price}
                      disabled={!day.enabled}
                    />
                  </FormControl>
                </div>
              </div>
            ))}
          </Grid>

        </Grid>
      </Grid>
    </div>
  )
};

export default Availability;
