const defPrice = 35;

export const defaultHours = [];
for (let i = 8; i <= 19; i++) {
  defaultHours.push({
    name: i,
    enabled: true,
    price: null,
  })
};

export const defaultHoursDisabled = [];
for (let i = 8; i <= 19; i++) {
  defaultHoursDisabled.push({
    name: i,
    enabled: false,
    price: null,
  })
};

const defaultValues = {
  hours: defaultHours,
  enabled: true,
  price: null,
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
    hours : defaultHoursDisabled,
		enabled: false,
  },
  {
		name: "Sunday",
    ...defaultValues,
    hours : defaultHoursDisabled,
		enabled: false,
  }
];

export const initialState = {
  price: defPrice,
  days: daysOfTheWeek,
}