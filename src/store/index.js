import {combineReducers, createStore} from "redux";
import {constrolReducer} from "../reducers/reducers";

export const store = createStore(
    combineReducers({
        adjuster: constrolReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION___ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



