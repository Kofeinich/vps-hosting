import {combineReducers} from "redux";
import {dataReducer} from "./dataReducer";
import {widthReducer} from "./widthReducer";
import {osReducer} from "./osReducer";
import {softwareReducer} from "./softwareReducer";
import {itemReducer} from "./itemReducer";

export const rootReducer = combineReducers({
    dataReducer,
    widthReducer,
    osReducer,
    categoryReducer: itemReducer,
    softwareReducer,
})