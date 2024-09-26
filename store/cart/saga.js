import { all, put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
import {
    actionTypes,
    getCartError,
    updateCartSuccess,
    updateCartError,
} from './action';
import {
    addItemToCartHelper,
    decreaseQtyCartItemHelper,
    getCartItemsFromCookies,
    increaseQtyCartItemHelper,
    removeCartItemHelper,
} from '~/utilities/ecomerce-helpers';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Success',
        description: 'This product has been added to your cart!',
        duration: 1,
    });
};
const modalWarning = (type) => {
    notification[type]({
        message: 'Remove A Item',
        description: 'This product has been removed from your cart!',
        duration: 1,
    });
};

function* getCartSaga() {
    try {
        const cartItems = getCartItemsFromCookies();
        yield put(updateCartSuccess(cartItems));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* addItemSaga(payload) {
    try {
        const { product } = payload;
        const cartItems = addItemToCartHelper(product);
        yield put(updateCartSuccess(cartItems));
        modalSuccess('success');
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* removeItemSaga(payload) {
    try {
        const { product } = payload;

        const cartItems = removeCartItemHelper(product);
        yield put(updateCartSuccess(cartItems));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* increaseQtySaga(payload) {
    try {
        const { product } = payload;
        const cartItems = increaseQtyCartItemHelper(product);
        yield put(updateCartSuccess(cartItems));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* decreaseItemQtySaga(payload) {
    try {
        const { product } = payload;
        const cartItems = decreaseQtyCartItemHelper(product);
        yield put(updateCartSuccess(cartItems));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* clearCartSaga() {
    try {
        const emptyCart = {
            cartItems: null,
        };
        yield put(updateCartSuccess(emptyCart));
    } catch (err) {
        yield put(updateCartError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_CART, getCartSaga)]);
    yield all([takeEvery(actionTypes.ADD_ITEM, addItemSaga)]);
    yield all([takeEvery(actionTypes.REMOVE_ITEM, removeItemSaga)]);
    yield all([takeEvery(actionTypes.INCREASE_QTY, increaseQtySaga)]);
    yield all([takeEvery(actionTypes.DECREASE_QTY, decreaseItemQtySaga)]);
}
