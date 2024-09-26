import React from 'react';
import Head from 'next/head';
import Subscribe from '~/components/shared/sections/Subscribe';
import FooterWithPaymentMethods from '~/components/shared/footers/FooterWithPaymentMethods';
import HeaderSimple from '~/components/shared/headers/HeaderSimple';

const ContainerHomeBestSelling = ({ children, title }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }
    return (
        <div className="supro">
            <Head>
                <title>{titleView}</title>
            </Head>
            <HeaderSimple />
            <main
                className="ps-page bg--top"
                id="homepage-best-selling"
                style={{
                    backgroundImage: `url(/static/img/bg/home-best-selling/home_best_selling.png)`,
                }}>
                <div className="ps-page__content">
                    {children}
                    <Subscribe />
                    <FooterWithPaymentMethods />
                </div>
            </main>
        </div>
    );
};

export default ContainerHomeBestSelling;
