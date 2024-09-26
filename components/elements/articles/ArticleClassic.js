import React from 'react';
import Link from "next/link";
import LazyLoad from 'react-lazyload';
import { baseUrl } from '~/repositories/Repository';

const ArticleClassic = ({post}) => {
    let partialThumbnail, partialCategories;
    if (post) {
        if (post.wide_thumbnail !== null) {
            partialThumbnail =
                <LazyLoad>
                    <img src={`${baseUrl}${post.wide_thumbnail.url}`} alt="img"/>
                </LazyLoad>;
        }

        if (post.categories) {
            partialCategories = post.categories.map(item => (
                <Link href="/category/[slug]" as={`/categories/${item.slug}`} key={item.id}>
                    <a>{item.name}</a>
                </Link>
            ));
        }
        return (
            <article className="ps-post ps-post--classic">
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
                        <span>
                            <a href="#">Cheryl Ng</a>
                        </span>
                        <span className="ps-post__posted">Jul 12, 2020</span>
                    </div>
                    <div className="ps-post__short-desc">
                        <p>{post.description}</p>
                    </div>
                    <div className="ps-post__footer">
                        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                            <a className="ps-post__morelink">Continue Reading</a>
                        </Link>
                    </div>
                </div>
            </article>
        );
    }
   /* return(
        <article className="ps-post ps-post--large">
            <div className="ps-post__thumbnail">
                <Link href="#">
                    <a className="ps-post__overlay"></a>
                </Link>
                <img src="/static/img/post-primary/2.jpg" alt="img"/>
            </div>
            <div className="ps-post__content">
                <div className="ps-post__categories">
                    <Link href="#">
                        <a>Life Style</a>
                    </Link>
                </div>
                <h4 className="ps-post__title">
                    <Link href="#">
                        <a>A Photo Journalist’s Transformative Journey</a>
                    </Link>
                </h4>
                <div className="ps-post__meta">
                    <span className="ps-post__posted">Jul 12, 2020</span>
                    <span><a href="#">Admin</a></span>
                </div>
                <div className="ps-post__desc">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi cupiditate ea magni nam quisquam rem! Animi architecto, commodi dicta distinctio doloremque ex excepturi ipsam nemo, neque repudiandae suscipit veritatis. Commodi dicta distinctio doloremque ex excepturi ipsam nemo, neque repudiandae suscipit veritatis.
                    </p>
                </div>
                <div className="ps-post__footer">
                    <Link href="#">
                        <a className="ps-post__morelink">Continue Reading</a>
                    </Link>
                </div>
            </div>
        </article>
    )*/
};

export default ArticleClassic;