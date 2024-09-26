import React from 'react';
import Head from 'next/head';
import FooterBoxed from '~/components/shared/footers/FooterBoxed';
import HeaderCenter from '~/components/shared/headers/HeaderCenter';

const ContainerHomeClassic = ({ children, title }) => {
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
            <HeaderCenter />
            <main id="homepage-classic">{children}</main>
            <FooterBoxed />
        </div>
    );
};

export default ContainerHomeClassic;
