import Head from 'next/head'

import Grid from '@mui/material/Grid';

import styles from '../styles/Home.module.scss'


const days = 7;
const hours = 12;
const defaultPrice = 15;
const defaultHours = {
  8: {price: null},
  9: {price: null},
  10: {price: null},
  11: {price: null},
  12: {price: null},
  13: {price: null},
  14: {price: null},
  15: {price: null},
  16: {price: null},
  17: {price: null},
  18: {price: null},
  19: {price: null},
  20: {price: null},
};

const daysOfTheWeek =  [
	{
		name: "Monday",
		enabled: true,
		price: defaultPrice,
    hours: defaultHours,
  },
  {
		name: "Tuesday",
		enabled: true,
		price: defaultPrice,
    hours: defaultHours,
  },
  {
		name: "Wednesday",
		enabled: true,
		price: defaultPrice,
    hours: defaultHours,
  },
  {
		name: "Thursday",
		enabled: true,
		price: defaultPrice,
    hours: defaultHours,
  },
  {
		name: "Friday",
		enabled: true,
		price: defaultPrice,
    hours: defaultHours,
  },
  {
		name: "Saturday",
		enabled: false,
		price: defaultPrice,
    hours: defaultHours,
  },
  {
		name: "Sunday",
		enabled: false,
		price: defaultPrice,
    hours: defaultHours,
  }
]
export default function Home({ allPostsData }) {
  return (
    <div className="container">

      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>ExpertzRUs.com. Load your time availability and prices.</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main className={styles.home}>

      <Grid container spacing={2} className={styles.mainTable}>
        <Grid item xs={1}>
          -
        </Grid>
        <Grid item xs={11} className={styles.horList}>
          {daysOfTheWeek.map(day => <h2>{day.name}</h2>)}
        </Grid>
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

      </main>

      <footer></footer>
    </div>
  )
}

