import React from "react";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import { daysOfTheWeek } from "../../default/initialState";

import styles from "./Availability.module.scss";

const Availability = ({ checkDay, changeDayPrice, price }) => (
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
                <Checkbox
                  onChange={(event) => checkDay(index, event.target.checked)}
                  name={day.name}
                  checked={day.enabled}
                />
                <h4>{day.name}</h4>
              </div>
              <div className={styles.changePrice}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="day-price">
                    Hourly Rate for this day
                  </InputLabel>
                  <OutlinedInput
                    id="day-price"
                    onChange={(event) =>
                      changeDayPrice(index, parseInt(event.target.value))
                    }
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
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
);


Availability.propTypes = {
  price: PropTypes.number,
  checkDay: PropTypes.func,
  changeDayPrice: PropTypes.func,
};

Availability.defaultProps = {
  price: 0,
  checkDay: null,
  changeDayPrice: null,
};

export default Availability;
