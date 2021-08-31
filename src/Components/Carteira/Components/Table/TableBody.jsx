import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line max-lines-per-function
export default function TableBody({ expenses }) {
  function removeName(name, index) {
    const campo = name.split('/');
    console.log(campo);
    console.log(campo[index]);
    if (campo[index] === 'Real Brasileiro') { return 'Real'; }
    return campo[index];
  }
  return (
    <>
      {
        expenses.map((
          { currency, description, tag, method, value, exchangeRates }, index,
        ) => (
          <tr key={ index }>
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
              {removeName(exchangeRates[currency].name, 0)}
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
              <input type="button" value="Excluir" />
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
};
