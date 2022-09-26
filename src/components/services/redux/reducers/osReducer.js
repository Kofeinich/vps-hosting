import {
    CHOOSE_OS,
} from '../types/types'

const initialState = {
    os: ['Ubuntu 20.04 LTS'],
};

export const osReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_OS :
            return {
                ...state,
                os: action.os
            }
        default:
            return state;
    }
}