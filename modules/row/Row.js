import React from 'react'
import Cell from '../cell/Cell'
import _ from 'lodash'
import './row.scss'

export default class Row extends React.Component {
  render () {
    var cells = []
    _.times(this.props.cells, (i) => {
      cells.push(<Cell y={i} x={this.props.index} hit={this.props.hit} className='cell' key={i} />)
    })
    return (
      <div className='row'>
        {cells}
      </div>
    )
  }
}
