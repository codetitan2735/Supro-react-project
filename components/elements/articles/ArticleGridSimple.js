import React from 'react';
import Link from "next/link";
import {baseUrl} from "~/repositories/Repository";
import LazyLoad from 'react-lazyload';
const ArticleGridSimple = ({post}) => {
    let partialThumbnail, partialCategories;
    if (post) {

        if (post.thumbnail !== null) {
            partialThumbnail = <LazyLoad>
                    <img src={`${baseUrl}${post.thumbnail.url}`}/>
                </LazyLoad>;
        }

        if (post.categories) {
            partialCategories = post.categories.map(item =>(
                <Link href="/category/[slug]" as={`/categories/${item.slug}`} key={item.id}>
                    <a>{item.name}</a>
                </Link>
            ))
        }
        return (
            <article className="ps-post ps-post--grid">
                <div className="ps-post__thumbnail">
                    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                        <a className="ps-post__overlay"></a>
                    </Link>
                    {partialThumbnail}
                </div>
                <div className="ps-post__content">
                    <div className="ps-post__categories">
                        {partialCategories}
                    </div>
                    <h4 className="ps-post__title">
                        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                            <a>{post.title}</a>
                        </Link>
                    </h4>
                    <div className="ps-post__meta">
                        <span className="ps-post__posted">Jul 12, 2020</span>
                    </div>
                    <div className="ps-post__footer">
                        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                            <a className="ps-post__morelink line">Continue Reading <i className="feather icon icon-chevrons-right"></i></a>
                        </Link>
                    </div>
                </div>
            </article>
        )
    }
};

export default ArticleGridSimple;