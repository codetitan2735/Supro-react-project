import React from 'react';
import Link from 'next/link';
import { baseUrl } from '~/repositories/Repository';
import LazyLoad from 'react-lazyload';
import ModulePostAuthorSmall from '~/components/elements/articles/modules/ModulePostAuthorSmall';
import moment from 'moment';

const ArticleList = ({ post }) => {
    let partialThumbnail, partialCategories;
    if (post) {
        if (post.thumbnail !== null) {
            partialThumbnail = (
                <LazyLoad>
                    <img src={`${baseUrl}${post.thumbnail.url}`} alt="img" />
                </LazyLoad>
            );
        }

        if (post.categories) {
            partialCategories = post.categories.map((item) => (
                <Link
                    href="/category/[slug]"
                    as={`/categories/${item.slug}`}
                    key={item.id}>
                    <a>{item.name}</a>
                </Link>
            ));
        }

        return (
            <article className="ps-post ps-post--list">
                <div className="ps-post__thumbnail">
                    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                        <a className="ps-post__overlay"></a>
                    </Link>
                    {partialThumbnail}
                </div>
                <div className="ps-post__content">
                    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                        <a className="ps-post__title">{post.title}</a>
                    </Link>

                    <p className="ps-post__meta">
                        {partialCategories}
                        {moment(post.created_at).format('ll')}
                    </p>
                    <p className="ps-post__meta">
                        <a href="blog-grid.html">DIY</a> June 10, 2019
                    </p>
                    <p>{post.description}</p>
                    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                        <a className="ps-link--under">Read more</a>
                    </Link>
                </div>
            </article>
        );
    }
};

export default ArticleList;
