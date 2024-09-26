import React from 'react';
import ContainerHomeModerm from '~/components/layouts/ContainerHomeModerm';
import HomeModermLastChange from '~/components/partials/homepages/home-moderm/HomeModermLastChange';
import HomeModermProducts from '~/components/partials/homepages/home-moderm/HomeModermProducts';
import HomeModermCollection from '~/components/partials/homepages/home-moderm/HomeModermCollection';
import HomeModermBanners from '~/components/partials/homepages/home-moderm/HomeModermBanners';
import HomeModermDealOfDay from '~/components/partials/homepages/home-moderm/HomeModermDealOfDay';

const HomeModermPage = () => {
    return (
        <ContainerHomeModerm title="Home Moderm">
            <HomeModermBanners />
            <HomeModermCollection />
            <HomeModermProducts />
            <HomeModermDealOfDay />
            <HomeModermLastChange />
        </ContainerHomeModerm>
    );
};

export default HomeModermPage;
