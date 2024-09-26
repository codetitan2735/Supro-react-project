import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import EcomerceShoppingCart from '~/components/partials/ecomerce/EcomerceShoppingCart';

const ShoppingCartPage = () => {
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
        },
    ];

    return (
        <ContainerPage title="Shopping Cart">
            <div className="ps-page--default">
                <div className="container">
                    <div className="ps-page__header">
                        <h3>Shopping Cart</h3>
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                    <div className="ps-page__content">
                        <EcomerceShoppingCart />
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default ShoppingCartPage;
