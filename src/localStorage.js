export const setItem = (name, data) => {
  localStorage.setItem(name, data);
};

export const getItem = (name) => localStorage.getItem(name);
