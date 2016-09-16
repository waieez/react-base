import {combineReducers} from 'redux'
import {routerReducer} from "react-router-redux"

import example from './example'
import immutableExample from './immutableExample'
// exports a reducer used to create the store
export default combineReducers({
  example,
  immutableExample,
  routing: routerReducer
  // this is es6 syntax and actually is {"example": example}
  // the state changes affected by example will be under state["example"]
  // here's a good time to figure out what your state tree should look like.
})
