import React from 'react';
import Link from 'next/link';

import {
    SPGetProductPrice,
    SPGetProductThumbailImage,
} from '~/utilities/product-helper';

const ProductOutSide = ({ product, classes }) => {
    // Views
    const priceView = SPGetProductPrice(product);
    const thumbnailImage = SPGetProductThumbailImage(product, 'medium');

    return (
        <div className={`ps-product--outside ${classes}`}>
            <div className="ps-product__thumbnail">
                {thumbnailImage}
                <Link href={`/product/${product.id}`}>
                    <a className="ps-product__overlay"></a>
                </Link>
            </div>
            <div className="ps-product__content">
                <Link href={`/product/${product.id}`}>
                    <a className="ps-product__title">{product.title}</a>
                </Link>
                {priceView}
                <Link href={`/product/${product.id}`}>
                    <a className="ps-link--under">Shop Now</a>
                </Link>
            </div>
        </div>
    );
};

export default ProductOutSide;
