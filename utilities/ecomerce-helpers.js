/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */

import React from 'react';
import cookies from 'js-cookie';
import { getProductsByIds } from '~/repositories/ProductRepository';

export function calculateAmount(obj) {
    return Object.values(obj)
        .reduce((acc, { quantity, price }) => acc + quantity * price, 0)
        .toFixed(2);
}

export function getCartItemsFromCookies() {
    const cartItems = cookies.get('cart');
    if (cartItems) {
        return JSON.parse(cartItems);
    } else {
        return null;
    }
}

export function getWishListFromCookies() {
    const items = cookies.get('wishlist');
    if (items) {
        return JSON.parse(items);
    } else {
        return null;
    }
}

export async function getCartItemsHelper(cart) {
    let cartItems;
    if (cart && cart.items.length > 0) {
        let queries = '';
        cart.items.forEach((item) => {
            if (queries === '') {
                queries = `id_in=${item.id}`;
            } else {
                queries = queries + `&id_in=${item.id}`;
            }
        });
        const products = await getProductsByIds(queries);
        if (products && products.items.length > 0) {
            cartItems = products.items;
            cart.items.forEach((item, index) => {
                if (item.id === cartItems[index].id) {
                    cartItems[index].quantity = item.quantity;
                }
            });
        }
        return {
            items: cartItems,
        };
    } else {
        return {
            items: [],
        };
    }
}

export async function getWishListItemsHelper(payload) {
    let wishlistItems;
    if (payload && payload.length > 0) {
        let queries = '';
        payload.forEach((item) => {
            if (queries === '') {
                queries = `id_in=${item}`;
            } else {
                queries = queries + `&id_in=${item}`;
            }
        });
        const products = await getProductsByIds(queries);
        if (products && products.items.length > 0) {
            wishlistItems = products.items;
        }
        return wishlistItems;
    } else {
        return null;
    }
}

export function updateCartToCookies(payload) {
    cookies.set('cart', payload, { path: '/', expires: 24 * 7 });
}

export function updateWishlistToCookies(payload) {
    cookies.set('wishlist', payload, { path: '/', expires: 24 * 7 });
}

export function addItemToCartHelper(product) {
    let cart;
    let cookieCart = getCartItemsFromCookies();
    if (cookieCart) {
        cart = cookieCart;
        const existItem = cart.items.find((item) => item.id === product.id);
        if (existItem) {
            existItem.quantity += product.quantity;
        } else {
            /* if (!product.quantity) {
                product.quantity = 1;
            }*/
            cart.items.push(product);
        }
    } else {
        cart = {
            items: [],
        };
        cart.items.push(product);
    }
    updateCartToCookies(cart);
    return cart;
}

export function addItemToWishlistHelper(payload) {
    let wishlist = [];
    let cookieWishlist = getWishListFromCookies();
    if (cookieWishlist) {
        wishlist = cookieWishlist;
        const existItem = wishlist.find((item) => item === payload);
        if (existItem === undefined) {
            wishlist.push(payload);
        }
    } else {
        wishlist.push(payload);
    }
    updateWishlistToCookies(wishlist);
    return wishlist;
}

export function increaseQtyCartItemHelper(product) {
    let cart;
    let cookieCart = getCartItemsFromCookies();
    if (cookieCart) {
        cart = cookieCart;
        const selectedItem = cart.items.find((item) => item.id === product.id);

        if (selectedItem) {
            selectedItem.quantity = selectedItem.quantity + 1;
        }
        updateCartToCookies(cart);
        return cart;
    }
}

export function decreaseQtyCartItemHelper(product) {
    let cart;
    let cookieCart = getCartItemsFromCookies();
    if (cookieCart) {
        cart = cookieCart;
        const selectedItem = cart.items.find((item) => item.id === product.id);

        if (selectedItem) {
            selectedItem.quantity = selectedItem.quantity - 1;
        }
        updateCartToCookies(cart);
        return cart;
    }
}

export function removeCartItemHelper(product) {
    let cart;
    let cookieCart = getCartItemsFromCookies();
    if (cookieCart) {
        cart = cookieCart;
        const index = cart.items.findIndex((item) => item.id === product.id);
        cart.items.splice(index, 1);
        updateCartToCookies(cart);
        return cart;
    }
}

export function removeItemFromWishlist(payload) {
    let wishlist = [];
    let cookieWishlist = getWishListFromCookies();
    if (cookieWishlist) {
        wishlist = cookieWishlist;
        const index = wishlist.findIndex((item) => item === payload);
        console.log({ index });
        wishlist.splice(index, 1);
        console.log({ wishlist });
        updateWishlistToCookies(wishlist);
        return wishlist;
    }
}
