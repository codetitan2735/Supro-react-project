import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { baseUrl } from '~/repositories/Repository';
import LazyLoad from 'react-lazyload';
import ModulePostAuthorSmall from '~/components/elements/articles/modules/ModulePostAuthorSmall';

const ArticlePrimary = ({ post, classes }) => {
    let partialThumbnail, partialCategories;
    const [loading, setLoading] = useState(false);
    if (post) {
        if (post.wide_thumbnail !== null) {
            partialThumbnail = (
                <LazyLoad>
                    <img src={`${baseUrl}${post.wide_thumbnail.url}`} alt="img" />
                </LazyLoad>
            );
        }

        if (post.categories) {
            partialCategories = post.categories.map((item) => (
                <Link href="/category/[slug]" as={`/categories/${item.slug}`} key={item.id}>
                    <a>{item.name}</a>
                </Link>
            ));
        }
    }

    useEffect(() => {}, [
        setTimeout(function () {
            setLoading(false);
        }, 1000),
    ]);

    return (
        <article
            className={`ps-post ps-post--fullscreen bg--cover ${classes && classes}`}
            style={{ backgroundImage: `url(${baseUrl}${post.wide_thumbnail.url})` }}
        >
            <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                <a className="ps-post__overlay"></a>
            </Link>
            <div className="ps-post__content">
                <div className="ps-post__categories">{partialCategories}</div>
                <h4 className="ps-post__title">{post.title}</h4>
                <div className="ps-post__meta">
                 {/*   <ModulePostAuthorSmall />*/}
                    <span>Aug 29, 2020</span>
                </div>
                <Link href="/post/[slug]" as={`/post/${post.slug}?layout=sidebar`}>
                    <a className="ps-post__morelink">Continue Reading</a>
                </Link>

            </div>
        </article>
    );
};

export default ArticlePrimary;
