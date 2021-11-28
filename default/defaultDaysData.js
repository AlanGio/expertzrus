const defPrice = 15;

export const defaultHours = {
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

export const daysOfTheWeek =  [
	{
		name: "Monday",
		enabled: true,
		price: defPrice,
    hours: defaultHours,
  },
  {
		name: "Tuesday",
		enabled: true,
		price: defPrice,
    hours: defaultHours,
  },
  {
		name: "Wednesday",
		enabled: true,
		price: defPrice,
    hours: defaultHours,
  },
  {
		name: "Thursday",
		enabled: true,
		price: defPrice,
    hours: defaultHours,
  },
  {
		name: "Friday",
		enabled: true,
		price: defPrice,
    hours: defaultHours,
  },
  {
		name: "Saturday",
		enabled: false,
		price: defPrice,
    hours: defaultHours,
  },
  {
		name: "Sunday",
		enabled: false,
		price: defPrice,
    hours: defaultHours,
  }
]