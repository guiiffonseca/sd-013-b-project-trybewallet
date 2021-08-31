import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Coins extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createOption = this.createOption.bind(this);
  }

  createOption() {
    const { initial } = this.props;
    return (
      initial.map((code, index) => (
        <option value={ code } key={ index }>
          { code }
        </option>
      ))
    );
  }

  render() {
    return (
      <label htmlFor="coin">
        Moeda
        <select name="coin" id="coin">
          { this.createOption() }
        </select>
      </label>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  initial: wallet.initial,
});

Coins.propTypes = {
  initial: PropTypes.string,

};

Coins.defaultProps = {
  initial: [],
};

export default connect(mapStateToProps, null)(Coins);
