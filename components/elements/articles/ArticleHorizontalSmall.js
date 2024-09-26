import React from 'react';
import Link from "next/link";
import {baseUrl} from "~/repositories/Repository";
import LazyLoad from 'react-lazyload';

const ArticleHorizontalSmall = ({post}) => {
    let partialThumbnail, partialCategories;
    if (post) {
        if (post.thumbnail !== null) {
            partialThumbnail = <LazyLoad>
                    <img src={`${baseUrl}${post.thumbnail.url}`}/>
                </LazyLoad>;
        }

        return (
            <article className="ps-post ps-post--horizontal small">
                <div className="ps-post__thumbnail">
                    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                        <a className="ps-post__overlay"></a>
                    </Link>
                    {partialThumbnail}
                </div>
                <div className="ps-post__wrapper">
                    <div className="ps-post__content">
                        <h4 className="ps-post__title">
                            <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                                <a>{post.title}</a>
                            </Link>
                        </h4>
                        <div className="ps-post__meta">
                            <span className="ps-post__posted">Jul 12, 2020</span>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
};

export default ArticleHorizontalSmall;