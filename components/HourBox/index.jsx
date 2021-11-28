import classnames from "classnames";
import React from "react";
import PropTypes from "prop-types";

import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import styles from "./HourBox.module.scss";

const HourBox = ({
  day,
  dayIndex,
  hour,
  hourIndex,
  price,
  clickHourBox,
  changeHourPrice,
}) => {
  const inheritEnabled = hour.enabled && day.enabled;
  const inheritPrice = hour.price || day.price || price;

  return (
    <li
      className={classnames(styles.hourItem, {
        [styles.disabled]: !day.enabled,
      })}
      style={
        inheritEnabled
          ? { backgroundColor: `rgba(204, 229, 255, ${inheritPrice / 60})` }
          : {}
      }
    >
      <div
        className={styles.available}
        onClick={() => day.enabled && clickHourBox(dayIndex, hourIndex)}
      >
        <Checkbox checked={inheritEnabled} disabled={!day.enabled} />
      </div>
      <div className={styles.price}>
        <FormControl fullWidth sx={{ m: 2 }}>
          <InputLabel htmlFor="hour-price">Hourly Rate</InputLabel>
          <OutlinedInput
            id="hour-price"
            onChange={(event) =>
              changeHourPrice(dayIndex, hourIndex, parseInt(event.target.value))
            }
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Hourly Rate"
            size="small"
            type="number"
            inputProps={{ min: 10, max: 1000 }}
            value={inheritPrice}
            disabled={!inheritEnabled}
          />
        </FormControl>
      </div>
    </li>
  );
};

HourBox.propTypes = {
  day: PropTypes.object.isRequired,
  dayIndex: PropTypes.number.isRequired,
  hour: PropTypes.object.isRequired,
  hourIndex: PropTypes.number.isRequired,
  price: PropTypes.number,
  clickHourBox: PropTypes.func,
  changeHourPrice: PropTypes.func,
};

HourBox.defaultProps = {
  price: 0,
  clickHourBox: null,
  changeHourPrice: null,
};

export default HourBox;
