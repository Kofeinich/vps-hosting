import {
    SIDE_BAR_CLICK,
} from '../types/types'

const initialState = {
    width: '211px',
};

export const widthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIDE_BAR_CLICK :
            console.log('Starting fetch')
            return {
                ...state,
                width: action.width
            }
        default:
            return state;
    }
}