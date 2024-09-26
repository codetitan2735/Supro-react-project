import React from 'react';
import ContainerHomeClassic from '~/components/layouts/ContainerHomeClassic';
import SiteFeatures from '~/components/shared/sections/SiteFeatures';
import HomeBlog from '~/components/shared/sections/HomeBlog';
import Subscribe from '~/components/shared/sections/Subscribe';
import HomeClassicPromotions from '~/components/partials/homepages/home-classic/HomeClassicPromotions';
import HomeClassicProducts from '~/components/partials/homepages/home-classic/HomeClassicProducts';
import HomeClassicCategories from '~/components/partials/homepages/home-classic/HomeClassicCategories';
import HomeClassicBanners from '~/components/partials/homepages/home-classic/HomeClassicBanners';

const HomeClassic = () => {
    return (
        <ContainerHomeClassic title="Home Classic">
            <HomeClassicBanners />
            <SiteFeatures />
            <HomeClassicCategories />
            <HomeClassicProducts />
            <HomeClassicPromotions />
            <HomeBlog />
            <Subscribe />
        </ContainerHomeClassic>
    );
};

export default HomeClassic;
