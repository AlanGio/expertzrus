import React from "react";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import styles from "./DefaultPrice.module.scss";

const DefaultPrice = ({ price, changeDefaultPrice }) => (
  <div className={styles.defaultPrice}>
    <Grid container spacing={2}>
      <Grid item sm={1} className={styles.numberContainer}>
        <LooksOneIcon className={styles.itemNumber} />
      </Grid>
      <Grid item sm={11}>
        <Grid item sm={12}>
          <h2>Set your default hourly rate:</h2>
        </Grid>
        <Grid item sm={6} className={styles.priceContainer}>
          <FormControl sx={{ m: 1 }}>
            <InputLabel htmlFor="default-price">
              Default Hourly Rate
            </InputLabel>
            <OutlinedInput
              id="default-price"
              onChange={(event) =>
                changeDefaultPrice(parseInt(event.target.value))
              }
              type="number"
              defaultValue={price}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Default Hourly Rate"
              inputProps={{ min: 1, max: 1000 }}
            />
          </FormControl>
          <small>
            The average hourly rate on our site for your position is:{" "}
            <strong>$35</strong>
          </small>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

DefaultPrice.propTypes = {
  price: PropTypes.number,
  changeDefaultPrice: PropTypes.func,
};

DefaultPrice.defaultProps = {
  price: 0,
  changeDefaultPrice: null,
};

export default DefaultPrice;
