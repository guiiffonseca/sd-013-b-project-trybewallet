import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Coins extends Component {
  render() {
    const { initial } = this.props;
    console.log(initial);
    return (
      <label htmlFor="coin">
        Moeda
        <select name="coin" id="coin">
          { initial.map((code, index) => (
            <option value={ code } key={ index }>
              { code }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  initial: wallet.initial,
});

Coins.propTypes = {
  initial: PropTypes.arrayOf(PropTypes.string).isRequired,

};

export default connect(mapStateToProps, null)(Coins);
