import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import ContainerPage from '~/components/layouts/ContainerPage';
import ProductRepository from '~/repositories/ProductRepository';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import RelatedProducts from '~/components/partials/products/RelatedProducts';
import ProductDetailWithBackground from '~/components/elements/products/ProductDetailWithBackground';

const ProductDetailWithBackgroundPage = ({ query }) => {
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getProduct(productID) {
        const SPProduct = await ProductRepository.getProductsById(productID);
        if (SPProduct) {
            setProduct(SPProduct);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        } else {
            await router.push('/page/page-404', '/404');
        }
        return SPProduct;
    }

    async function getProductOnChangeURL(url) {
        const nextPid = url.split('/').pop();
        if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
            setLoading(true);
            await getProduct(nextPid);
        }
    }

    useEffect(() => {
        const { id } = query;

        if (isNaN(id)) {
            Router.push('/page/page-404');
        }

        if (query) {
            getProduct(id);
        }

        router.events.on('routeChangeStart', getProductOnChangeURL);

        return () => {
            router.events.off('routeChangeStart', getProductOnChangeURL);
        };
    }, []);

    // View area
    let productView;
    const breadCrumb = [
        {
            id: 1,
            text: 'Home',
            url: '/',
        },
        {
            text: product ? product.name : 'loading...',
        },
    ];
    if (loading || product === null) {
        productView = (
            <div className="container">
                <SkeletonProductDetail />
            </div>
        );
    } else {
        productView = <ProductDetailWithBackground product={product} />;
    }

    return (
        <ContainerPage title="Product">
            <div className="ps-page ps-page--product-detail has-background">
                {productView}
                <div className="container">
                    <RelatedProducts />
                </div>
            </div>
        </ContainerPage>
    );
};

ProductDetailWithBackgroundPage.getInitialProps = async ({ query }) => {
    return { query: query };
};

export default ProductDetailWithBackgroundPage;
