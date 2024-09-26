import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import BlogSidebar from '~/components/partials/blog/BlogSidebar';

const BlogSidebarPage = () => {
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Blog Sidebar',
        },
    ];

    return (
        <ContainerPage title="Blog List">
            <div className="ps-page--default ps-page--blog white">
                <div
                    className="ps-page__header bg--cover"
                    style={{
                        backgroundImage: `url('/static/img/bg/blog-sidebar.jpg')`,
                    }}>
                    <div className="container">
                        <h3 className="text-uppercase">Blog with sidebar</h3>
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                </div>
            </div>
            <BlogSidebar />
        </ContainerPage>
    );
};

export default BlogSidebarPage;
