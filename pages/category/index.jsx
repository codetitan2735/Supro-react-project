import React, { useEffect, useState } from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ModuleShopActions from '~/components/partials/shop/modules/ModuleShopActions.jxs';
import ProductRepository from '~/repositories/ProductRepository.js';
import DrawerShopFilter from '~/components/shared/drawers/DrawerShopFilter';
import { useRouter } from 'next/router';
import ModuleSidebarShop from '~/components/partials/shop/modules/ModuleSidebarShop';
import ModuleShopContent from '~/components/partials/shop/modules/ModuleShopContent';
import Product from '~/components/elements/products/Product';

const CategoryPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [category, setCategory] = useState(null);
    const [categoryName, setCategoryName] = useState('Category Page');
    const [loading, setLoading] = useState(true);

    async function getCategoryBySlug(payload) {
        const responseData = await ProductRepository.getPrductCategoryBySlug(
            payload
        );
        if (responseData) {
            setCategory(responseData);
            setCategoryName(responseData.data.name);
            setTimeout(function () {
                setLoading(false);
            }, 200);
        } else {
            return null;
        }
    }

    useEffect(() => {
        if (slug && slug !== '') {
            getCategoryBySlug(slug);
        }
    }, [slug]);

    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: categoryName,
        },
    ];

    let shopItemsView;

    if (!loading) {
        if (category && category.products.length > 0) {
            shopItemsView = category.products.map((item) => (
                <div className="col-md-4 col-sm-6 col-6" key={item.id}>
                    <Product product={item} />
                </div>
            ));
        } else {
            shopItemsView = <p>No Product found.</p>;
        }
    } else {
        shopItemsView = <p>Loading data...</p>;
    }

    return (
        <ContainerPage title={categoryName}>
            <div className="ps-shop ps-shop--sidebar">
                <div className="container">
                    <div className="ps-shop__container">
                        <ModuleSidebarShop />
                        <div className="ps-shop__wrapper">
                            <ModuleShopContent />
                            <div className="ps-shop__header">
                                <div className="ps-shop__left">
                                    <h1>Shop</h1>
                                    <BreadCrumb breacrumb={breadcrumb} />
                                </div>
                                <ModuleShopActions
                                    total={
                                        category && category.products.length > 0
                                            ? category.products.length
                                            : 0
                                    }
                                />
                            </div>
                            <div className="ps-shop__content">
                                <div className="ps-shop-items row">
                                    {shopItemsView}
                                </div>
                            </div>
                            <div className="ps-shop__footer">
                                <a className="ps-link--under" href="#">
                                    Discover more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DrawerShopFilter />
        </ContainerPage>
    );
};

export default CategoryPage;
