import React, { useState } from "react";

import Head from "next/head";

import Calendar from "../components/Calendar";
import DefaultPrice from "../components/DefaultPrice";
import Availability from "../components/Availability";

import { initialState, defaultHours } from "../default/initialState";

const Home = () => {
  const [data, setData] = useState(initialState);

  const handleChangeDefaultPrice = (value) => {
    const newData = { ...data };
    newData.price = value;
    setData(newData);
  };

  const handleCheckDay = (index, check) => {
    const newData = { ...data };
    newData.days[index].enabled = check;
    setData(newData);
  };

  const handleChangeDayPrice = (index, value) => {
    const newData = { ...data };
    newData.days[index].price = value;
    setData(newData);
  };

  const handleClickBox = (dayIndex, hourIndex) => {
    const newData = { ...data };
    newData.days[dayIndex].hours[hourIndex].enabled =
      !newData.days[dayIndex].hours[hourIndex].enabled;
    setData(newData);
  };

  const handleChangeHourPrice = (dayIndex, hourIndex, value) => {
    const newData = { ...data };
    const price = newData.days[dayIndex].price || newData.price;

    console.log(value, price);
    newData.days[dayIndex].hours[hourIndex].price =
      value !== price ? value : null;
    setData(newData);
  };

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

      <main>
        <h1>Load your time price and availability</h1>

        <DefaultPrice
          changeDefaultPrice={handleChangeDefaultPrice}
          price={data.price}
        />
        <Availability
          checkDay={handleCheckDay}
          changeDayPrice={handleChangeDayPrice}
          price={data.price}
        />
        <Calendar
          price={data.price}
          days={data.days}
          hours={defaultHours}
          clickHourBox={handleClickBox}
          changeHourPrice={handleChangeHourPrice}
        />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
