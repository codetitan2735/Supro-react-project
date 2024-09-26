import React from 'react';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Slider from 'react-slick';

const HomeClassicBanners = () => {
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
            <div className="ps-section__container">
                <Slider {...carouselSetting} className="ps-carousel">
                    <div className="carousel-item">
                        <div
                            className="ps-banner--3 classic small bg--top-right"
                            style={{
                                backgroundImage: `url(/static/img/banner/home-classic/1.jpg)`,
                            }}>
                            <div className="ps-banner__content">
                                <p>New Arrival</p>
                                <h3>
                                    Gingham <br /> Check Shirt
                                </h3>
                                <h5>
                                    Slim fit gingham shirt with long sleeves{' '}
                                    <br /> button-up fastening.
                                </h5>
                                <a
                                    className="ps-btn ps-btn--outline"
                                    href="#"
                                    data-animation-in="fadeInUp"
                                    data-animation-out="animate-out fadeOutDown">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div
                            className="ps-banner--3 classic small bg--top-right"
                            style={{
                                backgroundImage: `url(/static/img/banner/home-classic/2.jpg)`,
                            }}>
                            <div className="ps-banner__content">
                                <p>Next Arrival</p>
                                <h3>
                                    Parka with <br /> Bomber Jacket
                                </h3>
                                <h5>
                                    Features collar with hood, zip and snap{' '}
                                    <br /> button fastening.
                                </h5>
                                <a
                                    className="ps-btn ps-btn--outline"
                                    href="#"
                                    data-animation-in="fadeInUp"
                                    data-animation-out="animate-out fadeOutDown">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div
                            className="ps-banner--3 classic small bg--top-right"
                            style={{
                                backgroundImage: `url(/static/img/banner/home-classic/3.jpg)`,
                            }}>
                            <div className="ps-banner__content">
                                <p>Trending Now</p>
                                <h3>
                                    Parka with faux <br /> fur hood
                                </h3>
                                <h5>
                                    Features button and zip fastening, side and{' '}
                                    <br /> chest pockets and interior lining.
                                </h5>
                                <a className="ps-btn ps-btn--outline" href="#">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default HomeClassicBanners;
