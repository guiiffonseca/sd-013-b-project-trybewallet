const loginInputChange = (event) => {
  const { type, value } = event.target;
  const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
  const buttonId = 'button-login';
  const six = 6;
  if (type === 'email' && emailPattern.test(value)) {
    document.getElementById(buttonId).disabled = false;
  } else {
    document.getElementById(buttonId).disabled = true;
  }
  if (type === 'text' && value.length >= six) {
    document.getElementById(buttonId).disabled = false;
  } else {
    document.getElementById(buttonId).disabled = true;
  }
};

export default loginInputChange;
