import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <ul>
          { expenses.map((despesa) => (
            <li
              key={ despesa.id }
            >
              { `Descrição: ${despesa.description}, Valor: ${despesa.value}` }
            </li>))}
        </ul>
      </div>
    );
  }
}

User.propTypes = {
  expenses: PropTypes.shape(PropTypes.array).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(User);
