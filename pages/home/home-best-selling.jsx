import React from 'react';
import ContainerHomeBestSelling from '~/components/layouts/ContainerHomeBestSelling';
import HomeBestSellingIntro from '~/components/partials/homepages/home-best-selling/HomeBestSellingIntro';
import HomeBestSellingTopSellers from '~/components/partials/homepages/home-best-selling/HomeBestSellingTopSellers';

const HomeBestSelling = () => {
    return (
        <ContainerHomeBestSelling title="Home Best Selling">
            <HomeBestSellingIntro />
            <HomeBestSellingTopSellers limit={6} />
        </ContainerHomeBestSelling>
    );
};

export default HomeBestSelling;
