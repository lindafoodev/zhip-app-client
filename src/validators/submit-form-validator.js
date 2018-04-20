export const required = value =>  
  value !== undefined ? undefined: 'Required';

export const notEmpty = value => 
  value.trim() !== '' ? undefined : 'Cannot be empty';

export const correctCharLength = value =>
  value.length === 24 ? undefined : 'Must be 24 characters long';

export const isTrimmed = value =>
value.trim() === value ? undefined : 'Cannot start or end with whitespace';

export const length = length => value => {
  if (length.min && value.length < length.min) {
      return `Must be at least ${length.min} characters long`;
  }
  if (length.max && value.length > length.max) {
      return `Must be at most ${length.max} characters long`;
  }
};

export const characterType = value => {
  const makeInteger = parseInt(value, 10);
  if((isNaN(makeInteger))){
    return 'This field only takes numbers'
  }
  else {
    return undefined
  }
}

export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';