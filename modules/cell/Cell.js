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
    if (_.includes(this.props.hit.x, this.props.x) && _.includes(this.props.hit.y, this.props.y)) {
      const index = _.last(_.shuffle(_.range(0, _.size(colors))))
      console.log(`chosen color ${colors[index]}`)
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
