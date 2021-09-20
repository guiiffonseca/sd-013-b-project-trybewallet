import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTag } from '../actions';

const options = {
  food: 'Alimentação',
  entertainment: 'Lazer',
  work: 'Trabalho',
  transport: 'Transporte',
  health: 'Saúde',
};

class TagType extends React.Component {
  constructor(props) {
    super(props);

    this.updateTag = this.updateTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateTag(tag) {
    const { setTag: setTagFunc } = this.props;

    setTagFunc(tag);
  }

  handleChange({ target }) {
    this.updateTag(target.value);
  }

  render() {
    const { value } = this.props;

    return (
      <label htmlFor="input-tag-type">
        Tag:
        <select id="input-tag-type" onChange={ this.handleChange }>
          {Object.entries(options).map(([optionKey, optionValue]) => {
            if (value === optionValue) {
              return (
                <option name={ optionKey } id={ optionKey }>
                  {optionValue}
                </option>
              );
            }
            return (
              <option key={ optionKey } name={ optionKey } id={ optionKey }>
                {optionValue}
              </option>
            );
          })}
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
