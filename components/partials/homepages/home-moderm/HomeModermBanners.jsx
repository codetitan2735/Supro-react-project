import React from 'react';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Slider from 'react-slick';
import { baseUrl } from '~/repositories/Repository';

const HomeModermBanners = () => {
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
        <Slider {...carouselSetting} className="ps-carousel">
            <div className="carousel-item">
                <div
                    className="ps-banner--4 bg--top-right"
                    style={{
                        backgroundImage: `url(/static/img/banner/home-moderm/1.jpg)`,
                    }}>
                    <div className="ps-banner__content">
                        <div className="ps-banner__left">
                            <small>New Now</small>
                            <h3>Eames LCW Chair Red Stained</h3>
                            <p>
                                This stunning red ash chair from Vitra has
                                matured into an iconic piece of furniture.
                            </p>
                            <a className="ps-btn ps-btn--rounded" href="#">
                                Shop now
                            </a>
                        </div>
                        <div className="ps-banner__right">
                            <div className="ps-banner__image">
                                <img
                                    src="/static/img/banner/home-moderm/product-1.png"
                                    alt=""
                                />
                                <div className="ps-banner__badge blue">
                                    <span>
                                        save<strong>25%</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div
                    className="ps-banner--4 bg--top-right"
                    style={{
                        backgroundImage: `url(/static/img/banner/home-moderm/2.jpg)`,
                    }}>
                    <div className="ps-banner__content">
                        <div className="ps-banner__left">
                            <small>New Now</small>
                            <h3>Erwiana Sofa</h3>
                            <p>
                                Upholstered in a polyester, linen, cotton,
                                viscose blend fabric for a breathable and
                                durable design
                            </p>
                            <a
                                className="ps-btn ps-btn--rounded ps-btn--lightcyan"
                                href="#">
                                Shop now
                            </a>
                        </div>
                        <div className="ps-banner__right">
                            <div className="ps-banner__image inside">
                                <img
                                    src="/static/img/banner/home-moderm/product-2.png"
                                    alt=""
                                />
                                <div className="ps-banner__badge">
                                    <span>
                                        save<strong>25%</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div
                    className="ps-banner--4 bg--top-right"
                    style={{
                        backgroundImage: `url(/static/img/banner/home-moderm/3.jpg)`,
                    }}>
                    <div className="ps-banner__content">
                        <div className="ps-banner__left">
                            <small>New Now</small>
                            <h3>Small Toiletpaper Lampshade</h3>
                            <p>
                                Bring distinctive design to your home with this
                                Small Toiletpaper lampshade.
                            </p>
                            <a
                                className="ps-btn ps-btn--rounded ps-btn--lightcyan"
                                href="#">
                                Shop now
                            </a>
                        </div>
                        <div className="ps-banner__right">
                            <div className="ps-banner__image inside">
                                <img
                                    src="/static/img/banner/home-moderm/product-3.png"
                                    alt=""
                                />
                                <div className="ps-banner__badge">
                                    <span>
                                        save<strong>25%</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default HomeModermBanners;
