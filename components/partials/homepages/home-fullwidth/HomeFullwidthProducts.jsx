import React from 'react';
import ModuleShopItems from '~/components/partials/shop/modules/ModuleShopItems';

const HomeFullwidthProducts = () => {
    return (
        <div className="ps-home-product--fullwidth ps-tab-root">
            <div className="ps-section__header">
                <div className="container">
                    <ul className="ps-tab-list">
                        <li className="active">
                            <a href="#tab-1">Best Seller</a>
                        </li>
                        <li>
                            <a href="#tab-2">New Arrivals</a>
                        </li>
                        <li>
                            <a href="#tab-3">Most Popular</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid">
                <ModuleShopItems columns={6} pageSize={12} />
                <div className="ps-section__footer text-center">
                    <a className="ps-link--under" href="#">
                        Discover More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeFullwidthProducts;
