import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// eslint-disable-next-line import/extensions
import { deleteExpense } from '../../actions/index.js';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const { removeListItem } = this.props;
    removeListItem(id);
  }

  render() {
    const { item:
      { value, description, method, currency,
        tag, exchangeRates, id } } = this.props;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{exchangeRates[currency].name}</td>
        <td>{(Number(exchangeRates[currency].ask)).toFixed(2)}</td>
        <td>{(exchangeRates[currency].ask * value).toFixed(2)}</td>
        <td>Real</td>
        <button type="button">Editar</button>
        <button
          type="button"
          onClick={
            () => this.handleClick(id)
          }
          data-testid="delete-btn"
        >
          Remover
        </button>
      </tr>
    );
  }
}

ItemList.propTypes = {
  item: PropTypes.string.isRequired,
  removeListItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeListItem: (id) => (dispatch(deleteExpense(id))),
});

export default connect(null, mapDispatchToProps)(ItemList);
