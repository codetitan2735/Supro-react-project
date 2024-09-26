import React from 'react';
import Head from 'next/head';
import FooterBoxed from '~/components/shared/footers/FooterBoxed';
import Subscribe from '~/components/shared/sections/Subscribe';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';

const ContainerHomeSimple = ({ children, title }) => {
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
            <HeaderDefault fullwidth={true} />
            <main id="homepage-simple">
                {children}
                <Subscribe />
                <FooterBoxed />
            </main>
        </div>
    );
};

export default ContainerHomeSimple;
