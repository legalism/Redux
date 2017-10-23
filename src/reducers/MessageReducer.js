/**
 * Created by pm on 17-10-19.
 */
import * as TYPES from '../actions/Types';
import {handleActions} from 'redux-actions';
const initialState = {
  isFetch: false,
  data: [],
  status: null,
};
const defaultAction = {};

/**
 *接收先前的 state 和 action，并返回新的 state
 * @param state
 * @param action
 * @returns {*}
 */
export default function soon(state = initialState, action = defaultAction) {
  switch (action.type) {
    case TYPES.FETCH_SOON_LIST:
      return Object.assign({}, state, {
        isFetch: true,
        data: action.soon,
        status: 'done'
      });
    default:
      return state;
  }
}