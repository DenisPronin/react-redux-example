import { createAction, handleActions } from 'redux-actions'
import * as _ from 'lodash';

import { generateId } from '../../helpers/idGenerator'

/*
* Constants
* */
export const ADD_FRIEND = 'ADD_FRIEND';
export const STAR_FRIEND = 'STAR_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

/*
* Actions
* */
export const addFriend = createAction(ADD_FRIEND, name => name);
export const starFriend = createAction(STAR_FRIEND, id => id);
export const removeFriend = createAction(REMOVE_FRIEND, id => id);

export const actions = {
  addFriend,
  starFriend,
  removeFriend
};

/*
* State
* */
const initialState = {
  friends: [1, 2, 3, 4],

  friendsById: {
    1: {
      id: 1,
      name: 'Piter',
      starred: false
    },
    2: {
      id: 2,
      name: 'Lucy',
      starred: false
    },
    3: {
      id: 3,
      name: 'Edward',
      starred: false
    },
    4: {
      id: 4,
      name: 'Susan',
      starred: false
    }
  }
};

/*
* Reducers
* */
export default handleActions({
  [STAR_FRIEND]: (state, { payload: id }) => {
    return {
      ...state,
      friendsById: _.mapValues(state.friendsById, (friend) => {
        return friend.id === id ? _.assign({}, friend, {starred: !friend.starred}) : friend;
      })
    };
  },

  [REMOVE_FRIEND]: (state, { payload: id }) => {
    return {
      ...state,
      friends: _.filter(state.friends, (_id) => _id !== id),
      friendsById: _.omit(state.friendsById, id)
    }
  },

  [ADD_FRIEND]: (state, {payload: name}) => {
    let id = generateId();
    return {
      ...state,
      friends: _.concat(state.friends, id),
      friendsById: {
        ...state.friendsById,
        [id]: {
          id,
          name,
          starred: false
        }
      }
    }
  }

}, initialState);
