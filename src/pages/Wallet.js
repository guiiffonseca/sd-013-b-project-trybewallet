import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Formulario from '../components/formulario';
import { getApi, setFetchAwesomeapi } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      moeda: 'BRL',
    };
  
    this.getApi = this.getApi.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    const { currency } = this.props;
    setCurrencies();
  }

  render() {
    const { total, moeda } = this.state;
    const { email } = this.props;
    return (
      <>
        <header>
          <div>
            <span data-testid="email-field">{ email }</span>
            <span data-testid="total-field">{ total }</span>
            <span data-testid="header-currency-field">{ moeda }</span>
          </div>
        </header>
        <section>
          <Form />
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  currency: () => dispatch(getApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currency: PropTypes.func.isRequired,
};
