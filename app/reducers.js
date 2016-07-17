import EventsReducer from './components/Events/reducer';
import { combineReducers } from 'redux-immutable';

const applicationReducers = {
  events: EventsReducer
};

export default function createReducer() {
  return combineReducers(applicationReducers);
}
