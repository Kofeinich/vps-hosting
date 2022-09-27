import {
    CHOOSE_SOFTWARE,
} from '../types/types'

const initialState = {
    software: {},
};

export const softwareReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_SOFTWARE :
            state.software[action.vps_id] = action.software
            return {
                ...state,
                software: {...state.software, ...action.payload}
            }
        default:
            return state;
    }
}