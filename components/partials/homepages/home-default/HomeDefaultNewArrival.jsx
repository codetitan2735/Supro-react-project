import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import Product from '~/components/elements/products/Product';
import { getProductHelper } from '~/utilities/fetching-data-helpers';
import { generateTempArray } from '~/utilities/common-helpers';

const HomeDefaultNewArrival = ({ collectionSlug, pageSize }) => {
    const [productItems, setProductItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(1);

    async function getProduct() {
        const products = await getProductHelper(collectionSlug, pageSize);
        setProductItems(products);
        setTimeout(function () {
            setLoading(false);
        }, 200);
    }

    async function handleChangeProductGroup(e, catID, pageSize) {
        e.preventDefault();
        setLoading(true);
        setActiveCategory(catID);
        console.log({ pageSize });
        if (pageSize !== null) {
            console.log('call by page size');
            const products = await getProductHelper(undefined, pageSize);
            setProductItems(products);
            setTimeout(function () {
                setLoading(false);
            }, 200);
        } else {
            const products = await getProductHelper(collectionSlug, null);
            setProductItems(products);
            setTimeout(function () {
                setLoading(false);
            }, 200);
        }
    }

    useEffect(() => {
        getProduct();
    }, []);

    const categoriesItems = [
        {
            id: 1,
            text: 'All Product',
            pageSize: null,
        },
        {
            id: 2,
            text: 'Clothing',
            pageSize: 4,
        },
        {
            id: 3,
            text: 'Bags',
            pageSize: 5,
        },
        {
            id: 4,
            text: 'Shoes',
            pageSize: 6,
        },
        {
            id: 5,
            text: 'Shoes',
            pageSize: 2,
        },
    ];

    // views
    let productItemsView, categoriesView;
    categoriesView = categoriesItems.map((item) => (
        <li
            className={item.id === activeCategory ? 'active' : ''}
            key={item.id}>
            <a
                href="/"
                onClick={(e) =>
                    handleChangeProductGroup(e, item.id, item.pageSize)
                }>
                {item.text}
            </a>
        </li>
    ));
    if (!loading) {
        if (productItems && productItems.items.length > 0) {
            const products = productItems.items.map((item, index) => {
                if (index < 6) {
                    return (
                        <div
                            className="col-xl-4 col-lg-4 col-sm-3 col-6"
                            key={item.id}>
                            <Product product={item} />
                        </div>
                    );
                }
            });
            productItemsView = <div className="row">{products}</div>;
        } else {
            productItemsView = <p>No product(s) found.</p>;
        }
    } else {
        const skeletonItems = generateTempArray(6).map((item) => (
            <div className="col-xl-4 col-lg-4 col-sm-3 col-6" key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletonItems}</div>;
    }

    return (
        <div className="ps-section ps-home-product">
            <div className="container">
                <div className="ps-section__header">
                    <figure>
                        <figcaption>New Arrival</figcaption>
                        <p>Browse the huge variety of our products</p>
                    </figure>
                    <ul>{categoriesView}</ul>
                </div>
                <div className="ps-section__content">
                    {productItemsView}
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 "></div>
                    </div>
                </div>
                <div className="ps-section__footer">
                    <Link href="/shop">
                        <a className="ps-link--under">Discover more</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeDefaultNewArrival;
