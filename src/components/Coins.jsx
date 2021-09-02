import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Coins extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createOption = this.createOption.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  createOption() {
    const { coins } = this.props;
    return (
      coins.map((code, index) => (
        <option value={ code } key={ index }>
          { code }
        </option>
      ))
    );
  }

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value,
  //   });
  //   console.log(value);
  // }

  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency" value={ value } onChange={ onChange }>
          { this.createOption() }
        </select>
      </label>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  coins: wallet.coins,
});

Coins.propTypes = {
  coins: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Coins.defaultProps = {
  coins: [],
};

export default connect(mapStateToProps, null)(Coins);

// erro do "map undefined" resolvido com ajuda do stackoverflow
// https://stackoverflow.com/questions/56192170/typeerror-cannot-read-property-map-of-undefined-jest-js
