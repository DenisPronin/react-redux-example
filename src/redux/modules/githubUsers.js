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
export const fetchUsers = createAction(FETCH_USERS, () => {
  return {
    promise: Api.fetchUsers()
  }
});

export const actions = {
  fetchUsers
};

/*
* State
* */
const initialState = {
  pending: true,
  errorMessage: '',
  users: [], // ids
  userById: {}
};

/*
 * Reducers
 * */
export default handleActions({
  FETCH_USERS_PENDING: (state, { payload }) => {
    return {
      ...state,
      pending: true
    };
  },
  FETCH_USERS_REJECTED: (state, { payload }) => {
    return {
      ...state,
      pending: false,
      errorMessage: payload.error
    };
  },
  FETCH_USERS_FULFILLED: (state, { payload: users }) => {
    let usersIds = [];
    let userById = {};
    users.forEach(user => {
      userById[user.id] = user;
      usersIds = _.concat(usersIds, user.id);
    });
    return {
      ...state,
      pending: false,
      errorMessage: '',
      users: usersIds,
      userById: userById
    };
  }
}, initialState);
