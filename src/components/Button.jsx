import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }
//   onClick = () => {
//   console.log('onClick')
// }
  render() {
    const { type, onClick, labelText, testId } = this.props
    return (
      <button
        type={ type }>
        onClick={ onClick }
      </button>
    )
  }
}

export default Button;
