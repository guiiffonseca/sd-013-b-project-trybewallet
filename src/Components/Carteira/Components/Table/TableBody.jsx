import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line max-lines-per-function
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
            <td>
              {description}
            </td>
            <td>
              {tag}
            </td>
            <td>
              {method}
            </td>
            <td>
              {value}
            </td>
            <td>
              {removeName(exchangeRates[currency].name)}
            </td>
            <td>
              {parseFloat(exchangeRates[currency].ask).toFixed(2)}
            </td>
            <td>
              {parseFloat(
                exchangeRates[currency].ask * value,
              ).toFixed(2)}
            </td>
            <td>
              Real
            </td>
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
