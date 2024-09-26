import React from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import { baseUrl } from '~/repositories/Repository';

const HomeFullwidthBanners = () => {
    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="ps-home-banner">
            <Slider {...carouselSetting} className="ps-carousel">
                <div className="carousel-item">
                    <div
                        className="ps-banner--3 small bg--top-right"
                        style={{
                            backgroundImage: `url(/static/img/banner/home-fullwidth/1.jpg)`,
                        }}>
                        <div className="ps-banner__content">
                            <p>Special Price</p>
                            <h3>
                                Nylon Blend <br /> Jacket
                            </h3>
                            <h5>
                                Casual line <br /> Nylon Mix fabic <br />{' '}
                                Waterproof fabric
                            </h5>
                            <div className="ps-banner__content">
                                <a className="ps-link--under" href="#">
                                    Discover more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div
                        className="ps-banner--3 small bg--top-right"
                        style={{
                            backgroundImage: `url(/static/img/banner/home-fullwidth/2.jpg)`,
                        }}>
                        <div className="ps-banner__content">
                            <p>Next Arrival</p>
                            <h3>
                                Light Nylon <br /> Outerwear
                            </h3>
                            <h5>
                                Casual line <br /> Nylon Mix fabic <br />{' '}
                                Buttoned Collar
                            </h5>
                            <a className="ps-link--under" href="#">
                                Discover more
                            </a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div
                        className="ps-banner--3 small bg--top-right"
                        style={{
                            backgroundImage: `url(/static/img/banner/home-fullwidth/3.jpg)`,
                        }}>
                        <div className="ps-banner__content">
                            <p>Trending Now</p>
                            <h3>
                                Regular <br /> Cotton Shirt
                            </h3>
                            <h5>
                                Casual line <br /> Nylon Mix fabic <br />{' '}
                                Waterproof fabric
                            </h5>
                            <a className="ps-link--under" href="#">
                                Discover more
                            </a>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default HomeFullwidthBanners;
