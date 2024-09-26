import React from 'react';
import ModuleShopItems from '~/components/partials/shop/modules/ModuleShopItems';

const HomeSimpleProducts = () => {
    return (
        <div className="ps-home-product">
            <div className="container">
                <div className="ps-section__header">
                    <h3>New Arrival</h3>
                    <ul>
                        <li className="active">
                            <a href="#">All Products</a>
                        </li>
                        <li>
                            <a href="#">Furniture</a>
                        </li>
                        <li>
                            <a href="#">Bed & Bath</a>
                        </li>
                        <li>
                            <a href="#">Lighting</a>
                        </li>
                        <li>
                            <a href="#">Tableware</a>
                        </li>
                        <li>
                            <a href="#">Best Selling</a>
                        </li>
                    </ul>
                </div>
                <div className="ps-section__content">
                    <ModuleShopItems columns={3} pageSize={6} />
                </div>
            </div>
        </div>
    );
};

export default HomeSimpleProducts;
