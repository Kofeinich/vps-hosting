import {
    CHOOSE_ITEM,
} from '../types/types'

const initialState = {
    content: {},
};

export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_ITEM :
            return {
                ...state,
                content: action.payload,
            }
        default:
            return state;
    }
}