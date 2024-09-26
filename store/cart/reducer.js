import { actionTypes } from './action';

export const initCart = {
    cart: null,
};

function reducer(state = initCart, action) {
    switch (action.type) {
        case actionTypes.GET_CART_SUCCESS:
            return {
                ...state,
            };
        case actionTypes.UPDATE_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload,
            };
        case actionTypes.CLEAR_CART_SUCCESS:
            return {
                ...state,
                ...{ cartItems: action.payload.cartItems },
                ...{ amount: action.payload.amount },
                ...{ cartTotal: action.payload.cartTotal },
            };
        case actionTypes.GET_CART_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.UPDATE_CART_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        default:
            return state;
    }
}

export default reducer;
