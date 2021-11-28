export const defPrice = 35;


export const defaultHours = [];
for (let i = 8; i <= 19; i++) {
  defaultHours.push({
    hour: i,
    price: null,
  })
};

const defaultValues = {
  enabled: true,
  price: null,
  hours: defaultHours,
}

export const daysOfTheWeek =  [
	{
		name: "Monday",
		...defaultValues,
  },
  {
		name: "Tuesday",
		...defaultValues,
  },
  {
		name: "Wednesday",
		...defaultValues,
  },
  {
		name: "Thursday",
		...defaultValues,
  },
  {
		name: "Friday",
		...defaultValues,
  },
  {
		name: "Saturday",
    ...defaultValues,
		enabled: false,
  },
  {
		name: "Sunday",
    ...defaultValues,
		enabled: false,
  }
];

export const initialState = {
  price: defPrice,
  days: daysOfTheWeek,
}