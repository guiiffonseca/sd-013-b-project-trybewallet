import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

const renderWithRedux = (
  component,
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store,
});

export default renderWithRedux;
