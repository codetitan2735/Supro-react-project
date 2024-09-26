import React from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';

const HomeDefaultBanner = () => {
    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="ps-home-banner">
            <Slider {...carouselSetting} className="ps-carousel">
                <div className="carousel-item">
                    <div
                        className="ps-banner--3 bg--top-right"
                        style={{
                            background: `url(/static/img/bg/home-default/1.jpg)`,
                        }}>
                        <div className="ps-banner__content">
                            <p>Next SS Preview</p>
                            <h3>
                                Woman <br /> Shoes
                            </h3>
                            <a className="ps-link--under" href="#">
                                Discover more
                            </a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div
                        className="ps-banner--3 bg--top-left right"
                        style={{
                            background: `url(/static/img/bg/home-default/2.jpg)`,
                        }}>
                        <div className="ps-banner__content">
                            <p>Trendy Pink</p>
                            <h3>Sneakers</h3>
                            <a className="ps-link--under" href="#">
                                Discover more
                            </a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div
                        className="ps-banner--3 bg--cover white"
                        style={{
                            background: `url(/static/img/bg/home-default/3.jpg)`,
                        }}>
                        <div className="ps-banner__content">
                            <h3>
                                Winter <br /> Collection
                            </h3>
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

export default HomeDefaultBanner;
