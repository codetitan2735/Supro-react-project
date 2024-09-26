import React from 'react';
import Head from 'next/head';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';

const ContainerProductDetailPage = ({ children, title = 'Product' }) => {
    let titleView;
    if (title !== undefined) {
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
            <main>{children}</main>
            <FooterDefault />
        </div>
    );
};

export default ContainerProductDetailPage;
