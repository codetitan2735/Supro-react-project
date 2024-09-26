import React from 'react';
import { baseUrl } from '~/repositories/Repository';

const AboutVideo = () => {
    return (
        <div className="ps-about-video">
            <div className="container">
                <div
                    className="ps-section__header bg--cover"
                    style={{
                        backgroundImage: `url('/static/img/pages/about-video.jpg')`,
                    }}>
                    <figure>
                        <p>Work hard, have fun</p>
                        <h3>NO DRAMA</h3>
                        <a href="#">
                            <img src="img/pages/play-icon.png" alt="" />
                        </a>
                    </figure>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 ">
                            <div className="ps-block--box-icon">
                                <i className="icon-location"></i>
                                <figure>
                                    <figcaption>Free Shipping</figcaption>
                                    <p>Orders over $100</p>
                                </figure>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 ">
                            <div className="ps-block--box-icon">
                                <i className="icon-refresh"></i>
                                <figure>
                                    <figcaption>Free Return</figcaption>
                                    <p>Withthin 30 Days</p>
                                </figure>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 ">
                            <div className="ps-block--box-icon">
                                <i className="icon-lock"></i>
                                <figure>
                                    <figcaption>100% SECURE</figcaption>
                                    <p>Online Shopping</p>
                                </figure>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 ">
                            <div className="ps-block--box-icon">
                                <i className="icon-tag"></i>
                                <figure>
                                    <figcaption>Best Price</figcaption>
                                    <p>Guaranteed</p>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ps-section__footer">
                    <h4>
                        Using technology to inspire and innovate, we aim to make
                        shopping seamless, whether online or in store
                    </h4>
                    <div className="row">
                        <div className="col-lg-6">
                            <p>
                                With over 12 years’ heritage in luxury fashion,
                                we deliver to over 170 countries and offer 24/7
                                advice through MyStylist, our dedicated
                                fashion-concierge team
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <p>
                                Choose how you want to experience us – online,
                                in our London stores, at No.23, our
                                private-shopping townhouse, or at one of our
                                international events.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutVideo;
