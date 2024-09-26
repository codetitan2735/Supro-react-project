import React from 'react';
import ModuleShopItems from '~/components/partials/shop/modules/ModuleShopItems';

const HomeBoxedProducts = () => {
    return (
        <div className="ps-home-product">
            <div className="container">
                <div className="ps-section__header">
                    <h3>Featured Products</h3>
                    <ul>
                        <li className="active">
                            <a href="#">Best Seller</a>
                        </li>
                        <li>
                            <a href="#">New Arrival</a>
                        </li>
                        <li>
                            <a href="#">Most Popular</a>
                        </li>
                    </ul>
                </div>
                <div className="ps-section__content">
                    <ModuleShopItems columns={4} pageSize={4} />
                </div>
                <div className="ps-section__footer text-center">
                    <a href="#">Discover more</a>
                </div>
            </div>
        </div>
    );
};

export default HomeBoxedProducts;
