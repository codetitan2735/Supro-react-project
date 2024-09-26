import React from 'react';
import ContainerHomeCategories from '~/components/layouts/ContainerHomeCategories';
import HomeCategoriesShopCategories from '~/components/partials/homepages/home-categories/HomeCategoriesShopCategories';
import HomeCategoriesProducts from '~/components/partials/homepages/home-categories/HomeCategoriesProducts';

const HomeCategoriesPage = () => {
    return (
        <ContainerHomeCategories title="Home Categories">
            <HomeCategoriesShopCategories />
            <HomeCategoriesProducts />
        </ContainerHomeCategories>
    );
};

export default HomeCategoriesPage;
