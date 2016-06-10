import React from 'react'
import Cell from '../cell/Cell'
import _ from 'lodash'
import './row.scss'

export default class Row extends React.Component {
  render () {
    var _that = this
    var cells = []
    _.times(_that.props.size, (i) => {
      cells.push(<Cell y={this.props.y} x={i} alive={_.includes(_that.props.x, i)} className='cell' key={i} />)
    })
    return (
      <div className='row'>
        {cells}
      </div>
    )
  }
}
