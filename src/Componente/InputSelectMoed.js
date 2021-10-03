import React from 'react';
import PropTypes from 'prop-types';
import getMoedas from '../Api';

class InputSelectMoed extends React.Component {
  constructor() {
    super();
    this.state = {
      listmoedas: [],
    };

    this.fetchMoedas = this.fetchMoedas.bind(this);
  }

  componentDidMount() {
    this.fetchMoedas();
  }

  async fetchMoedas() {
    const listmoedas = await getMoedas();
    this.setState({
      listmoedas,
    });
  }

  render() {
    const { value, onChange } = this.props;
    const { listmoedas } = this.state;
    const tree = 3;
    const letras = listmoedas.filter((letra) => letra.length === tree);
    return (
      <label htmlFor="select">
        Moeda:
        <select
          name="currency"
          id="select"
          value={ value }
          onChange={ onChange }
        >
          { /* <option value="" disabled selected>Selecione uma moeda</option> */ }
          {letras.map((list, index) => (
            <option key={ index }>{ list }</option>
          ))}
        </select>
      </label>
    );
  }
}

// referenc checagen de prop https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
InputSelectMoed.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSelectMoed;
