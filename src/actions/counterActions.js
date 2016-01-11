import * as types from '../constants/ActionTypes';

export function incrementCounter(settings) {
    return {type: types.INCREMENT_COUNTER, settings};
}
