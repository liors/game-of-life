import React from 'react'
import Row from './row/Row'
import _ from 'lodash'
import './app.scss'

const size = 6
const lifeSize = size*size/4;

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      x: [0, 2, 4],
      y: [1, 3, 5]
    }
  }

  getRows () {
    let rows = []
    _.times(size, (i) => {
      const hit = {
        x: this.state.x,
        y: this.state.y
      }
      rows.push(<Row hit={hit} index={i} cells={size} key={i} />)
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
