import React from 'react';
import Link from 'next/link';
import ModuleArticleTags from '~/components/elements/articles/modules/ModuleArticleTags';
import ModuleArticleSocialSharing from '~/components/elements/articles/modules/ModuleArticleSocialSharing';

import { baseUrl } from '~/repositories/Repository';

const ArticleDetail = ({ post }) => {
    let partialCategories, newPostContent, tagItems;
    if (post) {
        if (post.tags) {
            post.tags.replace(/,/g, '');
            tagItems = post.tags.split(',');
        }

        /*  if (post.wide_thumbnail) {
            wideThumbnail = `${baseUrl}${post.wide_thumbnail.url}`;
        } else {
            wideThumbnail = '/static/img/post-hero/bg.jpg';
        }*/

        if (post.categories) {
            partialCategories = post.categories.map((item) => (
                <Link
                    href="/category/[slug]"
                    as={`/categories/${item.slug}`}
                    key={item.id}>
                    <a className="ps-post__category">{item.name}</a>
                </Link>
            ));
        }
        if (post.content.match(/<img/)) {
            newPostContent = post.content.replace(
                /<img([^>]*)\ssrc=(['"])(?:[^\2\/]*\/)*([^\2]+)\2/gi,
                `<img$1 src=$2${baseUrl}/uploads/$3$2`
            );
        } else {
            newPostContent = post.content;
        }
    }

    return (
        <div className="ps-post--detail">
            <div className="ps-post__header">
                <small>DIY</small>
                <h2>
                    Five things you only know if you were at Chanel’s Hamburg
                    Show
                </h2>
                <div className="ps-post__meta">
                    <span>
                        Author:<a href="#"> Supro</a>
                    </span>
                    <span>
                        Published in:<a href="#"> June 10, 2019</a>
                    </span>
                </div>
            </div>
            <div className="ps-post__content ps-document">
                <div className="ps-post__text">
                    <h4 className="text-center">
                        KERING is distributing 70 percent of its stake in Puma
                        to shareholders in order to focus on its luxury
                        portfolio of brands.
                    </h4>
                </div>
                <div className="mb-100">
                    <img src="/static/img/blog/detail-1.jpg" alt="" />
                </div>
                <div className="ps-post__text">
                    <p>
                        <span className="cap">K</span>ering’s ambition is to
                        continue to grow and develop its powerful ensemble of
                        houses in couture, leather goods, jewellery and watches,
                        leveraging on its high cash-flow generation and strong
                        financial position, the French luxury goods group, which
                        has Gucci, Saint Laurent, Alexander McQueen, Balenciaga,
                        Christopher Kane and Stella McCartney in its stable,
                        told WWD.
                    </p>
                    <p>
                        The shift will see Kering reduce its stake to 16 percent
                        from 86 percent, with Kering shareholder Artemis winding
                        up with a 29 percent stake in the sports brand, and
                        about 55 percent of Puma’s stock free-floating on the
                        stock market.
                    </p>
                    <blockquote className="ps-blockquote">
                        <p>
                            When you love fashion, there is no weekend.
                            Everything just blends together.
                        </p>
                    </blockquote>
                    <p>
                        Jean-Marc Duplaix, Kering’s chief financial officer,
                        said that the group chose not to sell Puma outright in
                        order to avoid a lengthy sale process that would
                        destabilise the brand, which has seen revenue growth
                        owing in part to its high-profile collaboration with
                        Rihanna.
                    </p>
                </div>
                <div className="ps-post__text mb-0">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                            <div className="mb-100">
                                <img
                                    src="/static/img/blog/detail-2.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                            <div className="mb-100">
                                <img
                                    src="/static/img/blog/detail-3.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <h4>Learn how to motivate yourself</h4>
                    <p>
                        François-Henri Pinault, chief executive officer and
                        chairman, added that the distribution is a “significant
                        milestone” in the company’s history: “Kering dedicating
                        itself entirely to the development of its luxury houses,
                        whose enduring appeal, built on creative audacity and
                        innovativeness, will allow us to continue to gain market
                        share and create value,” he said.
                    </p>
                    <h4>Enhance your life by having a sense of purpose</h4>
                    <p className="mb-0">
                        We are proud to have supported the turnaround of Puma,
                        which now has unrivalled capabilities to take full
                        advantage of the specific dynamics of its global markets
                        and is poised to achieve substantial growth.
                    </p>
                </div>
            </div>
            <div className="ps-post__footer ps-post__text pt-60">
                <p className="ps-post__tags">
                    Tags:<a href="#">Beauty</a>
                    <a href="#">Motivation</a>
                    <a href="#">Women</a>
                </p>
                <p className="ps-post__sharing">
                    Share on:
                    <a href="#">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </p>
            </div>
            <div className="ps-post__author ps-post__text">
                <div className="ps-post__author-img">
                    <img src="/static/img/users/1.jpg" alt="" />
                </div>
                <figure>
                    <figcaption>Supro</figcaption>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                    </p>
                </figure>
            </div>
        </div>
    );
};

export default ArticleDetail;
