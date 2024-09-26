import React, { useEffect, useState } from 'react';
import ProductRepository from '~/repositories/ProductRepository';
import CollectionRepository from '~/repositories/CollectionRepository';
import ProductHorizontal from '~/components/elements/products/ProductHorizontal';

const ModuleShopItemsListView = ({ collectionSlug, pageSize = 12 }) => {
    const [loading, setLoading] = useState(true);
    const [productItems, setProductItems] = useState(null);

    async function getProduct() {
        let queries, SPProducts;
        if (collectionSlug !== undefined) {
            SPProducts = await CollectionRepository.getProductsByCollectionSlug(
                collectionSlug
            );
        } else {
            queries = {
                _limit: pageSize,
            };
            SPProducts = await ProductRepository.getProducts(queries);
        }

        if (SPProducts) {
            setTimeout(function () {
                setLoading(false);
            }, 200);
            if (SPProducts.items.length > 0) {
                setProductItems(SPProducts.items);
            }
            return SPProducts;
        } else {
            setProductItems(null);
            return null;
        }
    }

    useEffect(() => {
        getProduct();
    }, [collectionSlug]);

    // Views
    let productItemsView;

    if (!loading && productItems) {
        if (productItems.length > 0) {
            productItemsView = productItems.map((item) => {
                return <ProductHorizontal product={item} key={item.id} />;
            });
        } else {
            productItemsView = <p>No product(s) found.</p>;
        }
    } else {
        productItemsView = <p>Loading...</p>;
    }

    return <div className="ps-shop-items">{productItemsView}</div>;
};

export default ModuleShopItemsListView;
