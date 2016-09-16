import {Map} from "immutable"
import {IMMUTABLE_EXAMPLE} from '../actions/immutableExample'

const INITIAL_STATE = Map()
export default function immutableExample (state=INITIAL_STATE, action) {
    switch (action.type) {
        case IMMUTABLE_EXAMPLE:
            const newState = state.set("data", action.data)
            // we could just return the newstate this but this best shows what's happening'
            // console.log("Immutable can mutate immutable objects", newState === state)
            return newState
        default:
            return state
    }
}