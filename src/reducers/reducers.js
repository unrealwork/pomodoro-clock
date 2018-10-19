export const actionTypes = {
    INCREMENT: 'INC',
    DECREMENT: 'DEC'
};


const defaultState = {
    breakLength: 5,
    sessionLength: 25
};

export const constrolReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT: {
            const newState = {...state};
            newState[action.field] = state[action.field] + 1;
            return newState
        }
        case actionTypes.DECREMENT: {
            const newState = {...state};
            newState[action.field] = state[action.field] - 1;
            return newState
        }
        default:
            return state;
    }
};