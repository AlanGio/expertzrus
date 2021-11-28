import classnames from 'classnames';

import Grid from '@mui/material/Grid';

import { defaultHours } from '../default/initialState';
import HourBox from '../components/HourBox';

import styles from '../styles/Home.module.scss';

const Calendar = ({
  price,
  days,
  clickHourBox,
  changeHourPrice,
}) => {

  return (
    <div className={styles.calendar}>
      <Grid container spacing={2} className={styles.mainTable}>
        <Grid item xs={1} className={styles.verList}>
          {defaultHours.map((hour) => <li key={`item_${hour.name}`}>{hour.name} hs</li>)}
          <li>{defaultHours[defaultHours.length - 1].name + 1} hs</li>
        </Grid>
        <Grid item xs={11} className={styles.horList}>

          {days.map((day, index) => {
            const dayIndex = index;
            return (
              <div
                key={day.name}
                className={classnames(styles.day, {[styles.disabled]: !day.enabled})}
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
            )
          })}

        </Grid>
      </Grid>
    </div>
  )
}

export default Calendar;

