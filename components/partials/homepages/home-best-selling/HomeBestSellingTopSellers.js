import React, { useEffect, useState } from 'react';
import CollectionRepository from '~/repositories/CollectionRepository';
import ProductRepository from '~/repositories/ProductRepository';
import { ProductGroupSimple } from '~/components/elements/products/ProductGroupSimple';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';

const HomeBestSellingTopSellers = ({ collectionSlug, limit = 4 }) => {
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
                _limit: limit,
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
            <div className="col-sm-6 col-12 " key={item}>
                <SkeletonProduct />
            </div>
        ));
    }
    return (
        <div className="ps-home-top-sellers">
            <div className="container">
                <div className="ps-section__content">{productsView}</div>
                <div className="ps-section__footer text-center">
                    <a className="ps-link--under" href="#">
                        Show All Products
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeBestSellingTopSellers;
