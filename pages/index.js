import Head from 'next/head'

import Calendar from './calendar';
import DefaultPrice from '../components/DefaultPrice'
import Availability from '../components/Availability'

import styles from '../styles/Home.module.scss'

export default function Home() {
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
        <h1>Load your time price and availability</h1>

        <DefaultPrice />
        <Availability />
        <Calendar />
      </main>

      <footer></footer>
    </div>
  )
}

