import React from 'react';
import ModuleDetailContent from '~/components/elements/products/detail/ModuleDetailContent';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ModuleDetailThumbnail from '~/components/elements/products/detail/ModuleDetailThumbnail';
import ModuleDetailInformation from '~/components/elements/products/detail/ModuleDetailInformation';

const ProductDetail = ({ product }) => {
    const breadCrumb = [
        {
            id: 1,
            text: 'Home',
            url: '/',
        },
        {
            id: 2,
            text: 'Shop',
            url: '/shop',
        },
        {
            id: 3,
            text: product ? product.title : 'loading...',
        },
    ];
    return (
        <div className="ps-product--detail has-background">
            <div className="ps-product__background">
                <div className="container">
                    <div className="ps-product__nav">
                        <BreadCrumb breacrumb={breadCrumb} />
                    </div>
                    <div className="ps-product__header">
                        <ModuleDetailThumbnail product={product} />
                        <ModuleDetailInformation product={product} />
                    </div>
                </div>
            </div>
            <ModuleDetailContent />
        </div>
    );
};

export default ProductDetail;
