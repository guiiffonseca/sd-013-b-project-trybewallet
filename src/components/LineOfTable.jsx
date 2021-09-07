import React from 'react';
import PropTypes from 'prop-types';

export default class LineOfTable extends React.Component {
  render() {
    const { textLine, typeTable } = this.props;
    if (typeTable === 'th') {
      return (
        <tr>
          {textLine.map((description, index) => <th key={ index }>{description}</th>)}
        </tr>
      );
    }
    return (
      <tr>
        {textLine.map((description, index) => <td key={ index }>{description}</td>)}
      </tr>
    );
  }
}

LineOfTable.propTypes = {
  textLine: PropTypes.arrayOf(PropTypes.string).isRequired,
  typeTable: PropTypes.string.isRequired,
};
