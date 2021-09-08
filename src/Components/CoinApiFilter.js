import React from 'react';
import PropTypes from 'prop-types';

class CoinApiFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((object) => {
        this.setState({
          coin: object,
        });
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { coin } = this.state;
    const { func } = this.props;
    const options = Object.keys(coin).filter(
      (option) => option !== 'USDT',
    ).map((option) => <option key={ option } value={ option }>{ option }</option>);

    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          onChange={ func }
        >
          {options}
        </select>
      </label>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   setCoin: (payload) => dispatch(setCoinAction(payload)),
// });

export default CoinApiFilter;

CoinApiFilter.propTypes = {
  func: PropTypes.func.isRequired,
};
