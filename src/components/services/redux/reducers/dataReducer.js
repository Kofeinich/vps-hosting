import {
    LOAD_DATA_SUCCESS,
    LOAD_DATA_STARTED,
    LOAD_DATA_FAILED,
} from '../types/types'

const initialState = {
    done: false,
    loading: false,
    data: {'':0},
    error: null
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_STARTED :
            console.log('Starting fetch')
            return {
                ...state,
                loading: true,
            }
        case LOAD_DATA_SUCCESS :
            console.log('Success!')
            return {
                ...state,
                loading: false,
                error: null,
                done: true,
                data: {...state.data, ...action.payload}
            }
        case LOAD_DATA_FAILED :
            console.log('Starting fetch')
            return {
                ...state,
                loading: false,
                done: false,
                error: action.payload.error
            }

        default:
            return state;
    }
}