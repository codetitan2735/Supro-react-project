import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';
import {
    SPGetProductBadges,
    SPGetProductPrice,
    SPGetProductThumbailImages,
} from '~/utilities/product-helper';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';

const Product = ({ product }) => {
    // Views
    console.log(product);
    const priceView = SPGetProductPrice(product);
    const thumbnailImages = SPGetProductThumbailImages(product, 'small');

    /*const badgeView = WPProductBadgeView(product);*/
    const badges = SPGetProductBadges(product);

    return (
        <div className="ps-product">
            <div className="ps-product__thumbnail">
                {thumbnailImages}
                <Link href={`/product/${product.id}`}>
                    <a className="ps-product__overlay"></a>
                </Link>
                {badges}
                <ModuleProductActions product={product} />
            </div>
            <div className="ps-product__content">
                <Link href={`/product/${product.id}`}>
                    <a className="ps-product__title">{product.title}</a>
                </Link>
                <div className="ps-product__rating">
                    <Rating />
                </div>
                {priceView}
            </div>
        </div>
    );
};

export default connect()(Product);
