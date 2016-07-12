import timelineContainer from './components/TimelineContainer/reducer';
import { combineReducers } from 'redux-immutable';

const applicationReducers = {
  timelineContainer
};

export default function createReducer() {
  return combineReducers(applicationReducers);
}
