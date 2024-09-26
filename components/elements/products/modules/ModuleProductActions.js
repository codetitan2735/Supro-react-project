import React, { useState } from 'react';
import { Modal } from 'antd';
import ProductQuickView from '~/components/elements/products/ProductQuickview';
import { useDispatch, connect } from 'react-redux';
import { addItem } from '~/store/cart/action';
import { addItemToWishlist } from '~/store/wishlist/action';

const ModuleProductActions = ({ product }) => {
    const dispatch = useDispatch();
    const [isQuickView, setIsQuickView] = useState(false);

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        dispatch(addItem({ id: product.id, quantity: 1 }));
    };

    const handleAddItemToWishlist = (e) => {
        e.preventDefault();
        dispatch(addItemToWishlist(product.id));
    };

    const handleShowQuickView = (e) => {
        e.preventDefault();
        setIsQuickView(true);
    };

    const handleHideQuickView = (e) => {
        e.preventDefault();
        setIsQuickView(false);
    };
    return (
        <div className="ps-product__actions">
            <a href="#" onClick={handleAddItemToCart}>
                Add to cart
            </a>
            <ul>
                <li>
                    <a href="#" onClick={handleAddItemToWishlist}>
                        <i className="icon-heart"></i>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={handleShowQuickView}>
                        <i className="icon-frame-expand"></i>
                    </a>
                </li>
            </ul>
            <Modal
                centered
                footer={null}
                width={1024}
                onCancel={(e) => handleHideQuickView(e)}
                visible={isQuickView}
                closeIcon={<i className="icon icon-cross2"></i>}>
                <ProductQuickView productID={product.id} />
            </Modal>
        </div>
    );
};

export default connect()(ModuleProductActions);
