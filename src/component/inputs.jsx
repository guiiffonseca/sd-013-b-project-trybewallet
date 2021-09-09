import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestThunk } from '../actions';

class Input extends React.Component {
  componentDidMount() {
    const { request } = this.props;
    request();
  }

  render() {
    const { onChange, currencies } = this.props;
    const currencie = Object.keys(currencies);
    const current = currencie.filter((cu) => cu !== 'USDT');
    return (
      <>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            onChange={ onChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            onChange={ onChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select type="region" id="currency" onChange={ onChange }>
            {current.map((moeda) => <option key={ moeda }>{ moeda }</option>)}
          </select>
        </label>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  request: () => dispatch(requestThunk()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Input.propTypes = {
  request: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
