import React from 'react';
import PropTypes from 'prop-types';

export default function Td({ name }) {
  return (
    <td>
      {name}
    </td>
  );
}

Td.proTypes = {
  name: PropTypes.string.isRequired,
};
