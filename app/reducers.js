import homeContainer from './components/HomeContainer/reducer';
import { combineReducers } from 'redux-immutable';

const applicationReducers = {
  homeContainer
};
export default function createReducer() {
  return combineReducers(applicationReducers);
}
