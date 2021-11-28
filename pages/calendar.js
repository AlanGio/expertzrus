import classnames from 'classnames';

import Grid from '@mui/material/Grid';

import styles from '../styles/Home.module.scss';
import { defaultHours } from '../default/initialState';


const Calendar = ({
  price,
  days,
}) => {
  return (
    <div className={styles.calendar}>
      <Grid container spacing={2} className={styles.mainTable}>
        <Grid item xs={1} className={styles.verList}>
          {defaultHours.map((hour) => <li key={`item_${hour.hour}`}>{hour.hour} hs</li>)}
          <li>{defaultHours[defaultHours.length - 1].hour + 1} hs</li>
        </Grid>
        <Grid item xs={11} className={styles.horList}>

          {days.map(day => {
            return (
              <div
                key={day.name}
                className={classnames(styles.day, {[styles.disabled]: !day.enabled})}
              >
                <ul key={day.name}>
                  {day.hours.map((hour) => (
                    <li
                      key={`${day.name}_${hour.hour}`}
                      className={styles.hourItem}
                      style={day.enabled ? {'backgroundColor': `rgba(90, 138, 170, ${(day.price || price) / 60})`} : {}}
                    >
                      {day.price || price}
                    </li>
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

