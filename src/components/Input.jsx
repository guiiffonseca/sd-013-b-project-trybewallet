import React from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props)
  }
//   onChange = (event) => {
//   console.log(event.target.value)
// }
  render() {
    const { type, onChange, labelText, testId } = this.props
    return (
      <label>
        data-testid={ testId }
        { labelText }
      <input
        type={ type }>
        onChange={ onChange }
      </input>
      </label>
    )
  }
}

export default Input;