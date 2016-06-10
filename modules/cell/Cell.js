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
    if (this.props.alive) {
      const index = _.last(_.shuffle(_.range(0, _.size(colors))))
      return 'cell ' + colors[index]
    }
    return 'cell'
  }

  render () {
    return (
      <div className={this.isAlive()}></div>
    )
  }
}
