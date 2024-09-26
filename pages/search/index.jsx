import React, { useEffect, useState } from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { connect } from 'react-redux';
import ModuleShopItems from '~/components/partials/shop/modules/ModuleShopItems';
import ProductRepository from '~/repositories/ProductRepository.js';
import Product from '~/components/elements/products/Product';

const SearchPage = ({ query }) => {
    const [pageSize, setPageSize] = useState(12);
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(true);
    const [productItems, setProductItems] = useState(null);

    function handleSetKeyword() {
        if (query && query.keyword !== '') {
            setKeyword(query.keyword);
        } else {
            setKeyword('');
        }
    }

    async function getProductsByKeyword(keyword) {
        handleSetKeyword();
        const queries = {
            title_contains: keyword,
        };
        setLoading(true);
        const SPProducts = await ProductRepository.getProducts(queries);
        if (SPProducts) {
            if (SPProducts.items.length > 0) {
                setProductItems(SPProducts);
            } else {
                setProductItems(null);
            }

            setTimeout(function () {
                setLoading(false);
            }, 500);

            return SPProducts;
        } else {
            setProductItems(null);
            return null;
        }
    }

    useEffect(() => {
        getProductsByKeyword(query.keyword);
    }, [query]);

    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Search Result',
        },
    ];

    let shopItemsView, statusView;
    if (!loading) {
        if (productItems) {
            shopItemsView = <ModuleShopItems columns={4} pageSize={pageSize} />;
            if (productItems.items.length > 0) {
                const items = productItems.items.map((item) => {
                    return (
                        <div className="col-md-3 col-sm-6 col-6" key={item.id}>
                            <Product product={item} />
                        </div>
                    );
                });
                shopItemsView = (
                    <div className="ps-product-items row">{items}</div>
                );
                statusView = (
                    <p>
                        <strong style={{ color: '#000' }}>
                            {productItems.totalItems}
                        </strong>{' '}
                        record(s) found.
                    </p>
                );
            } else {
                shopItemsView = <p>No product(s) found.</p>;
            }
        } else {
            shopItemsView = <p>No product(s) found.</p>;
        }
    } else {
        statusView = <p>Searching...</p>;
    }

    return (
        <ContainerPage title={`Search results for: "${keyword}" `}>
            <div className="ps-shop ps-shop--search">
                <div className="container">
                    <div className="ps-section__top">
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                    <div className="ps-shop__header">
                        <h1>
                            Search result for: "<strong>{keyword}</strong>"
                        </h1>
                    </div>
                    <div className="ps-shop__content">
                        {statusView}
                        {shopItemsView}
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

SearchPage.getInitialProps = async ({ query }) => {
    return { query: query };
};

export default connect((state) => state.shop)(SearchPage);
