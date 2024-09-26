import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ModuleEcomerceTableWishlist from '~/components/partials/ecomerce/modules/ModuleEcomerceTableWishlist';

const WishlistPage = () => {
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
            url: '/shop',
        },
        {
            text: 'Wishlist',
        },
    ];

    return (
        <ContainerPage title="Wishlist">
            <div className="ps-page--default">
                <div className="container">
                    <div className="ps-page__header">
                        <h3>Wishlist</h3>
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                    <div className="ps-page__content">
                        <ModuleEcomerceTableWishlist />
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default WishlistPage;
