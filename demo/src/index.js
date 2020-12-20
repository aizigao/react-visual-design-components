import React, { Component } from 'react'
import { render } from 'react-dom'
import { Picker } from '../../src'

export default class Demo extends Component {
  render() {
    return (
      <>
        <Picker />
      </>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
