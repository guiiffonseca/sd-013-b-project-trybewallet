import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTag } from '../actions';

class TagType extends React.Component {
  constructor(props) {
    super(props);

    this.updateTag = this.updateTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.updateTag('Alimentação');
  }

  updateTag(tag) {
    const { setTag: setTagFunc } = this.props;

    setTagFunc(tag);
  }

  handleChange({ target }) {
    this.updateTag(target.value);
  }

  render() {
    return (
      <label htmlFor="input-tag-type">
        Tag:
        <select id="input-tag-type" onChange={ this.handleChange }>
          <option name="food" id="food">
            Alimentação
          </option>
          <option name="lazer" id="lazer">
            Lazer
          </option>
          <option name="work" id="work">
            Trabalho
          </option>
          <option name="transport" id="transport">
            Transporte
          </option>
          <option name="health" id="health">
            Saúde
          </option>
        </select>
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTag: (tag) => dispatch(setTag(tag)),
});

TagType.propTypes = {
  setTag: PropTypes.string,
}.isRequired;

export default connect(null, mapDispatchToProps)(TagType);
