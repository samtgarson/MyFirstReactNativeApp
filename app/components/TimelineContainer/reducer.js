/*
 *
 * TimelineContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { ADD_TIMELINE_EVENT } from './constants';

const initialState = fromJS([
  {text: 'Test Event', id: 1}
]);

function timelineContainer(state = initialState, action) {
  switch (action.type) {
    case ADD_TIMELINE_EVENT:
      return state.push(action.payload);
    default:
      return state;
  }
}

export default timelineContainer;

export function selectTimelineContainer(state) {
  return state.get('timelineContainer');
}
