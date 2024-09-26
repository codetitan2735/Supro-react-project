import React from 'react';
import Head from 'next/head';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';

const ContainerHomeFullWidth = ({ children, title }) => {
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
            <main id="homepage-fullwidth">{children}</main>
            <FooterDefault />
        </div>
    );
};

export default ContainerHomeFullWidth;
