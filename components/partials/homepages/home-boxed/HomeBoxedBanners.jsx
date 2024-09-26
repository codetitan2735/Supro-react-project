import React from 'react';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Slider from 'react-slick';
import { baseUrl } from '~/repositories/Repository';

const HomeBoxedBanners = () => {
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
        <section className="ps-home-banner">
            <Slider {...carouselSetting} className="ps-carousel">
                <div className="slide-item">
                    <div
                        className="ps-banner bg--top"
                        style={{
                            backgroundImage: `url(/static/img/banner/home-1/1.jpg)`,
                        }}>
                        <div className="ps-banner__content">
                            <h3>
                                Bronze <br /> Pots
                            </h3>
                            <p>
                                This summer vitrine brings you joy and
                                excellence in customer support.
                            </p>
                            <a className="ps-btn" href="#">
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="slide-item">
                    <div
                        className="ps-banner bg--top white"
                        style={{
                            backgroundImage: `url(/static/img/banner/home-1/2.jpg)`,
                        }}>
                        <div className="ps-banner__content">
                            <h3>
                                There is <br /> Beautiy In <br /> Simplicity
                            </h3>
                            <p>Live with less. Less is more</p>
                            <a className="ps-btn" href="#">
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="slide-item">
                    <div
                        className="ps-banner bg--top"
                        style={{
                            backgroundImage: `url(/static/img/banner/home-1/3.jpg)`,
                        }}>
                        <div className="ps-banner__content">
                            <h3>Buy Less. Choose well</h3>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default HomeBoxedBanners;
