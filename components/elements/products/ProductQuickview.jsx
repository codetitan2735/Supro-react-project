import React, { useEffect, useState } from 'react';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import ProductRepository from '~/repositories/ProductRepository';
import ModuleDetailThumbnailSimple from '~/components/elements/products/detail/ModuleDetailThumbnailSimple';
import ModuleDetailInformation from '~/components/elements/products/detail/ModuleDetailInformation';

const ProductQuickView = ({ productID }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getProduct(productID) {
        const SPProduct = await ProductRepository.getProductsById(productID);
        if (SPProduct) {
            setProduct(SPProduct);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        } else {
        }
        return SPProduct;
    }

    useEffect(() => {
        getProduct(productID);
    }, []);

    let productQuickviewView;
    if (product && loading === false) {
        productQuickviewView = (
            <div className="ps-product__header">
                <ModuleDetailThumbnailSimple product={product} />
                <ModuleDetailInformation product={product} />
            </div>
        );
    } else {
        productQuickviewView = <SkeletonProductDetail />;
    }

    return (
        <div className="ps-product--detail ps-product--quickview">
            {productQuickviewView}
        </div>
    );
};

export default ProductQuickView;
