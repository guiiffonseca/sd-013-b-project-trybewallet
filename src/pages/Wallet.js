import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormAdd from '../component/formAdd';
import { fetchApi as fetchApiAction } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { email } = this.props;

    return (
      <div>
        <header className="header">
          <div>
            <p data-testid="email-field">{ email }</p>
          </div>
          <div>
            <p data-testid="total-field">0</p>
          </div>
          <div>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </header>
        <body>
          <FormAdd />
        </body>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  isLoading: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchApiAction()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchApi: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
