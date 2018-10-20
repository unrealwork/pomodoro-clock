import {actionTypes} from "../reducers/reducers";

export const increase = (fieldName, min, max) => {
    return () => ({type: actionTypes.INCREMENT, field: fieldName, min, max})
};

export const decrease = (fieldName, min, max) => {
    return () => ({type: actionTypes.DECREMENT, field: fieldName, min, max})
};