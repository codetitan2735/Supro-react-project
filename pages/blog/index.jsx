import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import BlogGrid from '~/components/partials/blog/BlogGrid';

const BlogGridPage = () => {
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Blog Grid',
        },
    ];

    return (
        <ContainerPage title="Blog Grid">
            <div className="ps-page--default ps-page--blog">
                <div
                    className="ps-page__header bg--cover"
                    style={{
                        backgroundImage: `url(/static/img/bg/blog-grid.jpg)`,
                    }}>
                    <div className="container">
                        <h3 className="text-uppercase">BLOG GRID</h3>
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                </div>
            </div>
            <BlogGrid column="3" />
        </ContainerPage>
    );
};

export default BlogGridPage;
