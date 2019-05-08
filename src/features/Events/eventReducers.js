import { createReducer } from '../../app/common/util/reducerUtil'
import { FETCH_EVENT } from './eventConstants'
  
const initialState = [];

export const fetchEvent = (state, payload) => {
    return payload.events;
}

export default createReducer(initialState, {
    [FETCH_EVENT]:fetchEvent
})