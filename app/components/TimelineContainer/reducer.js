/*
 *
 * TimelineContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { ADD_TIMELINE_EVENT } from './constants';

const initialState = fromJS([
  {text: 'Test Event', id: 1},
  {text: 'Test Event', id: 3},
  {text: 'Test Event', id: 4},
  {text: 'Another Test Event', id: 2}
]);

var eventIdCounter = 0;

function timelineContainer(state = initialState, action) {
  switch (action.type) {
    case ADD_TIMELINE_EVENT:
      return state.push({text: 'Added!', id: eventIdCounter++});
    default:
      return state;
  }
}

export default timelineContainer;

export function selectTimelineContainer(state) {
  return state.get('timelineContainer');
}
