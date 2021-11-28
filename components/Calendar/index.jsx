import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";

import { defaultHours } from "../../default/initialState";
import HourBox from "../HourBox";

import styles from "./Calendar.module.scss";

const Calendar = ({ price, days, clickHourBox, changeHourPrice }) => {
  const hours = defaultHours();

  return (
    <div className={styles.calendar}>
      <Grid container spacing={2} className={styles.mainTable}>
        <Grid item xs={1}>
          <ul className={styles.verList}>
            {hours.map((hour) => (
              <li key={`itemcolumn_${hour.name}`}>{hour.name} hs</li>
            ))}
            <li>{hours[hours.length - 1].name + 1} hs</li>
          </ul>
        </Grid>
        <Grid item xs={11} className={styles.horList}>
          {days.map((day, index) => {
            const dayIndex = index;
            return (
              <div
                key={day.name}
                className={classnames(styles.day, {
                  [styles.disabled]: !day.enabled,
                })}
              >
                <ul key={day.name}>
                  {day.hours.map((hour, index) => (
                    <HourBox
                      price={price}
                      key={`${day.name}_${hour.name}`}
                      day={day}
                      dayIndex={dayIndex}
                      hour={hour}
                      hourIndex={index}
                      clickHourBox={clickHourBox}
                      changeHourPrice={changeHourPrice}
                    />
                  ))}
                </ul>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

Calendar.propTypes = {
  price: PropTypes.number,
  days: PropTypes.array.isRequired,
  clickHourBox: PropTypes.func,
  changeHourPrice: PropTypes.func,
};

Calendar.defaultProps = {
  price: 0,
  clickHourBox: null,
  changeHourPrice: null,
};

export default Calendar;
