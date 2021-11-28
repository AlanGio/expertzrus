const defPrice = 35;

export const defaultHours = () => {
  const hours = [];
  for (let i = 8; i <= 19; i++) {
    hours.push({
      name: i,
      enabled: true,
      price: null,
    });
  }
  return hours;
};

const defaultValues = (enabled = true) => {
  const hours = defaultHours();
  return {
    hours,
    enabled,
    price: null,
  };
};

export const daysOfTheWeek = [
  {
    name: "Monday",
    ...defaultValues(),
  },
  {
    name: "Tuesday",
    ...defaultValues(),
  },
  {
    name: "Wednesday",
    ...defaultValues(),
  },
  {
    name: "Thursday",
    ...defaultValues(),
  },
  {
    name: "Friday",
    ...defaultValues(),
  },
  {
    name: "Saturday",
    ...defaultValues(false),
  },
  {
    name: "Sunday",
    ...defaultValues(false),
  },
];

export const initialState = {
  price: defPrice,
  days: daysOfTheWeek,
};
