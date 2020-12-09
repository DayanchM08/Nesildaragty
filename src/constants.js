export const TEXT = /^\w+$/;
export const AGE = /^[1-9]\d{,2}$/;
export const NAME = /^\w{3,}$/;
export const MALE = 'Male';
export const FEMALE = 'Female';
export const REMOVE_CONFIRM_MESSAGE =
  'Are you sure, you want to remove this member?';

export const CITY_LIST = [
 
];

export const COLOR_LIST = [

];

export const NAME_LIST = [

];

export const fields = {
  name: {
    label: 'Name',
    type: 'text',
    validation: value => NAME.test(value),
  },
  age: {
    label: 'Age',
    type: 'number',
    validation: value => AGE.test(value),
  },
  gender: {
    label: 'Gender',
    type: 'select',
    validation: value => [MALE, FEMALE].includes(value),
  },
  color: {
    label: 'Fav Color',
    type: 'text',
    validation: value => TEXT.test(value),
  },
};
