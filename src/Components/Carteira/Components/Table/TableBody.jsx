import React from 'react';
import PropTypes from 'prop-types';
import Td from './Td';

export default function TableBody({ expenses, hadlerClick }) {
  function removeName(name) {
    const campo = name.split('/');
    return campo[0];
  }
  return (
    <>
      {
        expenses.map((
          { currency, description, tag, method, value, exchangeRates, id },
        ) => (
          <tr key={ id } id={ id }>
            <Td name={ description } />
            <Td name={ tag } />
            <Td name={ method } />
            <Td name={ value } />
            <Td name={ removeName(exchangeRates[currency].name) } />
            <Td name={ parseFloat(exchangeRates[currency].ask).toFixed(2) } />
            <Td
              name={ parseFloat(
                exchangeRates[currency].ask * value,
              ).toFixed(2) }
            />
            <Td name="Real" />
            <td className="buttons">
              <input type="button" value="Editar" />
              <input
                type="button"
                value="Excluir"
                data-testid="delete-btn"
                onClick={ hadlerClick }
              />
            </td>
          </tr>
        ))
      }
    </>
  );
}

TableBody.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    currency: PropTypes.string,
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.string),
  })).isRequired,
  hadlerClick: PropTypes.func.isRequired,
};
