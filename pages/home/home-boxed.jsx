import React from 'react';

import InstagramImages from '~/components/shared/sections/InstagramImages';
import HeaderBoxed from '~/components/shared/headers/HeaderBoxed';
import SiteFeatures from '~/components/shared/sections/SiteFeatures';
import ContainerHomeBoxed from '~/components/layouts/ContainerHomeBoxed';
import Subscribe from '~/components/shared/sections/Subscribe';
import HomeBoxedCollections from '~/components/partials/homepages/home-boxed/HomeBoxedCollections';
import SitePartners from '~/components/shared/sections/SitePartners';
import HomeBoxedProducts from '~/components/partials/homepages/home-boxed/HomeBoxedProducts';
import HomeBoxedBanners from '~/components/partials/homepages/home-boxed/HomeBoxedBanners';

const HomeBoxedPage = () => {
    return (
        <ContainerHomeBoxed title="Home Boxed">
            <HeaderBoxed />
            <HomeBoxedBanners />
            <SiteFeatures />
            <HomeBoxedCollections />
            <HomeBoxedProducts />
            <SitePartners />
            <InstagramImages />
            <Subscribe />
        </ContainerHomeBoxed>
    );
};

export default HomeBoxedPage;
