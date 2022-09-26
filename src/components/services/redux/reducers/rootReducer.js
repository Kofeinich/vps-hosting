import {combineReducers} from "redux";
import {dataReducer} from "./dataReducer";
import {widthReducer} from "./widthReducer";
import {osReducer} from "./osReducer";
import {softwareReducer} from "./softwareReducer";
import {categoryReducer} from "./categoryReducer";

export const rootReducer = combineReducers({
    dataReducer,
    widthReducer,
    osReducer,
    categoryReducer,
    softwareReducer,
})