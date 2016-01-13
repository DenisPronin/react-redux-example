import { createAction, handleActions } from 'redux-actions'

/*
* Constants
* */
export const STAR_FRIEND = 'STAR_FRIEND';

/*
* Actions
* */
export const starFriend = createAction(STAR_FRIEND, id => id);

export const actions = {
  starFriend
};

/*
* State
* */
const initialState = {
  friends: [1, 2, 3],

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
      friendsById: {
        ...state.friendsById,
        [id]: {
          ...state.friendsById[id],
          starred: !state.friendsById[id].starred
        }
      }
    };
  }
}, initialState);
