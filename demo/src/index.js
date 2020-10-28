import React, { Component } from 'react'
import { render } from 'react-dom'
import { HorizontalList, Image } from '../../src'

export default class Demo extends Component {
  render() {
    return (
      <>
        <HorizontalList />
        <Image />
        <Image />
      </>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
