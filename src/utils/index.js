export const addNewUserFormControl = [
  {
    name: `firstName`,
    label: `First Name`,
    placeholder: `enter your firstname`,
    type: `input`,
  },
  {
    name: `lastName`,
    label: `Last Name`,
    placeholder: `enter your lastname`,
    type: `input`,
  },
  {
    name: `email`,
    label: `Email`,
    placeholder: `enter your email`,
    type: `email`,
  },
  {
    name: `address`,
    label: `Address`,
    placeholder: `enter your address`,
    type: `input`,
  },
];

export const addNewUserFormInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
};
