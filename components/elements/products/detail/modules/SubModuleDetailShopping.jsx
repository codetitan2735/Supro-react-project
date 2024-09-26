import React, { useState } from 'react';
import { addItem } from '~/store/cart/action';
import { useDispatch } from 'react-redux';
import { addItemToWishlist } from '~/store/wishlist/action';

const SubModuleDetailShopping = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const handleAddItemToCart = (e) => {
        e.preventDefault();
        let tempProduct = product;
        tempProduct.quantity = quantity;
        dispatch(addItem({ id: product.id, quantity: quantity }));
    };

    const handleIncreaseItemQty = (e) => {
        e.preventDefault();
        setQuantity(quantity + 1);
    };

    const handleDecreaseItemQty = (e) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddItemToWishlist = (e) => {
        e.preventDefault();
        dispatch(addItemToWishlist(product.id));
    };

    return (
        <div className="ps-product__shopping">
            <figure>
                <div className="form-group--number">
                    <button
                        className="up"
                        onClick={handleIncreaseItemQty}></button>
                    <button
                        className="down"
                        onClick={handleDecreaseItemQty}></button>
                    <input
                        className="form-control"
                        type="text"
                        placeholder={quantity}
                    />
                </div>
                <a
                    className="ps-btn ps-btn--black"
                    href="#"
                    onClick={(e) => handleAddItemToCart(e)}>
                    Add to cart
                </a>
                <a
                    className="ps-product__favorite"
                    href="#"
                    onClick={(e) => handleAddItemToWishlist(e)}>
                    <i className="fa fa-heart-o"></i>
                </a>
            </figure>
            <div className="ps-product__buynow">
                <a
                    className="ps-btn ps-btn--black ps-btn--fullwidth"
                    href="#"
                    onClick={(e) => handleAddItemToCart(e)}>
                    Buy Now
                </a>
            </div>
        </div>
    );
};

export default SubModuleDetailShopping;
