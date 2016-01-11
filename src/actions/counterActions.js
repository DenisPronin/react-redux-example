import * as types from '../constants/ActionTypes';

export function incrementCounter(settings) {
    return {type: types.INCREMENT_COUNTER, settings};
}

export function decrementCounter(settings) {
    return {type: types.DECREMENT_COUNTER, settings};
}
