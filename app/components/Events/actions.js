import {
  ADD_TIMELINE_EVENT,
  HIDE_TIMELINE_EVENT
} from './constants';

export function addTimelineEvent(event) {
  return {
    type: ADD_TIMELINE_EVENT,
    event: event
  };
}

export function hideTimelineEvent(id) {
  return {
    type: HIDE_TIMELINE_EVENT,
    id: id
  };
}
