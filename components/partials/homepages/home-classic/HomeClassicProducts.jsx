import React from 'react';
import ModuleShopItems from '~/components/partials/shop/modules/ModuleShopItems';

const HomeClassicProducts = () => {
    return (
        <div className="ps-section ps-home-product">
            <div className="ps-section__container">
                <div className="container">
                    <div className="ps-section__header">
                        <figure>
                            <figcaption>New Arrival</figcaption>
                            <p>Browse the huge variety of our products</p>
                        </figure>
                    </div>
                    <div className="ps-section__navigation">
                        <ul>
                            <li className="active">
                                <a href="#">All Products</a>
                            </li>
                            <li>
                                <a href="#">Clothing</a>
                            </li>
                            <li>
                                <a href="#">Bags</a>
                            </li>
                            <li>
                                <a href="#">Shoes</a>
                            </li>
                            <li>
                                <a href="#">More Accessories</a>
                            </li>
                        </ul>
                        <a className="ps-link--under" href="shop-default.html">
                            All products
                        </a>
                    </div>
                    <div className="ps-section__content">
                        <ModuleShopItems columns={3} pageSize={6} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeClassicProducts;
