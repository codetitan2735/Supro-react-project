import React, { useEffect, useState } from 'react';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonPostGrid from '~/components/elements/skeletons/SkeletonPostGrid';
import PostRepository from '~/repositories/PostRepository';
import Link from 'next/link';
import ArticleGrid from '~/components/elements/articles/ArticleGrid';

const HomeBlog = () => {
    const [loading, setLoading] = useState(false);
    const [postItems, setPostItems] = useState(null);

    async function getInitData() {
        setLoading(true);
        const query = {
            _limit: 3,
        };
        const posts = await PostRepository.getPosts(query);

        if (posts) {
            setPostItems(posts);
            setLoading(false);
        }
    }

    useEffect(() => {
        getInitData();
    }, []);

    // Views
    let postItemsView;
    if (!loading) {
        if (postItems) {
            postItemsView = postItems.map((item) => (
                <div
                    className=" col-lg-4 col-md-6 col-sm-12 col-12"
                    key={item.id}>
                    <ArticleGrid post={item} />
                </div>
            ));
        } else {
            postItemsView = <p>No post found.</p>;
        }
    } else {
        postItemsView = generateTempArray(8).map((item) => (
            <div className=" col-lg-4 col-md-6 col-sm-12 col-12" key={item}>
                <SkeletonPostGrid />
            </div>
        ));
    }

    return (
        <div className="ps-home-blog">
            <div className="container">
                <div className="ps-section__header">
                    <figure>
                        <figcaption>Latest News</figcaption>
                        <p>
                            Our recent articles about fashion ideas & products
                        </p>
                    </figure>
                    <Link href="/blog">
                        <a className="ps-link--under">See all news</a>
                    </Link>
                </div>
                <div className="ps-section__content">
                    <div className="row">{postItemsView}</div>
                </div>
            </div>
        </div>
    );
};

export default HomeBlog;
