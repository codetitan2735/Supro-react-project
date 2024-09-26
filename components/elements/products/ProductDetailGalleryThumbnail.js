import React from 'react';
import ModuleDetailContent from '~/components/elements/products/detail/ModuleDetailContent';
import ModuleDetailThumbnailGallery from '~/components/elements/products/detail/ModuleDetailThumbnailGallery';
import ModuleDetailInformation from '~/components/elements/products/detail/ModuleDetailInformation';

const ProductDetail = ({ product }) => {
    return (
        <div className="ps-product--detail ps-product--gallery">
            <div className="ps-product__header">
                <ModuleDetailThumbnailGallery product={product} />
                <ModuleDetailInformation product={product} />
            </div>
            <ModuleDetailContent />
        </div>
    );
};

export default ProductDetail;
