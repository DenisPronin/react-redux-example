import { createAction, handleActions } from 'redux-actions'
import * as _ from 'lodash';
import Api from '../../api/githubUsersApi';

/*
 * Constants
* */

export const FETCH_USERS = 'FETCH_USERS';

/*
 * Actions
 * */
export const fetchUsers = createAction(FETCH_USERS, Api.fetchUsers);

export const actions = {
  fetchUsers
};

/*
* State
* */
const initialState = {
  users: [], // ids
  userById: {}
};

/*
 * Reducers
 * */
export default handleActions({
  [FETCH_USERS]: {
    next: (state, action) => {
      console.log(state);
      console.log(action);

      return state;
    },
    // handle reject
    throw: (state, action) => ({
      ...state,
      error: action.payload // error in payload
    })
  }
}, initialState);
