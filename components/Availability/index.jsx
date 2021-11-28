import Grid from '@mui/material/Grid';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Checkbox from '@mui/material/Checkbox';

import { daysOfTheWeek } from '../../default/defaultDaysData';

import styles from './Availability.module.scss'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Availability = () => {
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
            {daysOfTheWeek.map(day => (
              <div className={styles.dayItem}>
                <h4>{day.name}</h4>
                <Checkbox {...label} defaultChecked={day.enabled} />
              </div>
            ))}
          </Grid>

        </Grid>
      </Grid>
    </div>
  )
};

export default Availability;
