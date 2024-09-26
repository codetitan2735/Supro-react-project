import React from 'react';
import ContainerHomeDefault from '~/components/layouts/ContainerHomeDefault';
import Subscribe from '~/components/shared/sections/Subscribe';
import HomeDefaultCollection from '~/components/partials/homepages/home-default/HomeDefaultCollection';
import InstagramImages from '~/components/shared/sections/InstagramImages';
import HomeBlog from '~/components/shared/sections/HomeBlog';
import HomeDefaultDealOfDay from '~/components/partials/homepages/home-default/HomeDefaultDealOfDay';
import HomeDefaultNewArrival from '~/components/partials/homepages/home-default/HomeDefaultNewArrival';
import HomeDefaultBanner from '~/components/partials/homepages/home-default/HomeDefaultBanner';
import HomeDefaultTopSellers from '~/components/partials/homepages/home-default/HomeDefaultTopSellers';

const HomeDefaultPage = () => {
    return (
        <ContainerHomeDefault title="Minimalist eCommerce React Template">
            <HomeDefaultBanner />
            <HomeDefaultCollection />
            <HomeDefaultTopSellers collectionSlug="home-default-top-seller" />
            <HomeDefaultNewArrival collectionSlug="new-arrival" />
            <HomeDefaultDealOfDay />
            <HomeBlog />
            <Subscribe />
            <InstagramImages />
        </ContainerHomeDefault>
    );
};

export default HomeDefaultPage;
