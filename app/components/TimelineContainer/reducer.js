/*
 *
 * TimelineContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { ADD_TIMELINE_EVENT } from './constants';

const initialState = fromJS([
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
