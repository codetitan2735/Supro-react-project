import { actionTypes } from './action';

export const initState = {
    wishlist: null,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_WISHLIST_LIST_SUCCESS:
            return {
                ...state,
            };
        case actionTypes.UPDATE_WISHLISH_LIST_SUCCESS:
            return {
                ...state,
                wishlist: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
