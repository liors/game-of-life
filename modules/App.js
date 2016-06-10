import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Row from './row/Row'
import actions from '../redux/actions'
import './app.scss'

class App extends React.Component {
  constructor (props) {
    super(props)
    setInterval(() => {
      this.props.dispatch(actions.nextGeneration())
    }, 1000)
  }

  getRows () {
    let rows = []
    let _that = this
    _.times(36, (row) => {
      let cells = _that.props.cells[row]
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

function mapStateToProps (state) {
  return state;
}

export default connect(mapStateToProps)(App)
