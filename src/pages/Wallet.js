import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/formulario';
import { getFetchApi } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      moeda: 'BRL',
    };

    this.getFetchApi = this.getFetchApi.bind(this);
  }

  componentDidMount() {
    this.getFetchApi();
  }

  async getFetchApi() {
    const { setCurrency } = this.props;
    setCurrency();
  }

  render() {
    const { total, moeda } = this.state;
    const { getEmail } = this.props;
    return (
      <>
        <header>
          <div>
            <span data-testid="email-field">{ getEmail }</span>
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
  getEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrency: () => dispatch(getFetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  setCurrency: PropTypes.func.isRequired,
};
