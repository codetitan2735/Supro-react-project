import React from 'react';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Slider from 'react-slick';
import { baseUrl } from '~/repositories/Repository';

const HomeSimpleBanners = () => {
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
                    className="ps-banner--2 bg--top"
                    style={{
                        backgroundImage: `url(/static/img/banner/home-2/1.jpg)`,
                    }}>
                    <div className="ps-banner__content">
                        <h5>NEW ARRIVAL</h5>
                        <h3>
                            Monkey <br /> Wood
                        </h3>
                        <p>
                            This summer vitrine brings you joy and excellence in
                            customer <br />
                            support. It not only looks great but it uses the
                            latest trends in <br />
                            web development to insure fast transactions.
                        </p>
                        <a className="ps-btn">Buy Now</a>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div
                    className="ps-banner--2 reverse bg--top"
                    style={{
                        backgroundImage: `url(/static/img/banner/home-2/3.jpg)`,
                    }}>
                    <div className="ps-banner__content">
                        <h5>NEW ARRIVAL</h5>
                        <h3>
                            Bronze <br /> Pot
                        </h3>
                        <p>
                            This summer vitrine brings you joy and excellence in
                            customer <br />
                            support. It not only looks great but it uses the
                            latest trends in <br />
                            web development to insure fast transactions.
                        </p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default HomeSimpleBanners;
