import React, { useEffect, useState } from 'react';
import CollectionRepository from '~/repositories/CollectionRepository';
import ProductRepository from '~/repositories/ProductRepository';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { ProductGroupSimple } from '~/components/elements/products/ProductGroupSimple';

const HomeDefaultTopSellers = ({ collectionSlug, pageSize = 4 }) => {
    const [productItems, setProductItems] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getProduct() {
        let queries, responseData;
        if (collectionSlug !== undefined) {
            responseData = await CollectionRepository.getProductsByCollectionSlug(
                collectionSlug
            );
        } else {
            queries = {
                _limit: pageSize,
            };
            responseData = await ProductRepository.getProducts(queries);
        }

        if (responseData) {
            setTimeout(function () {
                setLoading(false);
            }, 200);
            if (responseData.items.length > 0) {
                setProductItems(responseData.items);
            }
            return responseData;
        } else {
            setProductItems(null);
            return null;
        }
    }

    useEffect(() => {
        getProduct();
    }, []);

    // Views
    let productsView;

    if (!loading) {
        if (productItems && productItems.length > 0) {
            let group = [];

            while (productItems.length > 0) {
                group.push(productItems.splice(0, 2));
            }
            productsView = group.map((item, index) => {
                if (index % 2 === 0) {
                    return <ProductGroupSimple items={item} key={index} />;
                } else {
                    return (
                        <ProductGroupSimple
                            items={item}
                            reversed={true}
                            key={index}
                        />
                    );
                }
            });
        }
    } else {
        productsView = generateTempArray(4).map((item) => (
            <div className="col-sm-6 col-6 " key={item}>
                <SkeletonProduct />
            </div>
        ));
    }
    return (
        <div className="ps-section ps-home-top-sellers">
            <div className="container">
                <div className="ps-section__header">
                    <figure>
                        <figcaption>Top Sellers</figcaption>
                        <p>Browse the huge variety of our products</p>
                    </figure>
                </div>
                <div className="ps-section__content">{productsView}</div>
            </div>
        </div>
    );
};

export default HomeDefaultTopSellers;
