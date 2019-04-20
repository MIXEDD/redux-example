import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../shared/Utility';

const initState = {
    firstName: 'asdf'
};

export const setUpNewState = (state, action) => {
    const newObject = {
        firstName: action.firstName
    };

    return updateObject(state, action);
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FIRST_EXAMPLE: return setUpNewState(state,action);
    default: return state;
    }
};

export default reducer;