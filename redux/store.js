import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import life from '../utils/life'
import reducer from './reducer'

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

export default function configureStore (initialState = { cells : life.generate() }) {
  return finalCreateStore(reducer, initialState);
}