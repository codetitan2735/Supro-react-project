import { all, put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
import { actionTypes, updateWishlistListSuccess } from './action';
import {
    addItemToWishlistHelper,
    getWishListFromCookies,
    removeCartItemHelper,
    removeItemFromWishlist,
} from '~/utilities/ecomerce-helpers';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Added to wishlisht!',
        description: 'This product has been added to wishlist!',
    });
};

const modalWarning = (type) => {
    notification[type]({
        message: 'Removed from wishlist',
        description: 'This product has been removed from wishlist!',
    });
};

function* getWishlistListSaga() {
    try {
        const items = getWishListFromCookies();
        yield put(updateWishlistListSuccess(items));
    } catch (err) {
        console.log(err);
    }
}

function* addItemToWishlistSaga({ product }) {
    try {
        const wishlistItems = addItemToWishlistHelper(product);
        yield put(updateWishlistListSuccess(wishlistItems));
        modalSuccess('success');
    } catch (err) {
        console.log(err);
    }
}

function* removeItemWishlistSaga({ product }) {
    try {
        const wishlistItems = removeItemFromWishlist(product);
        yield put(updateWishlistListSuccess(wishlistItems));
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

function* clearWishlistListSaga() {
    try {
        const emptyCart = {
            wishlistItems: [],
            wishlistTotal: 0,
        };
        yield put(updateWishlistListSuccess(emptyCart));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_WISHLIST_LIST, getWishlistListSaga)]);
    yield all([
        takeEvery(actionTypes.ADD_ITEM_WISHLISH, addItemToWishlistSaga),
    ]);
    yield all([
        takeEvery(actionTypes.REMOVE_ITEM_WISHLISH, removeItemWishlistSaga),
    ]);
}
