import {createStore} from "redux";

export const store = createStore((state = {}, action) => console.log(state));