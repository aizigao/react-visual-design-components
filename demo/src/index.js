import React, { Component } from 'react'
import { render } from 'react-dom'
import { NoticeBar } from '../../src'

export default class Demo extends Component {
  render() {
    return (
      <>
        <NoticeBar />
      </>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
