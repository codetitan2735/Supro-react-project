import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import SuproPagination from '~/components/elements/basic/SuproPagination';
import BlogListItems from '~/components/partials/blog/BlogListItems';

const BlogListPage = () => {
    return (
        <ContainerPage title="Blog List">
            <div className="ps-page--default ps-page--blog">
                <div className="container">
                    <div className="ps-blog ps-blog--list">
                        <div className="ps-blog__header">
                            <figure>
                                <figcaption>ALWAYS DO YOUR BEST</figcaption>
                                <h3>
                                    What you plant now, you will harvest later
                                </h3>
                            </figure>
                            <ul className="ps-blog__categories">
                                <li className="active">
                                    <a href="#">All Categories</a>
                                </li>
                                <li>
                                    <a href="#">Fashion</a>
                                </li>
                                <li>
                                    <a href="#">DIY</a>
                                </li>
                                <li>
                                    <a href="#">Women</a>
                                </li>
                                <li>
                                    <a href="#">Beauty</a>
                                </li>
                                <li>
                                    <a href="#">Lifestyle</a>
                                </li>
                            </ul>
                        </div>
                        <div className="ps-blog__content">
                            <BlogListItems />
                        </div>
                        <div className="ps-blog__footer">
                            <SuproPagination />
                        </div>
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default BlogListPage;
