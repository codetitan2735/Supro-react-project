import React, { useEffect, useState } from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import PanelShopFilter from '~/components/shared/panel/PanelShopFilter';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { connect } from 'react-redux';
import ModuleShopActions from '~/components/partials/shop/modules/ModuleShopActions.jxs';
import ModuleShopItems from '~/components/partials/shop/modules/ModuleShopItems';
import ModuleShopItemsListView from '~/components/partials/shop/modules/ModuleShopItemsListView';
import { getTotalRecords } from '~/repositories/ProductRepository.js';
import DrawerShopFilter from '~/components/shared/drawers/DrawerShopFilter';

const ShopDefaultPage = ({ query, isGridView }) => {
    const [pageSize, setPageSize] = useState(12);
    const [totalRecords, setTotalRecords] = useState(0);

    function handleLoadMore(e) {
        e.preventDefault();
        setPageSize(pageSize + 12);
    }

    async function getProductTotalRecord() {
        const total = await getTotalRecords();
        setTotalRecords(total);
    }

    useEffect(() => {
        getProductTotalRecord();
    }, []);

    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
        },
    ];

    let shopItemsView, paginationView;
    if (totalRecords) {
        if (pageSize < totalRecords) {
            paginationView = (
                <div className="ps-shop__footer">
                    <a
                        className="ps-link--under"
                        href="#"
                        onClick={(e) => handleLoadMore(e)}>
                        Discover more
                    </a>
                </div>
            );
        }
    }
    if (isGridView) {
        shopItemsView = <ModuleShopItems columns={4} pageSize={pageSize} />;
    } else {
        shopItemsView = <ModuleShopItemsListView columns={4} />;
    }

    return (
        <ContainerPage title="Shop page">
            <div className="ps-shop">
                <div className="container">
                    <div className="ps-shop__header">
                        <div className="ps-shop__left">
                            <h1>Shop</h1>
                            <BreadCrumb breacrumb={breadcrumb} />
                        </div>
                        <div className="ps-shop__right">
                            <ModuleShopActions total={totalRecords} />
                        </div>
                    </div>
                    <PanelShopFilter />
                    <div className="ps-shop__content">{shopItemsView}</div>
                    {paginationView}
                </div>
            </div>
            <DrawerShopFilter />
        </ContainerPage>
    );
};

ShopDefaultPage.getInitialProps = async ({ query }) => {
    return { query: query };
};

export default connect((state) => state.shop)(ShopDefaultPage);
