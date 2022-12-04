import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const incrementCount = () => {
    return {
        type: INCREMENT,
    };
};

export const decrementCount = () => {
    return {
        type: DECREMENT,
    };
};

const initialState = {
    num: 0,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                num: state.num + 1,
            };
        case "DECREMENT":
            return { num: state.num - 1 };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
