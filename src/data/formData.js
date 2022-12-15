export const identityForm = [
  {
    id: "firstName",
    type: "text",
    label: "First Name",
    placeholder: " ex : Maria",
  },
  {
    id: "lastName",
    type: "text",
    label: "Last Name",
    placeholder: " ex : Hemingway",
  },
  {
    id: "dateOfBirth",
    type: "date",
    label: "Date of Birth",
    placeholder: "dd/mm/yyyy",
  },
  {
    id: "startDate",
    type: "date",
    label: "Start Date",
    placeholder: "dd/mm/yyyy",
  },
];

export const addressForm = [
  {
    id: "street",
    type: "text",
    label: "Street",
    placeholder: "ex : 107, Robinson Street",
  },
  {
    id: "city",
    type: "text",
    label: "City",
    placeholder: "ex : Orlando",
  },
  {
    id: "state",
    type: "select",
    label: "State",
    options: [
      {
        name: "Alabama",
        abbreviation: "AL",
      },
      {
        name: "Alaska",
        abbreviation: "AK",
      },
      {
        name: "American Samoa",
        abbreviation: "AS",
      },
      {
        name: "Arizona",
        abbreviation: "AZ",
      },
      {
        name: "Arkansas",
        abbreviation: "AR",
      },
      {
        name: "California",
        abbreviation: "CA",
      },
      {
        name: "Colorado",
        abbreviation: "CO",
      },
      {
        name: "Connecticut",
        abbreviation: "CT",
      },
      {
        name: "Delaware",
        abbreviation: "DE",
      },
      {
        name: "District Of Columbia",
        abbreviation: "DC",
      },
      {
        name: "Federated States Of Micronesia",
        abbreviation: "FM",
      },
      {
        name: "Florida",
        abbreviation: "FL",
      },
      {
        name: "Georgia",
        abbreviation: "GA",
      },
      {
        name: "Guam",
        abbreviation: "GU",
      },
      {
        name: "Hawaii",
        abbreviation: "HI",
      },
      {
        name: "Idaho",
        abbreviation: "ID",
      },
      {
        name: "Illinois",
        abbreviation: "IL",
      },
      {
        name: "Indiana",
        abbreviation: "IN",
      },
      {
        name: "Iowa",
        abbreviation: "IA",
      },
      {
        name: "Kansas",
        abbreviation: "KS",
      },
      {
        name: "Kentucky",
        abbreviation: "KY",
      },
      {
        name: "Louisiana",
        abbreviation: "LA",
      },
      {
        name: "Maine",
        abbreviation: "ME",
      },
      {
        name: "Marshall Islands",
        abbreviation: "MH",
      },
      {
        name: "Maryland",
        abbreviation: "MD",
      },
      {
        name: "Massachusetts",
        abbreviation: "MA",
      },
      {
        name: "Michigan",
        abbreviation: "MI",
      },
      {
        name: "Minnesota",
        abbreviation: "MN",
      },
      {
        name: "Mississippi",
        abbreviation: "MS",
      },
      {
        name: "Missouri",
        abbreviation: "MO",
      },
      {
        name: "Montana",
        abbreviation: "MT",
      },
      {
        name: "Nebraska",
        abbreviation: "NE",
      },
      {
        name: "Nevada",
        abbreviation: "NV",
      },
      {
        name: "New Hampshire",
        abbreviation: "NH",
      },
      {
        name: "New Jersey",
        abbreviation: "NJ",
      },
      {
        name: "New Mexico",
        abbreviation: "NM",
      },
      {
        name: "New York",
        abbreviation: "NY",
      },
      {
        name: "North Carolina",
        abbreviation: "NC",
      },
      {
        name: "North Dakota",
        abbreviation: "ND",
      },
      {
        name: "Northern Mariana Islands",
        abbreviation: "MP",
      },
      {
        name: "Ohio",
        abbreviation: "OH",
      },
      {
        name: "Oklahoma",
        abbreviation: "OK",
      },
      {
        name: "Oregon",
        abbreviation: "OR",
      },
      {
        name: "Palau",
        abbreviation: "PW",
      },
      {
        name: "Pennsylvania",
        abbreviation: "PA",
      },
      {
        name: "Puerto Rico",
        abbreviation: "PR",
      },
      {
        name: "Rhode Island",
        abbreviation: "RI",
      },
      {
        name: "South Carolina",
        abbreviation: "SC",
      },
      {
        name: "South Dakota",
        abbreviation: "SD",
      },
      {
        name: "Tennessee",
        abbreviation: "TN",
      },
      {
        name: "Texas",
        abbreviation: "TX",
      },
      {
        name: "Utah",
        abbreviation: "UT",
      },
      {
        name: "Vermont",
        abbreviation: "VT",
      },
      {
        name: "Virgin Islands",
        abbreviation: "VI",
      },
      {
        name: "Virginia",
        abbreviation: "VA",
      },
      {
        name: "Washington",
        abbreviation: "WA",
      },
      {
        name: "West Virginia",
        abbreviation: "WV",
      },
      {
        name: "Wisconsin",
        abbreviation: "WI",
      },
      {
        name: "Wyoming",
        abbreviation: "WY",
      },
    ],
  },
  {
    id: "zipCode",
    type: "number",
    label: "Zip Code",
    placeholder: "ex : 32805",
  },
];

export const departmentForm = [
  {
    id: "department",
    type: "select",
    label: "Department",
    options: [
      { name: "Sales" },
      { name: "Marketing" },
      { name: "Engineering" },
      { name: "Human Resources" },
      { name: "Legal" },
    ],
  },
];

export const allFormData = identityForm
  .concat(departmentForm)
  .concat(addressForm);
