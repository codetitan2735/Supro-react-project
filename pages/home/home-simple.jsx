import React from 'react';
import ContainerHomeSimple from '~/components/layouts/ContainerHomeSimple';
import SiteFeatures from '~/components/shared/sections/SiteFeatures';
import HomeBlog from '~/components/shared/sections/HomeBlog';
import HomeSimplePromotions from '~/components/partials/homepages/home-simple/HomeSimplePromotions';
import HomeSimpleProducts from '~/components/partials/homepages/home-simple/HomeSimpleProducts';
import HomeSimpleCollection from '~/components/partials/homepages/home-simple/HomeSimpleCollection';
import HomeSimpleBanners from '~/components/partials/homepages/home-simple/HomeSimpleBanners';

const HomeSimplePage = () => {
    return (
        <ContainerHomeSimple title="Home Simple">
            <HomeSimpleBanners />
            <SiteFeatures />
            <HomeSimpleCollection />
            <HomeSimpleProducts />
            <HomeSimplePromotions />
            <HomeBlog />
        </ContainerHomeSimple>
    );
};

export default HomeSimplePage;
