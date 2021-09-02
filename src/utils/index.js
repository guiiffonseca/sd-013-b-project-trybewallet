export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
  const MIN_LENGTH = 6;
  return password.length >= MIN_LENGTH;
}

/*
Referencia:
https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
*/
