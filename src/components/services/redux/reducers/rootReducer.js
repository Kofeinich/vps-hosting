import {combineReducers} from "redux";
import {dataReducer} from "./dataReducer";
import {widthReducer} from "./widthReducer";


export const rootReducer = combineReducers({
    dataReducer,
    widthReducer
})