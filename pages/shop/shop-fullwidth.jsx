import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import PanelShopFilter from '~/components/shared/panel/PanelShopFilter';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { connect } from 'react-redux';
import ModuleShopItems from '~/components/partials/shop/modules/ModuleShopItems';
import ModuleShopItemsListView from '~/components/partials/shop/modules/ModuleShopItemsListView';
import ModuleShopActions from '~/components/partials/shop/modules/ModuleShopActions.jxs';

const ShopFullwidthPage = ({ isGridView }) => {
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop Fullwidth',
        },
    ];

    let shopItemsView;
    if (isGridView) {
        shopItemsView = <ModuleShopItems columns={4} />;
    } else {
        shopItemsView = <ModuleShopItemsListView columns={4} />;
    }

    return (
        <ContainerPage title="Shop Fullwidth">
            <div className="ps-shop ps-shop--fullwidth">
                <div className="container-fluid">
                    <div className="ps-shop__header">
                        <div className="ps-shop__left">
                            <h1>Shop</h1>
                            <BreadCrumb breacrumb={breadcrumb} />
                        </div>
                        <div className="ps-shop__right">
                            <p>
                                <strong>25</strong> Products Found
                            </p>
                            <ModuleShopActions />
                        </div>
                    </div>
                    <PanelShopFilter />
                    <div className="ps-shop__content">
                        {shopItemsView}
                        {/*<ShopGridItems queries={query} />*/}
                    </div>
                    <div className="ps-shop__footer">
                        <a className="ps-link--under" href="#">
                            Discover more
                        </a>
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default connect((state) => state.shop)(ShopFullwidthPage);
