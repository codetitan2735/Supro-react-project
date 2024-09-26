import React from 'react';
import ModuleDetailContent from '~/components/elements/products/detail/ModuleDetailContent';
import ModuleDetailThumbnail from '~/components/elements/products/detail/ModuleDetailThumbnail';
import ModuleDetailInformation from '~/components/elements/products/detail/ModuleDetailInformation';

const ProductDetailSidebar = ({ product }) => {
    return (
        <div className="ps-product--detail">
            <div className="ps-product__header">
                <ModuleDetailThumbnail product={product} />
                <ModuleDetailInformation product={product} />
            </div>
            <ModuleDetailContent />
        </div>
    );
};

export default ProductDetailSidebar;
