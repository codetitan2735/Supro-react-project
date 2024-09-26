import React from 'react';
import Head from 'next/head';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import Subscribe from '~/components/shared/sections/Subscribe';

const ContainerPage = ({ children, title = 'Page' }) => {
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
            {/*<Subscribe />*/}
            <FooterDefault />
        </div>
    );
};

export default ContainerPage;
