import React from 'react';
import Head from 'next/head';
import Subscribe from '~/components/shared/sections/Subscribe';
import InstagramImages from '~/components/shared/sections/InstagramImages';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';

const ContainerHomeCategories = ({ children, title }) => {
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
            <HeaderDefault grid={true} />
            <main id="homepage-categories">
                {children}
                <Subscribe />
                <InstagramImages />
                <FooterDefault />
            </main>
        </div>
    );
};

export default ContainerHomeCategories;
