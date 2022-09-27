import {
    CHOOSE_CATEGORY,
} from '../types/types'

const initialState = {
    category: {},
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_CATEGORY :
            return {
                ...state,
                category: {...state.category,...action.payload}
            }
        default:
            return state;
    }
}