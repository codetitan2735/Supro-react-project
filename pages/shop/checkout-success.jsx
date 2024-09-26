import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';

import Link from 'next/link';
const CheckoutSuccessPage = () => {
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Checkout',
            url: '/shop/checkout',
        },
        {
            text: 'Checkout success',
        },
    ];
    return (
        <ContainerPage title="Checkout">
            <div className="ps-page--default">
                <div className="container">
                    <div className="ps-page__header">
                        <h3>Checkout Success</h3>
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                    <div className="ps-page__content text-center">
                        <h3>Your order has been proceed. Thank you!</h3>
                        <Link href="/shop">
                            <a className="ps-btn ps-btn--sm ps-btn--success ps-btn--curve">
                                Continue Shoppping
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default CheckoutSuccessPage;
