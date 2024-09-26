import React, { useEffect, useState } from 'react';
import CollectionRepository from '~/repositories/CollectionRepository';
import ProductRepository from '~/repositories/ProductRepository';
import Product from '~/components/elements/products/Product';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import ProductOnSidebar from '~/components/elements/products/ProductOnSidebar';

const WidgetShopProducts = ({ collectionSlug }) => {
    const [productItems, setProductItems] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getProduct() {
        let queries, SPProducts;
        if (collectionSlug !== undefined) {
            SPProducts = await CollectionRepository.getProductsByCollectionSlug(
                collectionSlug
            );
        } else {
            queries = {
                _limit: 4,
            };
            SPProducts = await ProductRepository.getProducts(queries);
        }

        if (SPProducts) {
            setTimeout(function () {
                setLoading(false);
            }, 200);
            setProductItems(SPProducts.items);
            return SPProducts;
        } else {
            setProductItems(null);
            return null;
        }
    }

    useEffect(() => {
        getProduct();
    }, []);

    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            productItemsView = productItems.map((item) => (
                <ProductOnSidebar product={item} key={item.id} />
            ));
        } else {
            productItemsView = <p>No product(s) found.</p>;
        }
    } else {
        productItemsView = <p>Loading...</p>;
    }

    return (
        <aside className="widget widget_shop widget_product">
            <h3 className="widget-title">Products</h3>
            <div className="widget__content">{productItemsView}</div>
        </aside>
    );
};

export default WidgetShopProducts;
