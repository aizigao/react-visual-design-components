import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './style.less'
import propSchema from './config/schema.json'
import defaultData from './config/data.json'
import placeHolderImg from '../static/placeholder.png'

export default class Image extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: defaultData || {},
  }

  static compAttr = {
    name: 'Image',
    id: 'Image',
    title: '图片',
    iconName: 'StarOutlined',
  }

  static propSchema = propSchema

  render() {
    const {
      data: { link, src },
    } = this.props
    return (
      <a href={link}>
        <img className="header__img" src={src || placeHolderImg} />
      </a>
    )
  }
}
