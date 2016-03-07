import {EXAMPLE} from '../actions/example'

// Just an example usage, watch the redux videos to learn more about how to use actioncreators and reducers
// Initial state can be anything. Be careful how you design your state tree.
const INITIAL_STATE = {}
export default function example (state=INITIAL_STATE, action) {
  switch (action.type) {
    case EXAMPLE:
      return {data: action.data}
    default:
      return state
  }
}
