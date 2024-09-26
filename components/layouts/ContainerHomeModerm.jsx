import React from 'react';
import Head from 'next/head';
import Subscribe from '~/components/shared/sections/Subscribe';
import FooterModerm from '~/components/shared/footers/FooterModerm';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';

const ContainerHomeModerm = ({ children, title }) => {
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
            <HeaderDefault />
            <main
                className="ps-page bg--top"
                id="homepage-moderm"
                style={{
                    backgroundImage: `url(/static/img/bg/home-best-selling/home_best_selling.png)`,
                }}>
                <div className="ps-page__content">
                    {children}
                    <Subscribe />
                    <FooterModerm />
                </div>
            </main>
        </div>
    );
};

export default ContainerHomeModerm;
