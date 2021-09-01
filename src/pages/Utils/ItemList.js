import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../../actions/index';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { removeListItem, id } = this.props;
    removeListItem(id);
  }

  editExpense() {
    console.log('Aoba!');
  }

  render() {
    const { item:
      { value, description, method, currency,
        tag, exchangeRates } } = this.props;
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
        <button
          type="button"
          data-testid="edit-btn"
          onClick={ this.editExpense }
        >
          Editar
        </button>
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="delete-btn"
        >
          Remover
        </button>
      </tr>
    );
  }
}

ItemList.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  removeListItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeListItem: (id) => (dispatch(deleteExpense(id))),
});

export default connect(null, mapDispatchToProps)(ItemList);
