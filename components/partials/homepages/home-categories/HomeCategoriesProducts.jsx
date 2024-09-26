import React from 'react';
import ModuleShopItems from '~/components/partials/shop/modules/ModuleShopItems';

const HomeCategoriesProducts = () => {
    return (
        <div className="ps-section ps-home-product">
            <div className="container">
                <div className="ps-section__header">
                    <figure>
                        <figcaption>Popular Products</figcaption>
                        <p>Browse the huge variety of our products</p>
                    </figure>
                    <ul>
                        <li className="active">
                            <a href="#">All product</a>
                        </li>
                        <li>
                            <a href="#">Clothings</a>
                        </li>
                        <li>
                            <a href="#">Bags</a>
                        </li>
                        <li>
                            <a href="#">Shoes</a>
                        </li>
                        <li>
                            <a href="#">More Accesories</a>
                        </li>
                    </ul>
                </div>
                <div className="ps-section__content">
                    <ModuleShopItems columns={4} pageSize={4} />
                </div>
            </div>
        </div>
    );
};

export default HomeCategoriesProducts;
