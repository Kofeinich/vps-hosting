import {
    CHOOSE_OS,
} from '../types/types'

const initialState = {
    os: {},
};

export const osReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_OS :
            state.os[action.vps_id] = action.os
            return state
        default:
            return state;
    }
}