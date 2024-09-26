import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import ModuleShopSiteFeatures from '~/components/partials/shop/modules/ModuleShopSiteFeatures';
import ModuleShopCategories from '~/components/partials/shop/modules/ModuleShopCategories';

const ShopCategoriesPage = () => {
    return (
        <ContainerPage title="Shop Categories">
            <div className="ps-page">
                <div
                    className="ps-hero--shop bg--top"
                    data-background="img/banner/shop/shop-categories-bg.jpg"
                    style={{
                        backgroundImage: `url(/static/img/banner/shop/shop-categories-bg.jpg)`,
                    }}>
                    <h1>Shop Categories</h1>
                </div>
            </div>
            <div className="ps-shop--categories">
                <div className="container">
                    <ModuleShopSiteFeatures />
                    <ModuleShopCategories />
                </div>
            </div>
        </ContainerPage>
    );
};

export default ShopCategoriesPage;
