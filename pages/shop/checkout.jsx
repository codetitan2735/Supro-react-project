import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import FormCheckout from '~/components/shared/forms/FormCheckout';

const CheckoutPage = () => {
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Checkout',
        },
    ];

    return (
        <ContainerPage title="Checkout">
            <div className="ps-page--default">
                <div className="container">
                    <div className="ps-page__header">
                        <h3>Checkout</h3>
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                    <div className="ps-page__content">
                        <FormCheckout />
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default CheckoutPage;
