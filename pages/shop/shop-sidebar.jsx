import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { connect } from 'react-redux';
import ModuleSidebarShop from '~/components/partials/shop/modules/ModuleSidebarShop';
import ModuleShopContent from '~/components/partials/shop/modules/ModuleShopContent';
import ModuleShopActions from '~/components/partials/shop/modules/ModuleShopActions.jxs';
import ModuleShopItems from '~/components/partials/shop/modules/ModuleShopItems';
import ModuleShopItemsListView from '~/components/partials/shop/modules/ModuleShopItemsListView';

const ShopSidebarPage = ({ isGridView }) => {
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop Sidebar',
        },
    ];

    let shopItemsView;
    if (isGridView) {
        shopItemsView = <ModuleShopItems columns={4} />;
    } else {
        shopItemsView = <ModuleShopItemsListView columns={4} />;
    }

    return (
        <ContainerPage title="Shop Banner">
            <div className="ps-shop ps-shop--sidebar">
                <div className="container">
                    <div className="ps-shop__container">
                        <ModuleSidebarShop />
                        <div className="ps-shop__wrapper">
                            <ModuleShopContent />
                            <div className="ps-shop__header">
                                <div className="ps-shop__left">
                                    <h1>Shop</h1>
                                    <BreadCrumb breacrumb={breadcrumb} />
                                </div>
                                <ModuleShopActions />
                            </div>
                            <div className="ps-shop__content">
                                {shopItemsView}
                            </div>
                            <div className="ps-shop__footer">
                                <a className="ps-link--under" href="#">
                                    Discover more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default connect((state) => state.shop)(ShopSidebarPage);
