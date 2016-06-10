import React from 'react'
import Row from './row/Row'
import life from '../utils/life'
import _ from 'lodash'
import './app.scss'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cells: life.generate()
    }

    setInterval(() => {
      this.update()
    }, 1000)
  }

  isFilled (x, y) {
    let row = this.state.cells[y]
    return _.includes(row, x)
  }

  countNeighbours (x, y) {
    let amount = 0
    if (this.isFilled(x - 1, y - 1)) amount++
    if (this.isFilled(x, y - 1)) amount++
    if (this.isFilled(x + 1, y - 1)) amount++
    if (this.isFilled(x - 1, y)) amount++
    if (this.isFilled(x + 1, y)) amount++
    if (this.isFilled(x - 1, y + 1)) amount++
    if (this.isFilled(x, y + 1)) amount++
    if (this.isFilled(x + 1, y + 1)) amount++

    return amount
  }

  update () {
    let result = {}
    let rows = _.keys(this.state.cells)
    _.forEach(rows, (row) => {
      result[row] = []
      let cells = _.get(this.state.cells, row)
      _.forEach(cells, (cell) => {
        let alive = 0
        const count = this.countNeighbours(cell, row)
        if (cell > 0) {
          alive = count === 2 || count === 3 ? 1 : 0
        } else {
          alive = count === 3 ? 1 : 0
        }
        if (alive) {
          result[row].push(cell)
        }
      })
    })

    this.setState({
      cells: result
    })
  }

  getRows () {
    let rows = []
    let _that = this
    _.times(36, (row) => {
      let cells = _that.state.cells[row]
      rows.push(<Row x={cells} y={row} size={36} key={row} />)
    })
    return rows
  }

  render () {
    return (
      <div className='app'>
        {this.getRows()}
      </div>
    )
  }
}
