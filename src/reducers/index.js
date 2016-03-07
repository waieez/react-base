import {combineReducers} from 'redux'
import example from './example'
import {routerReducer} from "react-router-redux"
// exports a reducer used to create the store
export default combineReducers({
  example,
  routing: routerReducer
  // this is es6 syntax and actually is {"example": example}
  // the state changes affected by example will be under state["example"]
  // here's a good time to figure out what your state tree should look like.
})
