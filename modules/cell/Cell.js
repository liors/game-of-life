import React from 'react'
import { colors } from '../../utils/colors'
import _ from 'lodash'

import './cell.scss'

export default class Cell extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      className: props.className
    }
  }

  isAlive () {
    if (this.props.hit.x === this.props.x && this.props.hit.y === this.props.y) {
      const index = _.first(_.shuffle(_.range(0, _.size(colors) - 1)))
      return 'cell ' + colors[index]
    }
    return 'cell'
  }

  onClick () {
    this.props.bam(this.props.x, this.props.y)
  }

  render () {
    return (
      <div onClick={() => this.onClick()} className={this.isAlive()}></div>
    )
  }
}
