import { createStore, compose, applyMiddleware } from 'redux';
import {reducer} from "../redux/reducers/reducer"
import thunk from 'redux-thunk';

export const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))