import {INCREMENT_COUNTER} from '../constants/ActionTypes';

const initialState = {
    counter: 1
};

export default function appState(state = initialState, action) {
	switch (action.type) {
        case INCREMENT_COUNTER:
            return Object.assign({}, state, {
                counter: state.counter + 1
            });

		default:
			return state;
	}
}
