import * as actionTypes from './actionTypes';

export const firstExample = (firstName) => {
    return {
        type: actionTypes.FIRST_EXAMPLE,
        firstName
    };
};