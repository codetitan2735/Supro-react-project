import React from 'react';
import Head from 'next/head';
import FooterBoxed from '~/components/shared/footers/FooterBoxed';

const ContainerHomeBoxed = ({ children, title }) => {
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
            <main
                className="ps-page bg--top"
                id="homepage-boxed"
                style={{
                    backgroundImage: `url(/static/img/bg/boxed-bg.jpg)`,
                }}>
                <div className="ps-page__content">
                    {children}
                    <FooterBoxed />
                </div>
            </main>
        </div>
    );
};

export default ContainerHomeBoxed;
