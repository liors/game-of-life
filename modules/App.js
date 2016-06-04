import React from 'react'
import Row from './row/Row'
import _ from 'lodash'
import './app.scss'

const size = 12

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
    setInterval(() => {
      const x = _.first(_.shuffle(_.range(0, size)))
      const y = _.first(_.shuffle(_.range(0, size)))
      this.setState({
        x: x,
        y: y
      })
    }, 600)
  }

  getRows () {
    console.log(`Repainting w/ x: ${this.state.x} and y: ${this.state.y}`)
    let rows = []
    _.times(size, (i) => {
      const hit = {
        x: this.state.x,
        y: this.state.y
      }
      rows.push(<Row bam={this.bam.bind(this)} hit={hit} index={i} cells={size} key={i} />)
    })

    return rows
  }

  bam (x, y) {
    this.setState({
      x: x,
      y: y
    })
    console.log(`clicked at x: ${x} y: ${y}`)
  }

  render () {
    return (
      <div className='app'>
        {this.getRows()}
      </div>
    )
  }
}
