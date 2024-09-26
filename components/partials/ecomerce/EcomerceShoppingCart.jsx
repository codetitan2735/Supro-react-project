import React from 'react';
import ModuleEcomerceTableCartItems from '~/components/partials/ecomerce/modules/ModuleEcomerceTableCartItems';
import Link from 'next/link';
import ModuleEcomerceSummary from '~/components/partials/ecomerce/modules/ModuleEcomerceSummary';

const EcomerceShoppingCart = () => {
    return (
        <div className="ps-shopping-cart">
            <ModuleEcomerceTableCartItems />

            <div className="ps-section__content">
                <div className="ps-section__actions">
                    <figure>
                        <Link href="/shop">
                            <a className="ps-btn ps-btn--outline">
                                Continue shopping
                            </a>
                        </Link>
                    </figure>
                    <div className="form-group">
                        <label>Discount Code</label>
                        <div className="form-group__content">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Enter your code"
                            />
                            <a href="#">Apply</a>
                        </div>
                    </div>
                </div>
                <ModuleEcomerceSummary />
            </div>
        </div>
    );
};

export default EcomerceShoppingCart;
