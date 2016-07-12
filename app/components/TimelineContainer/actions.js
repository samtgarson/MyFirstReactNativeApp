/*
 *
 * TimelineContainer  actions
 *
 */

import {
  ADD_TIMELINE_EVENT,
} from './constants';

export function addTimelineEvent(event) {
  return {
    type: ADD_TIMELINE_EVENT,
    payload: event
  };
}
