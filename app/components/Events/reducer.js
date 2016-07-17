import { Map } from 'immutable';
import { 
  ADD_TIMELINE_EVENT, 
  HIDE_TIMELINE_EVENT
} from './constants';

const initialState = Map({});

var eventIdCounter = 0;
const generateEventId = () => (eventIdCounter++)

function EventsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TIMELINE_EVENT:
      let nextId = generateEventId()
      return state.set(nextId, {
        ...action.event,
        hidden: false,
        createdAt: new Date(),
        id: nextId
      });
    case HIDE_TIMELINE_EVENT:
      return state.update(action.id, (event) => (
        {...event, hidden: true}
      ))
      return newState
    default:
      return state;
  }
}

export default EventsReducer;
