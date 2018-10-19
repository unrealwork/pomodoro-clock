import {actionTypes} from "../reducers/reducers";

export const increase = (fieldName) => {
    return () => ({type: actionTypes.INCREMENT, field: fieldName})
};

export const decrease = (fieldName) => {
    return () => ({type: actionTypes.DECREMENT, field: fieldName})
};