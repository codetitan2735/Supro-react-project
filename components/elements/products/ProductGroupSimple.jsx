import React from 'react';
import ProductOutSide from '~/components/elements/products/ProductOutSide';

export const ProductGroupSimple = ({ items, reversed }) => {
    let groupItems;
    groupItems = items.map((item, index) => {
        if (index % 2 === 0) {
            return (
                <div
                    className={
                        reversed
                            ? 'col-xl-9 col-lg-8 col-6'
                            : 'col-xl-3 col-lg-4 col-6'
                    }
                    key={item.id}>
                    <ProductOutSide
                        classes={reversed ? 'large' : 'small'}
                        product={item}
                    />
                </div>
            );
        } else {
            return (
                <div
                    className={
                        reversed
                            ? 'col-xl-3 col-lg-4 col-6'
                            : 'col-xl-9 col-lg-8 col-6'
                    }
                    key={item.id}>
                    <ProductOutSide
                        classes={reversed ? 'small' : 'large'}
                        product={item}
                    />
                </div>
            );
        }
    });

    return (
        <div className={`ps-product-box ${reversed ? 'reverse' : ''}`}>
            <div className="row">{groupItems}</div>
        </div>
    );
};
