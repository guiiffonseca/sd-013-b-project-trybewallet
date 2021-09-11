import React, { Component } from 'react';
import SelectPayment from './select-payment';
import SelectTag from './select-tag';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class ExpensesForm extends Component {
  render() {
    // const { email } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" type="text" name="valor" />
        </label>

        <label htmlFor="descricao">
          Descrição
          <input id="descricao" type="text" name="descricao" />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            name="moeda"
            // value={  }
            // onChange={ handleChange }
          >
            <option value="">Selecione</option>
          </select>
        </label>

        <SelectPayment />
        <SelectTag />
      </form>
    );
  }
}

ExpensesForm.propTypes = ({
  // email: PropTypes.string,
}).isRequired;

// const mapStateToProps = ({ user: { email } }) => ({ email });

// export default connect(mapStateToProps)(Header);

export default ExpensesForm;
