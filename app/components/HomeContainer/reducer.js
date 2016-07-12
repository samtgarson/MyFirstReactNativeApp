/*
 *
 * HomeContainer reducer
 *
 */

import { DEFAULT_ACTION } from './constants';

function homeContainer(state = {}, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default homeContainer;


export function selectHomeContainer(state) {
  return state.get('homeContainer');
}
