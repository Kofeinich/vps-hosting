import {
    CHOOSE_CATEGORY,
} from '../types/types'

const initialState = {
    category: ['Все'],
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_CATEGORY :
            return {
                ...state,
                category: action.category
            }
        default:
            return state;
    }
}