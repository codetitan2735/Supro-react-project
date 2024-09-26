import React from 'react';
import ContainerHomeFullWidth from '~/components/layouts/ContainerHomeFullwidth';
import HomeFullwidthProducts from '~/components/partials/homepages/home-fullwidth/HomeFullwidthProducts';
import HomeFullwidthBanners from '~/components/partials/homepages/home-fullwidth/HomeFullwidthBanners';

const HomeFullwidthPage = () => {
    return (
        <ContainerHomeFullWidth title="Home Fullwidth">
            <HomeFullwidthBanners />
            <HomeFullwidthProducts />
        </ContainerHomeFullWidth>
    );
};

export default HomeFullwidthPage;
