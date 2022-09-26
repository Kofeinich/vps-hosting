import {
    LOAD_DATA_SUCCESS,
    LOAD_DATA_STARTED,
    LOAD_DATA_FAILED,
    SIDE_BAR_CLICK,
} from '../types/types'

import axios from "axios";

export const clickOnSideBar = width => ({
    type: SIDE_BAR_CLICK,
    width
})

const loadDataSuccess = data => ({
    type: LOAD_DATA_SUCCESS,
    payload: {
        ...data
    }
});

const loadDataStarted = () => ({
    type: LOAD_DATA_STARTED
});

const loadDataFailed = error => ({
    type: LOAD_DATA_FAILED,
    payload: {
        error
    }
});

export const getDataFromApi = () => {
    return async dispatch => {
        dispatch(loadDataStarted())
        const BASE_URL = `https://api.sweb.ru/notAuthorized/`
        const request = JSON.stringify({
            "jsonrpc":"2.0",
            "method" : "vpsOsConfig",
            "params": {},
        })
        await axios.post(`${BASE_URL}`, request).then(res => {
            console.log(res.data)
            dispatch(loadDataSuccess(res.data));

        }).catch(err => {
            dispatch(loadDataFailed(err.message))
        })
    }
}