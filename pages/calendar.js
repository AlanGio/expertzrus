import Grid from '@mui/material/Grid';

import { defaultHours, daysOfTheWeek } from '../default/defaultDaysData';

import styles from '../styles/Home.module.scss'

export default function Calendar() {
  return (
    <div className={styles.calendar}>
      <Grid container spacing={2} className={styles.mainTable}>
        <Grid item xs={1} className={styles.verList}>
          {Object.entries(defaultHours).map(([key]) => <li>{key} hs</li>)}
        </Grid>
        <Grid item xs={11} className={styles.horList}>
          {daysOfTheWeek.map(day => {
            return (
              <div key={day.name} className={styles.day}>
                <ul key={day.name}>
                  {Object.entries(day.hours).map(([key,value],i) => (
                    <li key={`${day.name}_${key}`} className={styles.hourItem}></li>
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

