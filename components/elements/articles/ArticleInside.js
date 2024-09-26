import React from 'react';
import Link from 'next/link';
import { StrapiPostThumbnail, StrapiPostTitle } from '~/utilities/post-helpers';

const ArticleInside = ({ post }, props) => {
    const { rounded } = props;
    const imageThumbnail = StrapiPostThumbnail(post);
    const title = StrapiPostTitle(post);
    let classes;
    if (rounded) {
        classes = 'rounded';
    }
    if (post) {
        return (
            <article className={`ps-post ps-post--inside ${classes}`}>
                <div className="ps-post__thumbnail">
                    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                        <a className="ps-post__overlay"></a>
                    </Link>
                    {imageThumbnail}
                </div>
                <div className="ps-post__content">
                    <div className="ps-post__meta">
                        <span className="ps-post__posted">Jul 12, 2020</span>
                    </div>
                    {title}
                </div>
            </article>
        );
    }
};

export default ArticleInside;
